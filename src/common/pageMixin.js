import Layout from "../views/layouts/main.vue"
import appConfig from "@/app.config"

export default {
  mounted() {
    this.$store.dispatch("application/setLoading", false)
  },
  components: {
    Layout,
  },
  page: {
    title: "",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  data() {
    return {
      store: "user",
    }
  },
  computed: {
    pageView: {
      get() {
        return this.$store.getters[this.store + "/getPageView"]
      },
      set(selectedView) {
        return this.$store.commit(this.store + "/setPageView", selectedView)
      },
    },
  },
  methods: {
    changeView(selectedView) {
      this.pageView = selectedView
    },
  },
}
