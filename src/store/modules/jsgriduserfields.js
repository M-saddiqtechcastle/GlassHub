import axios from "axios"
//import { convertFormData } from "../helpers"
import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/jsgriduserfields.php`,
  storename: "jsgriduserfields",
})

const state = {
  ...crud.state,
}

const getters = {
  ...crud.getters,
}

const actions = {
  ...crud.actions,
  async setColumns(context, payload) {
    //custom endpoint
    let APICall = {
      callmethod: "setfieldlistjsgrid",
      token: this.getters["userSession/getUserSessionToken"],
    }
    console.log({ ...APICall, ...payload })

    const res = await axios.post(
      context.state.endpoint,
      // convertFormData({...APICall, ...payload})
      { ...APICall, ...payload }
    )
    console.log(res)

    return res
  },
}

const mutations = {
  ...crud.mutations,
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
