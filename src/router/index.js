import { createRouter, createWebHistory } from "vue-router"

import pageNotFound from "../views/pagenotfound.vue"
import home from "../views/Home.vue"
import user from "../views/pages/users/user.vue"
import users from "../views/pages/users/users.vue"
import units from "../views/pages/setup/units.vue"
import userroles from "../views/pages/users/userroles.vue"
import userrole from "../views/pages/users/userrole.vue"
import menus from "../views/pages/users/menus.vue"
import icons from "../views/pages/setup/icons.vue"
import demand from "../views/pages/demand/demand.vue"
import companys from "../views/pages/setup/companys.vue"
import company from "../views/pages/setup/company.vue"
import transportcontainers from "../views/pages/setup/transportcontainers.vue"
import transportcontainer from "../views/pages/setup/transportcontainer.vue"
import shippingdemands from "../views/pages/shippingdemand/shippingdemands.vue"
import shippingdemand from "../views/pages/shippingdemand/shippingdemand.vue"
import shippingdemandgroups from "../views/pages/shippingdemand/shippingdemandgroups.vue"

import transportplanning from "../views/pages/transportplanning/transportplanning.vue"
import transportdrop from "../views/pages/transportdrop/transportdrop.vue"
import transportdrops from "../views/pages/transportdrop/transportdrops.vue"
import bayplanning from "../views/pages/bay/bayplanning.vue"
import receiveinventory from "../views/pages/inventory/receiveinventory.vue"
import inventory from "../views/pages/inventory/inventory.vue"
import inventorys from "../views/pages/inventory/inventorys.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/bayplanning",
    name: "bayplanning",
    component: bayplanning,
  },
  {
    path: "/companys",
    name: "companys",
    component: companys,
  },
  {
    path: "/company/:companyid(\\d+)",
    name: "company",
    component: company,
    props: true,
  },
  {
    path: "/user/:userid(\\d+)",
    name: "user",
    component: user,
    props: true,
  },
  {
    path: "/users",
    name: "users",
    component: users,
  },
  {
    path: "/userroles",
    name: "userroles",
    component: userroles,
  },
  {
    path: "/userrole/:userroleid(\\d+)",
    name: "userrole",
    component: userrole,
  },
  {
    path: "/menus",
    name: "menus",
    component: menus,
  },
  {
    path: "/icons",
    name: "icons",
    component: icons,
  },
  {
    path: "/demand",
    name: "demand",
    component: demand,
  },
  {
    path: "/units",
    name: "units",
    component: units,
  },
  {
    path: "/transportplanning",
    name: "transportplanning",
    component: transportplanning,
  },
  {
    path: "/transportdrop/:transportdropid(\\d+)",
    name: "transportdrop",
    component: transportdrop,
    props: true,
  },
  {
    path: "/transportdrops",
    name: "transportdrops",
    component: transportdrops,
  },
  {
    path: "/transportcontainers",
    name: "transport containers",
    component: transportcontainers,
  },
  {
    path: "/transportcontainer/:transportcontainerid(\\d+)",
    name: "transport container",
    component: transportcontainer,
    props: true,
  },
  {
    path: "/shippingdemands",
    name: "shipping demands",
    component: shippingdemands,
  },
  {
    path: "/shippingdemand/:shippingdemandid(\\d+)",
    name: "shipping demand",
    component: shippingdemand,
    props: true,
  },
  {
    path: "/shippingdemandgroups",
    name: "shipping demand groups",
    component: shippingdemandgroups,
  },
  {
    path: "/receiveinventory",
    name: "receive inventory",
    component: receiveinventory,
    props: true,
  },
  {
    path: "/inventory",
    name: "inventory",
    component: inventory,
    props: true,
  },
  {
    path: "/inventorys",
    name: "inventorys",
    component: inventorys,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    component: pageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(window.$baseURL),
  routes,
})

export default router
