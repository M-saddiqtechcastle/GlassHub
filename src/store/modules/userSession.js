const state = {
  userSession: {
    token: localStorage.token,
    loginValid: false,
    siteid: localStorage.getItem("UserSessionSiteid")
      ? localStorage.getItem("UserSessionSiteid")
      : null,
    companyid: localStorage.UserSessionCompanyid
      ? localStorage.UserSessionCompanyid
      : null,
    error: null,
  },
}

const getters = {
  getUserSession: (state) => state.userSession,
  getUserSessionToken: (state) => state.userSession.token,
  getUserLoginValid: (state) => state.userSession.loginValid,
  getUserSessionSiteid: (state) => state.userSession.siteid,
  getUserSessionCompanyid: (state) => state.userSession.companyid,
  getUserSessionError: (state) => state.userSession.error,
}

const actions = {
  setUserSessionToken({ commit }, token) {
    commit("setUserSessionToken", token)
  },
  setUserLoginValid({ commit }, valid) {
    commit("setUserLoginValid", valid)
  },
  setUserSessionSiteid({ commit }, siteid) {
    localStorage.userSessionSiteid = siteid
    commit("setUserSessionSiteid", siteid)
  },
  checksiteforuser(context) {
    if (!context.getters["getUserSessionSiteid"]) {
      let user = this.getters["user/getUser"]
      if (user.sites.length === 0) {
        console.log("not Site found for user")
        return {}
      }

      if (parseInt(user.sites.length) === 1) {
        this.dispatch("userSession/changeSiteForUser", user.sites[0].siteid)
        return {}
      }

      if (parseInt(user.sites.length) > 1) {
        this.dispatch("userSession/changeSiteForUser", user.sites[0].siteid) // default first site
        return {}
      }
    }
  },
  async changeSiteForUser({ commit }, siteid) {
    commit("setUserSessionSiteid", siteid)
    await this.dispatch("application/resetSyncData")
    await this.dispatch("application/checkforNonSyncData")
    await this.dispatch("application/syncData")
  },
}

const mutations = {
  setUserSessionCompanyid(state, companyid) {
    state.setUserSessionCompanyid = parseInt(companyid)
    localStorage.UserSessionCompanyid = parseInt(companyid)
    return state["getUserSessionCompanyid"]
  },
  setUserSessionToken(state, token) {
    state.userSession.token = token
    localStorage.token = token
  },
  setUserLoginValid(state, valid) {
    state.userSession.loginValid = valid
  },
  setUserSessionSiteid(state, siteid) {
    state.setUserSessionSiteid = parseInt(siteid)
    localStorage.UserSessionSiteid = parseInt(siteid)
    return state
  },
  setUserSessionError(state, error) {
    state.userSession.error = error
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
