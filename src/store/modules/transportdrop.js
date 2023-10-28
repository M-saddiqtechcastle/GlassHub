import CRUD from "../crud"
import axios from "axios"

let crud = new CRUD({
  endpoint: `${window.$ApiURL}/transportdrop.php`,
  storename: "transportdrop",
  primaryKey: "transportdropid",
})

const state = {
  ...crud.state,
  transportDropHeaderDialogVisible: false,
}

const actions = {
  ...crud.actions,
  async confirmTransportDrop(context, { transportdrop }) {
    context
    transportdrop
    //this.dispatch("application/setLoading", true)

    let APICall = {
      callmethod: "confirmDrop",
      transportdrop: transportdrop,
      token: this.getters["userSession/getUserSessionToken"],
    }

    let res = await axios.post(context.state.endpoint, APICall)

    if (typeof res.data === "string") console.log("fetch error" + res.data)

    //context.commit("setDemandGroups", res.data)
    //this.dispatch("application/setLoading", false)
    return res.data
  },
}

const mutations = {
  ...crud.mutations,
  setTransportDropHeaderDialogVisible(state, visible) {
    state.transportDropHeaderDialogVisible = visible
  },
}

const getters = {
  ...crud.getters,
  getTransportDropHeaderDialogVisible: (state) =>
    state.transportDropHeaderDialogVisible,
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true,
}
