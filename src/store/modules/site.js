import $ from "jquery"
import Localbase from "localbase"
import syncfunctions from "../../common/syncfunctions"

import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/site.php`,
  storename: "site",
  primaryKey: "siteid",
})

const ControllerURL = `${window.$ApiURL}/site.php`

const state = {
  ...crud.state,
  siteLastSyncTimeStamp: localStorage.siteLastSyncTimeStamp
    ? localStorage.siteLastSyncTimeStamp
    : null,
  siteSyncInProgress: false,
}

const getters = {
  ...crud.getters,
  getsiteLastSyncTimeStamp: (state) => state.siteLastSyncTimeStamp,
  getsiteSyncInProgress: (state) => state.siteSyncInProgress,
}

const actions = {
  ...crud.actions,
  async syncsite(context) {
    syncfunctions.processSync(
      context,
      ControllerURL,
      context.getters.getsiteLastSyncTimeStamp,
      "addsite",
      10,
      false,
      false
    )
  },
  async clearSyncsite(context) {
    context.commit("clearSyncsite")
  },
  async selectsite(context, data) {
    context.commit("selecsite", data)
  },
  async findsiteByid(context, id) {
    context
    let db = new Localbase("db")
    db.config.debug = false
    let site = await db.collection("site").limit(1).doc({ id: id }).get()
    return site
  },
  async getAllsite(context) {
    context
    let db = new Localbase("db")
    db.config.debug = false
    let site = await db.collection("site").get()

    return site
  },
}

const mutations = {
  ...crud.mutations,
  async selectsite(state, data) {
    //todo update server
    state.currentsite = data
    return state.currentsite
  },
  async addsite(state, data) {
    let db = new Localbase("db")
    db.config.debug = false
    $.each(data.rows, function (index, row) {
      index
      db.collection("site").add(row.cell, String(row.siteid))
    })

    state.siteSyncInProgress = false
    state.siteLastSyncTimeStamp = data.LastSyncTimeStamp
    localStorage.siteLastSyncTimeStamp = state.siteLastSyncTimeStamp
    return state
  },
  clearSyncsite(state) {
    let db = new Localbase("db")
    db.config.debug = false
    db.collection("site").delete()
    state.siteLastSyncTimeStamp = null
    localStorage.siteLastSyncTimeStamp = state.siteLastSyncTimeStamp
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
