/*** Note this is not a CRUD store this is to drive the transport planning view */
import axios from "axios"
import moment from "moment"
import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"

const dateFormat = "YYYY-MM-DD HH:mm:ss"

const state = {
  pageView: "6",
  horizonTimeStart: 0,
  horizonTimeEnd: 0,
  searchOptions: {
    includeOutstanding: true,
    groupByMethod: true,
    groupByCity: false,
    groupByAddress: false,
    advancedClustering: true,
  },
  toBePlannedSidePanelVisible: false,
  plannedSidePanelVisible: false,
  demandGroups: {},
  totalDemandsFound: 0,
  unplannedTransportDrops: [],
  plannedTransportDrops: [],
  selectedTransportDrops: [{}, {}, {}],
  slotBarView: "large",
}

const getters = {
  getPageView: (state) => state.pageView,
  getHorizonTimeStart: (state) => state.horizonTimeStart,
  getHorizonTimeEnd: (state) => state.horizonTimeEnd,
  getToBePlannedSidePanelVisible: (state) => state.toBePlannedSidePanelVisible,
  getPlannedSidePanelVisible: (state) => state.PlannedSidePanelVisible,
  getDemandGroups: (state) => state.demandGroups,
  getTotalDemandsFound: (state) => state.totalDemandsFound,
  getUnplannedTransportDrops: (state) => state.unplannedTransportDrops,
  getPlannedTransportDrops: (state) => state.plannedTransportDrops,
  getSelectTransportDrops: (state) => state.selectedTransportDrops,
  getSlotBarView: (state) => state.slotBarView,
  getSearchOptions: (state) => state.searchOptions,
}

const actions = {
  async calculateGroups(context) {
    //todo handle sites in query

    this.dispatch("application/setLoading", true)
    let searchOptions = this.getters["transportplanning/getSearchOptions"]
    let queryobject = new queryObject()

    queryobject.addCriteria({
      field: "shippingdemandline.linestatus",
      value: 10,
      operator: operatorType.less,
    })

    queryobject.addCriteria({
      field: "shippingdemand.requiredshipdate",
      value: this.getters["transportplanning/getHorizonTimeEnd"],
      operator: "<=",
    })

    if (!searchOptions.includeOutstanding) {
      queryobject.addCriteria({
        field: "shippingdemand.requiredshipdate",
        value: this.getters["transportplanning/getHorizonTimeStart"],
        operator: ">=",
      })
    }

    let APICall = {
      callmethod: "groupshippingdemandslines",
      options: {
        queryparams: await queryobject.getQueryParams(),
        grouping: {
          method: searchOptions.groupByMethod,
          city: searchOptions.groupByCity,
          address: searchOptions.groupByAddress,
          clustering: searchOptions.advancedClustering,
        },
      },
      token: this.getters["userSession/getUserSessionToken"],
    }

    let res = await axios.post(
      `${window.$ApiURL}/shippingdemandline.php`,
      APICall
    )

    if (typeof res.data === "string") {
      console.log("fetch error" + res.data)
    }

    context.commit("setDemandGroups", res.data)

    let count = 0
    let groups = res.data
    if (groups) {
      groups.forEach((group) => {
        count += group.lines.length
      })
    }

    context.commit("setTotalDemandsFound", count)

    await this.dispatch("application/setLoading", false)
    return res.data
  },
  async setHorizonValue(context, { horizonLength, includeOutstanding }) {
    horizonLength
    includeOutstanding
    let now = parseInt(Date.now())
    let momentnow = moment(now)

    context.commit("setHorizonTimeStart", 0)
    if (!includeOutstanding) {
      context.commit("setHorizonTimeStart", momentnow.format(dateFormat))
    }

    context.commit(
      "setHorizonTimeEnd",
      momentnow.add(horizonLength, "hours").format(dateFormat)
    )

    context.commit("setPageView", horizonLength)
  },
  async getUnplannedTransportDrops(context) {
    let queryobject = new queryObject()
    queryobject.addCriteria({
      field: "transportdrop.transportdropstatus",
      value: 10,
      operator: operatorType.less,
    })

    let transportDrops = await this.dispatch(`transportdrop/fetch`, {
      page: 1,
      rp: 9999,
      sortname: "",
      sortorder: "",
      queryparams: queryobject.getQueryParams(),
    })

    if (typeof transportDrops.data === "string")
      console.log("fetch Fetchjsgriduserfields" + transportDrops.data)

    context.commit("setUnplannedTransportDrops", transportDrops.data.rows)
  },
  async getPlannedTransportDrops(context) {
    let queryobject = new queryObject()
    queryobject.addCriteria({
      field: "transportdrop.transportdropstatus",
      value: 10,
      operator: operatorType.equals,
    })

    let transportDrops = await this.dispatch(`transportdrop/fetch`, {
      page: 1,
      rp: 9999,
      sortname: "",
      sortorder: "",
      queryparams: queryobject.getQueryParams(),
    })

    context.commit("setPlannedTransportDrops", transportDrops.data.rows)
  },
  async addTransportDropToSlot(context, { transportdrop, slotnumber }) {
    // find slot number and replace the transportdrop
    let slots = context.getters["getSelectTransportDrops"]
    slots[slotnumber] = transportdrop
    context.commit("setSelectedTransportDrops", slots)

    let unplannedTransportDrops = context.getters["getUnplannedTransportDrops"]

    let newUplannedTransportDrops = unplannedTransportDrops.filter(
      (transportDropRecord) => {
        return (
          parseInt(transportDropRecord.transportdropid) !==
          parseInt(transportdrop.transportdropid)
        )
      }
    )
    context.commit("setUnplannedTransportDrops", newUplannedTransportDrops)
  },
  async addDemandGroupToSlot(context, { demandgroup, slotnumber }) {
    if (demandgroup?.lines.length < 1) {
      return { error: "Demand Group Has No Lines" }
    }

    // check slot has drop available
    let transportDropFromSlot =
      context.getters["getSelectTransportDrops"][slotnumber]

    if (Object.keys(transportDropFromSlot).length < 1) {
      return { error: "Slot Empty" }
    }

    demandgroup.lines.forEach((line) => {
      this.dispatch("transportplanning/addShippingDemandLineToSlot", {
        shippingdemandline: line,
        slotnumber: slotnumber,
      })
    })

    let groups = this.getters["transportplanning/getDemandGroups"]

    if (groups?.length < 1) {
      return { error: "No Groups Set" }
    }

    let newGroups = groups.filter((group) => {
      return parseInt(group.groupid) != parseInt(demandgroup.groupid)
    })
    this.commit("setDemandGroups", newGroups)
    return { success: true }
  },
  async removeTransprortDropFromSlot(context, { transportdrop, slotnumber }) {
    transportdrop
    let slots = context.getters["getSelectTransportDrops"]
    slots[slotnumber] = {}
    context.commit("setSelectedTransportDrops", slots)

    let unplannedTransportDrops = context.getters["getUnplannedTransportDrops"]
    unplannedTransportDrops.push(transportdrop)
    context.commit("setUnplannedTransportDrops", unplannedTransportDrops)
  },
  async removeTransprortDropFromUnplanned(context, { transportdrop }) {
    let drops = context.getters["getUnplannedTransportDrops"]
    let newDrops = drops.filter((drop) => {
      return (
        parseInt(drop.transportdropid) !==
        parseInt(transportdrop.transportdropid)
      )
    })
    context.commit("setUnplannedTransportDrops", newDrops)
  },
  async addTransportDropToPlanned(context, { transportdrop }) {
    transportdrop
    let drops = context.getters["getPlannedTransportDrops"]
    drops.push(transportdrop)
    context.commit("setPlannedTransportDrops", drops)
  },
  async addShippingDemandLineToSlot(
    context,
    { shippingdemandline, slotnumber }
  ) {
    // check slot has drop available
    let transportDropFromSlot =
      context.getters["getSelectTransportDrops"][slotnumber]

    if (Object.keys(transportDropFromSlot).length < 1) {
      // returned object with data
      return { error: "Slot Empty" }
    }

    let qty = Math.max(
      parseInt(shippingdemandline.shippingdemandqty) -
        parseInt(shippingdemandline.plannedQty),
      0
    )
    if (isNaN(qty)) {
      qty = shippingdemandline.shippingdemandqty
    }

    let transportdropline = {
      transportdropid: transportDropFromSlot.transportdropid,
      shippingdemandlineid: shippingdemandline.shippingdemandlineid,
      qty: qty,
    }

    let response = await this.dispatch(
      "transportdropline/add",
      transportdropline
    )

    // check for errors
    if (response.errors.length > 0) {
      return response.errors
    }

    let queryobject = new queryObject()
    queryobject.addCriteria({
      field: "transportdrop.transportdropid",
      value: transportDropFromSlot.transportdropid,
      operator: operatorType.equals,
    })

    let transportDrops = await this.dispatch(`transportdrop/fetch`, {
      page: 1,
      rp: 9999,
      sortname: "",
      sortorder: "",
      queryparams: queryobject.getQueryParams(),
    })

    let slots = context.getters["getSelectTransportDrops"]
    slots[slotnumber] = transportDrops.data.rows[0]
    context.commit("setSelectedTransportDrops", slots)

    await this.dispatch(`transportplanning/removeDemandGroupLine`, {
      shippingdemandlineid: shippingdemandline.shippingdemandlineid,
      qty: qty,
    })

    return response
  },
  async removeDemandGroupLine(context, { shippingdemandlineid, qty }) {
    context
    shippingdemandlineid
    qty

    let DemandGroups = this.getters["transportplanning/getDemandGroups"]

    /* todo
    let foundGroupIdx = 0
    let foundLineIdx = 0
    let found = false
    console.log("test")
    DemandGroups.find((DemandGroup, groupidx) => {
      DemandGroup.lines.find((DemandLine, lineidx) => {
        if ((DemandLine.shippingdemandlineid = shippingdemandlineid)) {
          foundGroupIdx = groupidx
          foundLineIdx = lineidx
          found = true
        }
        return found
      })
      return found
    })
    */

    console.log(DemandGroups)

    //check qty and change value if less than total
  },
}

const mutations = {
  setPageView(state, view) {
    state.pageView = view
  },
  setHorizonTimeStart(state, datetime) {
    state.horizonTimeStart = datetime
  },
  setHorizonTimeEnd(state, datetime) {
    state.horizonTimeEnd = datetime
  },
  setToBePlannedSidePanelVisible(state, visible) {
    state.toBePlannedSidePanelVisible = visible
  },
  setPlannedSidePanelVisible(state, visible) {
    state.PlannedSidePanelVisible = visible
  },
  setDemandGroups(state, demandGroups) {
    state.demandGroups = demandGroups
  },
  setUnplannedTransportDrops(state, transportDrops) {
    state.unplannedTransportDrops = transportDrops
  },
  setPlannedTransportDrops(state, transportDrops) {
    state.plannedTransportDrops = transportDrops
  },
  setSelectedTransportDrops(state, transportDrops) {
    state.selectedTransportDrops = transportDrops
  },
  setSlotBarView(state, value) {
    state.slotBarView = value
  },
  setSearchOptions(state, searchOptions) {
    state.searchOptions = searchOptions
  },
  setTotalDemandsFound(state, count) {
    state.totalDemandsFound = count
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
