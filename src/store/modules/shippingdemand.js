import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/shippingdemand.php`,
  storename: "shippingdemand",
  primaryKey: "shippingdemandid",
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
