import Vuex from "vuex"

import addresslookup from "./modules/addresslookup"
import apiuserkey from "./modules/apiuserkey"
import application from "./modules/application"
import audit from "./modules/audit"
import company from "./modules/company"
import customer from "./modules/customer"
import customeraddress from "./modules/customeraddress"
import customeraddressequipment from "./modules/customeraddressequipment"
import customeraddressproduct from "./modules/customeraddressproduct"
import customercontact from "./modules/customercontact"
import dashboardgraphsummary from "./modules/dashboardgraphsummary"
import dashboardtotalsummary from "./modules/dashboardtotalsummary"
import feature from "./modules/feature"
import forklift from "./modules/forklift"
import forkliftinventory from "./modules/forkliftinventory"
import forkliftpickassignment from "./modules/forkliftpickassigment"
import icon from "./modules/icon"
import inventory from "./modules/inventory"
import item from "./modules/item"
import itemsubtype from "./modules/itemsubtype"
import itemtype from "./modules/itemtype"
import jsgriduserfields from "./modules/jsgriduserfields"
import layout from "./modules/layout"
import location from "./modules/location"
import menu from "./modules/menu"
import pick from "./modules/pick"
import pickline from "./modules/pickline"
import picklineinventory from "./modules/picklineinventory"
import salesorder from "./modules/salesorder"
import salesorderline from "./modules/salesorderline"
import shippingdemand from "./modules/shippingdemand"
import shippingdemandline from "./modules/shippingdemandline"
import site from "./modules/site"
import systemsetting from "./modules/systemsetting"
import transportmethod from "./modules/transportmethod"
import transportcarrier from "./modules/transportcarrier"
import transportcontainer from "./modules/transportcontainer"
import transportdrop from "./modules/transportdrop"
import transportdropcontainerinventory from "./modules/transportdropcontainerinventory"
import transportdropline from "./modules/transportdropline"
import transportplanning from "./modules/transportplanning"
import unit from "./modules/unit"
import user from "./modules/user"
import userrole from "./modules/userrole"
import userrolefeature from "./modules/userrolefeature"
import userSession from "./modules/userSession"

const store = new Vuex.Store({
  modules: {
    addresslookup,
    apiuserkey,
    application,
    audit,
    company,
    customer,
    customeraddress,
    customeraddressequipment,
    customeraddressproduct,
    customercontact,
    dashboardgraphsummary,
    dashboardtotalsummary,
    feature,
    forklift,
    forkliftinventory,
    forkliftpickassignment,
    icon,
    inventory,
    item,
    itemsubtype,
    itemtype,
    jsgriduserfields,
    layout,
    location,
    menu,
    pick,
    pickline,
    picklineinventory,
    salesorder,
    salesorderline,
    shippingdemand,
    shippingdemandline,
    site,
    systemsetting,
    transportmethod,
    transportcarrier,
    transportcontainer,
    transportdrop,
    transportdropcontainerinventory,
    transportdropline,
    transportplanning,
    unit,
    user,
    userrole,
    userrolefeature,
    userSession,
  },
})

export default store
