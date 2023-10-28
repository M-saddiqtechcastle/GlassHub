import $ from "jquery"
import Localbase from "localbase"
//import syncfunctions from "../../common/syncfunctions"
import CRUD from "../crud"
import cachedRecordCrud from "../cachedRecordCrud"

let storeDetails = {
  endpoint: `${window.$ApiURL}/unit.php`,
  storename: "unit",
  primaryKey: "unitid",
}

let crud = new CRUD(storeDetails)
let cachedRecordcrud = new cachedRecordCrud(storeDetails)

//const ControllerURL = `${window.$ApiURL}/unit.php`

const state = {
  ...crud.state,
  ...cachedRecordcrud.state,
  unitLastSyncTimeStamp: localStorage.unitLastSyncTimeStamp
    ? localStorage.unitLastSyncTimeStamp
    : null,
  unitSyncInProgress: false,
}

const getters = {
  ...crud.getters,
  ...cachedRecordcrud.getters,
  getunitLastSyncTimeStamp: (state) => state.unitLastSyncTimeStamp,
  getunitSyncInProgress: (state) => state.unitSyncInProgress,
}

const actions = {
  ...crud.actions,
  ...cachedRecordcrud.actions,
  // async findunitByid(context, id) {
  //   context
  //   let db = new Localbase("db")
  //   db.config.debug = false
  //   let unit = await db.collection("unit").limit(1).doc({ unitid: id }).get()
  //   return unit
  // },
  // async getAllunit(context) {
  //   context
  //   let db = new Localbase("db")
  //   db.config.debug = false
  //   let unit = await db.collection("unit").get()

  //   return unit
  // },
  async getBaseunitForType(context, type) {
    context
    type = String(type)
    let db = new Localbase("db")
    db.config.debug = false
    let unit = await db
      .collection("unit")
      .limit(1)
      .doc({ type: type, baseunit: "1" })
      .get()
    return unit
  },

  async convertModelToDisplayValue(context, { value, unitType }) {
    let currentcompanyid = this.getters["userSession/getUserSessionCompanyid"]
    let companyDetails = await this.dispatch(
      "company/findCachedByid",
      currentcompanyid
    )

    if (!companyDetails) {
      console.log("Company Not Found")
      return 0
    }

    let unit = await this.dispatch("unit/findCachedByfilter", {
      unitid: companyDetails[`${unitType}id`],
    })

    let displayValue = parseFloat(value) * parseFloat(unit.baseconversion)

    if (isNaN(displayValue)) {
      displayValue = 0
    }

    return displayValue
  },

  async convertDisplayToModelValue(context, { value, unitType }) {
    let currentcompanyid = this.getters["userSession/getUserSessionCompanyid"]
    let companyDetails = await this.dispatch(
      "company/findCachedByid",
      currentcompanyid
    )

    if (!companyDetails) {
      console.log("Company Not Found")
      return 0
    }

    let unit = await this.dispatch("unit/findCachedByfilter", {
      unitid: companyDetails[`${unitType}id`],
    })
    return parseFloat(value) / parseFloat(unit.baseconversion)
  },
  async getUnitSymbol(context, { unitType }) {
    let currentcompanyid = this.getters["userSession/getUserSessionCompanyid"]
    let companyDetails = await this.dispatch(
      "company/findCachedByid",
      currentcompanyid
    )
    if (!companyDetails) {
      console.log("Company Not Found")
      return 0
    }
    let unit = await this.dispatch("unit/findCachedByfilter", {
      unitid: companyDetails[`${unitType}id`],
    })
    return unit.unit
  },
}

const mutations = {
  ...crud.mutations,
  ...cachedRecordcrud.mutations,
  async selectunit(state, data) {
    //todo update server
    state.currentunit = data
    return state.currentunit
  },
  async addunit(state, data) {
    let db = new Localbase("db")
    db.config.debug = false
    $.each(data.rows, function (index, row) {
      index
      db.collection("unit").add(row.cell, String(row.unitid))
    })

    state.unitSyncInProgress = false
    state.unitLastSyncTimeStamp = data.LastSyncTimeStamp
    localStorage.unitLastSyncTimeStamp = state.unitLastSyncTimeStamp
    return state
  },
  clearSyncunit(state) {
    let db = new Localbase("db")
    db.config.debug = false
    db.collection("unit").delete()
    state.unitLastSyncTimeStamp = null
    localStorage.unitLastSyncTimeStamp = state.unitLastSyncTimeStamp
    return state
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
