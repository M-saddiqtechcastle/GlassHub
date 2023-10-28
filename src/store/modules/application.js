import { processOutBoundTransaction, processSync } from "../../../syncworker.js"
import * as Comlink from "comlink"
import Localbase from "localbase"
//import $ from "jquery"

const state = {
  online: true,
  offlineTimeRemaining: 0,
  loading: true,
  loadingPercent: 0,
  loadingText: "Loading",
  syncInProgress: false,
  syncOutBoundInProcess: false,
  syncInBoundInProcess: false,
  outBoundCachedTransactions: 0,
  storeList: {
    /*  forklift: {
      controller: `${window.$ApiURL}/forklift.php`,
      method: "getdata",
      siteLevel: true,
      companyLevel: false, // use if only company level
      tablePrefix: "forklift",
      syncCommitFunctionName: `addforklift`,
    }, */
    usermenu: {
      controller: `${window.$ApiURL}/user.php`,
      method: "getMenuForUser",
      syncCommitFunctionName: `user/addusermenu`,
      siteLevel: false,
      companyLevel: false, // use if only company level
      tablePrefix: "",
    } /*
    location: {
      controller: `${window.$ApiURL}/location.php`,
      method: "getdata",
      siteLevel: true,
      companyLevel: false, // use if only company level
      tablePrefix: "location",
      syncCommitFunctionName: `addlocation`,
    },
    */,
    icon: {
      controller: `${window.$ApiURL}/icon.php`,
      method: "getdata",
      siteLevel: false,
      companyLevel: false, // use if only company level
      tablePrefix: "icon",
      syncCommitFunctionName: `icon/addicon`,
    },
    /*
    item: {
      controller: `${window.$ApiURL}/item.php`,
      method: "getdata",
      siteLevel: false,
      companyLevel: true, // use if only company level
      tablePrefix: "item",
      syncCommitFunctionName: `additem`,
    },
    inventory: {
      controller: `${window.$ApiURL}/inventory.php`,
      method: "getdata",
      siteLevel: true,
      companyLevel: false, // use if only company level
      tablePrefix: "inventory",
      syncCommitFunctionName: `addinventory`,
    },
    forkliftinventory: {
      controller: `${window.$ApiURL}/forkliftinventory.php`,
      method: "getdata",
      siteLevel: true,
      companyLevel: false, // use if only company level
      tablePrefix: "forkliftinventory",
      syncCommitFunctionName: `addforkliftinventory`,
    },
    forkliftpickassignment: {
      controller: `${window.$ApiURL}/forkliftpickassignment.php`,
      method: "getdata",
      siteLevel: true,
      companyLevel: false, // use if only company level
      tablePrefix: "forkliftpickassignment",
      syncCommitFunctionName: `addforkliftpickassignment`,
    },
    pick: {
      controller: `${window.$ApiURL}/pick.php`,
      method: "getdata",
      siteLevel: true,
      companyLevel: false, // use if only company level
      tablePrefix: "pick",
      syncCommitFunctionName: `addpick`,
    },
    pickline: {
      controller: `${window.$ApiURL}/pickline.php`,
      method: "getdata",
      siteLevel: false,
      companyLevel: false, // use if only company level
      tablePrefix: "pickline",
      syncCommitFunctionName: `addpickline`,
    },
    picklineinventory: {
      controller: `${window.$ApiURL}/picklineinventory.php`,
      method: "getdata",
      siteLevel: false,
      companyLevel: false, // use if only company level
      tablePrefix: "picklineinventory",
      syncCommitFunctionName: `addpicklineinventory`,
    }, */
    unit: {
      controller: `${window.$ApiURL}/unit.php`,
      method: "getdata",
      siteLevel: false,
      companyLevel: false, // use if only company level
      tablePrefix: "unit",
      syncCommitFunctionName: `unit/addunit`,
    },
    company: {
      controller: `${window.$ApiURL}/company.php`,
      method: "getdata",
      siteLevel: false,
      companyLevel: false, // use if only company level
      tablePrefix: "company",
      syncCommitFunctionName: `company/addcompany`,
    },
    site: {
      controller: `${window.$ApiURL}/site.php`,
      method: "getdata",
      siteLevel: false,
      companyLevel: false, // use if only company level
      tablePrefix: "site",
      syncCommitFunctionName: `site/addsite`,
    },
  },
}

let pollTimeSeconds = 900
let pageSize = 250

const getters = {
  getLoading: (state) => state.loading,
  getLoadingPercent: (state) => state.loadingPercent,
  getLoadingText: (state) => state.loadingText,
  getSyncInProgress: (state) => state.syncInProgress,
  getSyncOutBoundInProcess: (state) => state.syncOutBoundInProcess,
  getSyncInBoundInProcess: (state) => state.syncInBoundInProcess,
  getOutBoundCachedTransactions: (state) => state.outBoundCachedTransactions,
  getOnline: (state) => state.online,
  getStoreList: (state) => state.storeList,
  getOfflineTimeRemainingFormatted: (state) => {
    let time = state.offlineTimeRemaining
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60)

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`
  },
  getOfflineTimeRemaining: (state) => state.offlineTimeRemaining,
}

const actions = {
  async setLoading({ commit }, loading) {
    commit("setLoading", loading)
  },
  async callOutboundAPI(
    context,
    { online, APICall, successAction, errorAction }
  ) {
    APICall.type = null ?? "POST"
    APICall.dataType = null ?? "json"
    APICall.async = null ?? false

    let returnValue = {}

    if (!online) {
      APICall.successAction = successAction
      APICall.errorAction = errorAction
      context.commit("creationOutboundCachedTransaction", APICall)
      return { success: true }
    }

    if (online) {
      APICall.success = (data) => {
        context.dispatch(successAction, {
          data,
          passThroughData: APICall.passThroughData,
        })
        returnValue = { success: true, data }
      }

      APICall.error = (data) => {
        context.dispatch(errorAction, {
          data,
          passThroughData: APICall.passThroughData,
        })
        returnValue = { success: false, data }
      }

      //todo implement axios
      //$.ajax(APICall)
      return returnValue
    }
  },
  async logAction(context, payload) {
    context
    console.log(payload)
  },
  async getSyncTimes(context) {
    context
    let storeList = this.getters.getStoreList
    let returnTimes = []
    // temp fix
    Object.entries(storeList ?? {}).forEach((entry) => {
      let [storeItem, storeObject] = entry
      storeObject
      returnTimes[storeItem] = localStorage.getItem(
        `${storeItem}LastSyncTimeStamp`
      )
    })
    return returnTimes
  },
  async checkforNonSyncData(context) {
    // foreach Objectstore check last sync time stamp
    let storeList = this.getters.getStoreList

    let showLoading = false
    // temp fix
    Object.entries(storeList ?? {}).forEach((entry) => {
      let [storeItem, storeObject] = entry
      storeObject
      let syncTime = localStorage.getItem(`${storeItem}LastSyncTimeStamp`)
      if (syncTime == null || syncTime == undefined || syncTime == "null") {
        showLoading = true
      }
    })

    if (showLoading) {
      context.commit("setLoadingInfo", {
        loading: true,
        percent: 0,
        text: "Data Sync In Progress",
      })
    }

    if (!showLoading) {
      context.commit("setLoadingInfo", {
        loading: false,
        percent: 0,
        text: "Data Sync In Progress",
      })
    }
  },
  async handleStatusUpdate(context, { loading, percent, text }) {
    context.commit("setLoadingInfo", {
      loading: loading,
      percent: percent,
      text: text,
    })
  },
  async resetSyncData(context) {
    context.commit("setLoadingInfo", {
      loading: true,
      percent: 0,
      text: "Data Sync In Progress",
    })

    let storeList = this.getters.getStoreList
    Object.entries(storeList ?? {}).forEach((entry) => {
      let [storeItem, storeObject] = entry
      storeObject
      if (storeItem !== "usermenu") {
        context.dispatch(`${storeItem}/clearSync${storeItem}`)
      } else {
        context.dispatch(`user/clearSync${storeItem}`)
      }
    })
    context.dispatch("syncData")
  },
  async syncData(context) {
    if (context.getters.getSyncInProgress === true) {
      // if already running don't kick off another one
      return
    }

    await context.commit("setSyncRunning", true)
    await context.dispatch("checkforNonSyncData")
    let loading = context.getters.getLoading

    let syncInput = {
      userSessionSiteid: this.getters["userSession/getUserSessionSiteid"],
      userSessionCompanyid: this.getters["userSession/getUserSessionCompanyid"],
      userSessionToken: this.getters["userSession/getUserSessionToken"],
      syncStoreListJSON: JSON.stringify(context.getters.getStoreList),
      context: JSON.stringify(context),
      loading: loading,
      ApiURL: window.$ApiURL,
      arrSyncTimes: await context.dispatch("getSyncTimes"),
      pollTime: pollTimeSeconds,
      page: pageSize,
    }
    processSync(
      syncInput,
      Comlink.proxy((status) => {
        /** wrapper call back to allow context to be available  **/
        this.dispatch("application/handleStatusUpdate", status)
      }),
      Comlink.proxy(async (result) => {
        /** wrapper call back to allow context to be available **/
        this.commit(result.store, result.data)
      })
    )
      .then((result) => {
        result

        if (loading)
          context.commit("setLoadingInfo", {
            loading: false,
            percent: 100,
            text: "Done",
          })
        context.dispatch("checkforNonSyncData")
        // complete
        //console.log(result, "web worker - complete");
      })
      .catch((error) => {
        // oh no
        console.log(error)
      })

    setTimeout(() => {
      context.commit("setSyncRunning", false)
      if (loading)
        context.commit("setLoadingInfo", {
          loading: false,
          percent: 100,
          text: "Done",
        })
      context.dispatch("checkforNonSyncData")
    }, 1000)
  },
  async sendOutboundCachedTransactions(context) {
    context

    processOutBoundTransaction(
      Comlink.proxy((status) => {
        /** wrapper call back to allow context to be available  **/
        context.commit("setSyncOutBoundInProcess", status)
        console.log("handleStatusUpdate")
        status
      }),
      Comlink.proxy(async (result) => {
        /** wrapper call back to allow context to be available **/
        if (!(Object.keys(result.data.errors).length > 0)) {
          // no errors
          context.dispatch(result.store, {
            data: result.data,
            passThroughData: result.data.passThroughData,
          })
        }
        // todo longer term log errors here
      })
    )
      .then((result) => {
        result
        // complete
        //console.log(result, "web worker - complete");
      })
      .catch((error) => {
        // oh no
        console.log(error)
      })
  },
  setOnline(context, bool) {
    if (bool) {
      context.dispatch("sendOutboundCachedTransactions")
    }
    context.commit("setOnline", bool)
  },
  async processEvent(context, event) {
    console.log(event)

    context.commit("setSyncInBoundInProcess", true)

    if (event.eventtype == 1) {
      // inventory
      if (event.eventoperationtype === "Update")
        context.commit("updateInventoryRecord", event.eventdata)
      if (event.eventoperationtype === "Add")
        context.commit("addInventoryRecord", event.eventdata)
      if (event.eventoperationtype === "Delete")
        context.commit("deleteInventoryRecord", event.eventdata)
    }

    if (event.eventtype == 3) {
      // forklift
      if (event.eventoperationtype === "Update")
        context.commit("updateForkliftRecord", event.eventdata)
      if (event.eventoperationtype === "Add")
        context.commit("addForkliftRecord", event.eventdata)
      if (event.eventoperationtype === "Delete")
        context.commit("deleteForkliftRecord", event.eventdata)
    }

    if (event.eventtype == 4) {
      // item
      if (event.eventoperationtype === "Update")
        context.commit("updateItemRecord", event.eventdata)
      if (event.eventoperationtype === "Add")
        context.commit("addItemRecord", event.eventdata)
      if (event.eventoperationtype === "Delete")
        context.commit("deleteItemRecord", event.eventdata)
    }

    if (event.eventtype == 5) {
      // location
      if (event.eventoperationtype === "Update")
        context.commit("updateLocationRecord", event.eventdata)
      if (event.eventoperationtype === "Add")
        context.commit("addLocationRecord", event.eventdata)
      if (event.eventoperationtype === "Delete")
        context.commit("deleteLocationRecord", event.eventdata)
    }

    if (event.eventtype == 6) {
      // forkliftinventory
      if (event.eventoperationtype === "Update")
        context.commit("updateForkliftInventoryRecord", event.eventdata)
      if (event.eventoperationtype === "Add")
        context.commit("addForkliftInventoryRecord", event.eventdata)
      if (event.eventoperationtype === "Delete")
        context.commit("deleteForkliftInventoryRecord", event.eventdata)
    }

    setTimeout(() => {
      context.commit("setSyncInBoundInProcess", false)
    }, 1000)
  },
  async tickOfflineTimer(context) {
    let time = context.getters.getOfflineTimeRemaining

    if (time > 0) {
      // stop at 0
      context.commit("tickOfflineTimer")
    }
  },
  async FetchAPICall() { //context, { type = "POST", endpoint, data }
    let returnValue = null
    /*
    $.ajax({
      url: `${window.$ApiURL}/${endpoint}.php`,
      type: type,
      dataType: "json",
      async: false,
      data: {
        callmethod: data?.callmethod ?? "getdata",
        rp: data?.rp ?? 2,
        token: context.getters["userSession/getUserSessionToken"],
        query: data?.query ?? "",
        queryparams: data?.queryparams ?? "",
        page: data?.page ?? 1,
        sortname: data?.sortname ?? null, // field to sort on
        sortorder: data?.sortorder ?? "ASC", // ASC / DESC
        datainrows: data?.datainrows ?? true, // data in row rows not cell field
        gridid: data?.gridid ?? "",
        instance: data?.instance ?? "",
      },
      success: function (data) {
        returnValue = data
      },
      error: function (data) {
        console.log("error:", data)
      },
    }) */

    return returnValue
  },
}

const mutations = {
  async setSyncRunning(state, bool) {
    state.syncInProgress = bool
    return state.syncInProgress
  },
  async setSyncOutBoundInProcess(state, bool) {
    state.syncOutBoundInProcess = bool
    return state.syncOutBoundInProcess
  },
  async setSyncInBoundInProcess(state, bool) {
    state.syncInBoundInProcess = bool
    return state.syncInBoundInProcess
  },
  async setOutBoundCachedTransactions(state, bool) {
    state.outBoundCachedTransactions = bool
    return state.outBoundCachedTransactions
  },
  async setOnline(state, bool) {
    state.online = bool
    return state.online
  },
  async setLoading(state, loading) {
    state.loading = loading
  },
  async setLoadingInfo(state, { loading, percent, text }) {
    loading
    //state.loading = loading
    state.loadingPercent = percent
    state.loadingText = text
    return state
  },
  async creationOutboundCachedTransaction(state, APICall) {
    let db = new Localbase("db")
    db.config.debug = false
    db.collection("APICallCache").add(APICall)
    let cache = await db.collection("APICallCache").get()
    state.outBoundCachedTransactions = cache.length
  },
  async resetOfflineTimer(state) {
    state.offlineTimeRemaining = 300 // 5 mins
  },
  async tickOfflineTimer(state) {
    state.offlineTimeRemaining--
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
