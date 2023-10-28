import CRUD from "../crud"
import cachedRecordCrud from "../cachedRecordCrud"
 import $ from "jquery" // todo removejquery and use normal loop
 import Localbase from "localbase"

let storeDetails = {
  endpoint: `${window.$ApiURL}/company.php`,
  storename: "company",
  primaryKey: "companyid",
}

let crud = new CRUD(storeDetails)
let cachedRecordcrud = new cachedRecordCrud(storeDetails)

const state = {
  ...crud.state,
  ...cachedRecordcrud.state,
}

const getters = {
  ...crud.getters,
  ...cachedRecordcrud.getters,
}

const actions = {
  ...crud.actions,
  ...cachedRecordcrud.actions,
}

const mutations = {
  ...crud.mutations,
  ...cachedRecordcrud.mutations,

  async addcompany(state, data) {
    let db = new Localbase("db")
    db.config.debug = false
    $.each(data.rows, function (index, row) {
      index
      db.collection("company").add(row.cell, row.companyid)
    })

    state.companySyncInProgress = false
    state.companyLastSyncTimeStamp = data.LastSyncTimeStamp
    localStorage.companyLastSyncTimeStamp = state.companyLastSyncTimeStamp
    return state
  },
  clearSynccompany(state) {
    let db = new Localbase("db")
    db.config.debug = false
    db.collection("company").delete()
    state.companyLastSyncTimeStamp = null
    localStorage.companyLastSyncTimeStamp = state.companyLastSyncTimeStamp
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
