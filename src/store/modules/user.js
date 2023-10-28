import $ from "jquery"
import Localbase from "localbase"
import { groupBy } from "../helpers"
import axios from "axios"

import CRUD from "../crud"
let crud = new CRUD({
  endpoint: `${window.$ApiURL}/user.php`,
  storename: "user",
  primaryKey: "userid",
})

const state = {
  ...crud.state,
  userMenuLastSyncTimeStamp: localStorage.usermenuLastSyncTimeStamp
    ? localStorage.usermenuLastSyncTimeStamp
    : null,
  userMenuSyncInProgress: false,
  user: {},
  userMenu: {},
  userDisplayMenu: null,
  userMainMenu: null,
  lastUserMenuLink: null,
  passwordCard: {
    view: "changeStart",
    oldPasswordValid: true,
    error: "",
  },
}
const getters = {
  ...crud.getters,
  getUser: (state) => state.user,
  getUserMenuLastSyncTimeStamp: (state) => state.userMenuLastSyncTimeStamp,
  getUserMenuSyncInProgress: (state) => state.userMenuSyncInProgress,
  getUserDisplayMenu: (state) => state.userDisplayMenu,
  getLastUserMenuLink: (state) => state.lastUserMenuLink,
  getPasswordCard: (state) => state.passwordCard,
  getUserMainMenu: (state) => state.userMainMenu,
}

const actions = {
  ...crud.actions,
  async validatePassword(context, password) {
    let APICall = {
      callmethod: "checkPasswordforUser",
      token: this.getters["userSession/getUserSessionToken"],
      password: password,
    }

    let res = await axios.post(context.state.endpoint, APICall)

    return res.data.passwordvalid
  },
  async updatePassword(context, { oldPassword, newPassword }) {
    let APICall = {
      callmethod: "changePassword",
      token: this.getters["userSession/getUserSessionToken"],
      dataval: {
        password: oldPassword,
        newpassword: newPassword,
        newpasswordrepeat: newPassword,
      },
    }

    let res = await axios.post(context.state.endpoint, APICall)

    return res.data
  },

  async getInitials(context, { username, userlastname }) {
    context
    let initials = ""
    if (username) {
      initials += username.charAt(0).toUpperCase() ?? ""
    }
    if (userlastname) {
      initials += userlastname.charAt(0).toUpperCase() ?? ""
    }
    return initials
  },
  async setUserAvatarDetails(context, user) {
    context
    let initials = user.username.charAt(0).toUpperCase() ?? ""
    initials += user.userlastname.charAt(0).toUpperCase() ?? ""
    user.initials = initials
    user.avatarcolor = user.avatarcolor ?? "green"
    return user
  },
  async getUserMenuList(context) {
    if (context.getters.getUserDisplayMenu === null) {
      let db = new Localbase("db")
      db.config.debug = false
      let userMenu = await db.collection("usermenu").get()
      let displayMenu = groupBy(userMenu, "menudescription")

      // set main menu
      if (!context.getters["user/getUser"]) {
        let user = await this.dispatch("user/getCurrentUserFromServer")
        let mainMenu = Object.entries(displayMenu).find((menu) => {
          return menu[0] === user.mainmenudesc
        })
        context.commit("setUserMainMenu", mainMenu[1])
        delete displayMenu[user.mainmenudesc]
      }

      const lastKey = Object.keys(displayMenu).at(-1)
      context.commit("setLastUserMenuList", displayMenu[lastKey].at(-1))
      context.commit("setUserDisplayMenu", displayMenu)
      return displayMenu
    }

    return context.getters.getUserDisplayMenu
  },
  async getCurrentUserFromServer(context) {
    let APICall = {
      callmethod: "getCurrentUserFromSession",
      token: this.getters["userSession/getUserSessionToken"],
    }

    let res = await axios.post(context.state.endpoint, APICall)

    // no user found
    if (!res.data || !res.data.userid) {
      this.dispatch("userSession/setUserLoginValid", false)
      return {}
    }

    this.dispatch("userSession/setUserLoginValid", true)

    this.commit(
      "user/setUser",
      await this.dispatch("user/setUserAvatarDetails", res.data)
    )

    this.dispatch("userSession/checksiteforuser")
    this.commit("userSession/setUserSessionCompanyid", res.data.companyid)

    return state.user
  },
  async clearSyncusermenu(context) {
    context
    this.commit("user/clearSyncusermenu")
  },
}

const mutations = {
  ...crud.mutations,

  setOldPasswordValid(state, oldPasswordValid) {
    state.passwordCard.oldPasswordValid = oldPasswordValid
  },
  setPasswordCardViewError(state, error) {
    state.passwordCard.error = error
  },
  setPasswordCardView(state, view) {
    state.passwordCard.view = view
  },
  setUserMainMenu(state, mainUserMenu) {
    state.userMainMenu = mainUserMenu
  },
  setUserDisplayMenu(state, userDisplayMenu) {
    state.userDisplayMenu = userDisplayMenu
  },
  setUser(state, user) {
    state.user = user
  },
  setLastUserMenuList(state, link) {
    state.lastUserMenuLink = link
  },
  async addusermenu(state, data) {
    let db = new Localbase("db")
    db.config.debug = false
    state.userMenuSyncInProgress = false
    state.usermenuLastSyncTimeStamp = data.LastSyncTimeStamp
    localStorage.usermenuLastSyncTimeStamp = data.LastSyncTimeStamp

    let features = data
    delete features.LastSyncTimeStamp
    $.each(features, function (index, row) {
      index
      $.each(row, function (featureIndex, featurerow) {
        featureIndex
        db.collection("usermenu").add(featurerow, String(featurerow.featureid))
      })
    })

    return state
  },
  clearSyncusermenu(state) {
    let db = new Localbase("db")
    db.config.debug = false
    db.collection("usermenu").delete()
    state.usermenuLastSyncTimeStamp = null
    localStorage.usermenuLastSyncTimeStamp = null
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
