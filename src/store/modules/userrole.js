import axios from "axios"
import CRUD from "../crud"

let crud = new CRUD({
  endpoint: `${window.$ApiURL}/userrole.php`,
  storename: "userrole",
  primaryKey: "userroleid",
})

const state = {
  ...crud.state,
  copyUserRoleName: "",
  copyErrors: {},
}

const actions = {
  ...crud.actions,
  //copyrecord
  async copyUserRole(context, { userroleid, userrolename }) {
    let APICall = {
      callmethod: "copyrecord",
      token: this.getters["userSession/getUserSessionToken"],
      id: userroleid,
      newname: userrolename,
    }

    const res = await axios.post(context.state.endpoint, { ...APICall })

    return res.data
  },
}

const mutations = {
  ...crud.mutations,
  setCopyUserRoleName(state, copyUserRoleName) {
    state.copyUserRoleName = copyUserRoleName
  },
  setCopyErrors(state, errors) {
    state.copyErrors = errors
  },
}

const getters = {
  ...crud.getters,
  getCopyUserRoleName: (state) => state.copyUserRoleName,
  getCopyErrors: (state) => state.copyErrors,
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
