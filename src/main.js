import { createApp } from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"

import * as EvaIcons from "@stefandesu/eva-icons-vue"
import ActionCableVue from "actioncable-vue"
import BootstrapVue3 from "bootstrap-vue-3"
import VueApexCharts from "vue3-apexcharts"
import vClickOutside from "click-outside-vue3"
import PrimeVue from "primevue/config"
import DialogService from "primevue/dialogservice"

import VueAnimXyz from "@animxyz/vue3"
import "@animxyz/core" // Import css here if you haven't elsewhere

import "@vueform/slider/themes/default.css"
import "./assets/scss/custom/plugins/mermaid.min.css"
import "./assets/scss/app.scss"

//import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/themes/saga-green/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import ConfirmationService from "primevue/confirmationservice"
import ToastService from "primevue/toastservice"
import Dialog from "primevue/dialog"
import DynamicDialog from "primevue/dynamicdialog"
import ConfirmDialog from "primevue/confirmdialog"
import Toast from "primevue/toast"

import TextInput from "./components/form/input/TextInput"
import DateInput from "./components/form/input/DateInput"

import { $, jQuery } from "jquery"

// allow other scripts to use JQuery
window.$ = $
window.jQuery = jQuery

import ganttastic from "@infectoone/vue-ganttastic"

const websocketOptions = {
  debug: true,
  debugLevel: "error",
  connectionUrl: "http://localhost:8081/",
  connectImmediately: false,
}

const app = createApp(App)
  .use(store)
  .use(PrimeVue)
  .use(DialogService)
  .use(EvaIcons)
  .use(router)
  .use(BootstrapVue3)
  .use(VueApexCharts)
  .use(vClickOutside)
  .use(ConfirmationService)
  .use(ToastService)
  .use(ActionCableVue, websocketOptions)
  .use(PrimeVue, { ripple: true })
  .use(ganttastic)
  .use(VueAnimXyz)

// register global components
app.component("TextInput", TextInput)
app.component("DateInput", DateInput)
app.component("Dialog", Dialog)
app.component("DynamicDialog", DynamicDialog)
app.component("ConfirmDialog", ConfirmDialog)
app.component("Toast", Toast)

// register tool tips from prime vue
import Tooltip from "primevue/tooltip"
app.directive("tooltip", Tooltip)

app.mount("#app")
