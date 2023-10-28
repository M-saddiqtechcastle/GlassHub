import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/shippingdemandline.php`,
  storename: "shippingdemandline",
  primaryKey: "shippingdemandlineid",
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
