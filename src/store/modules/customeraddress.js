import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/customeraddress.php`,
  storename: "customeraddress",
  primaryKey: "customeraddressid",
})

const state = {
  ...crud.state,
}

const actions = {
  ...crud.actions,
}

const mutations = {
  ...crud.mutations,
}

const getters = {
  ...crud.getters,
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
