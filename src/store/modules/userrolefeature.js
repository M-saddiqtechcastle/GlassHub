import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/userrolefeature.php`,
  storename: "userrolefeature",
  primaryKey: "userrolefeatureid",
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
