import $ from "jquery"
import Localbase from "localbase"
import syncfunctions from "../../common/syncfunctions"
import CRUD from "../crud"

const ControllerURL = `${window.$ApiURL}/icon.php`

let crud = new CRUD({
  endpoint: ControllerURL,
  storename: "icon",
  primaryKey: "iconid",
})

const state = {
  iconLastSyncTimeStamp: localStorage.iconLastSyncTimeStamp
    ? localStorage.iconLastSyncTimeStamp
    : null,
  iconSyncInProgress: false,
  ...crud.state,
}

const getters = {
  geticonLastSyncTimeStamp: (state) => state.iconLastSyncTimeStamp,
  geticonSyncInProgress: (state) => state.iconSyncInProgress,
  ...crud.getters,
}

const actions = {
  ...crud.actions,
  async syncicon(context) {
    syncfunctions.processSync(
      context,
      ControllerURL,
      context.getters.geticonLastSyncTimeStamp,
      "addicon",
      10,
      false,
      false
    )
  },
  async clearSyncicon(context) {
    context.commit("clearSyncicon")
  },
  async selecticon(context, data) {
    context.commit("selecicon", data)
  },
  async findiconByid(context, id) {
    context
    let db = new Localbase("db")
    db.config.debug = false
    let icon = await db
      .collection("icon")
      .limit(1)
      .doc({ iconid: String(id) })
      .get()
    return icon
  },
  async getAllicon(context) {
    context
    let db = new Localbase("db")
    db.config.debug = false
    let icon = await db.collection("icon").get()

    return icon
  },
}

const mutations = {
  ...crud.mutations,
  async selecticon(state, data) {
    //todo update server
    state.currenticon = data
    return state.currenticon
  },
  async addicon(state, data) {
    let db = new Localbase("db")
    db.config.debug = false

    $.each(data.rows, function (index, row) {
      index
      db.collection("icon").add(row.cell, String(row.iconid))
    })

    state.iconSyncInProgress = false
    state.iconLastSyncTimeStamp = data.LastSyncTimeStamp
    localStorage.iconLastSyncTimeStamp = state.iconLastSyncTimeStamp
    return state
  },
  clearSyncicon(state) {
    let db = new Localbase("db")
    db.config.debug = false
    db.collection("icon").delete()
    state.iconLastSyncTimeStamp = null
    localStorage.iconLastSyncTimeStamp = state.iconLastSyncTimeStamp
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
