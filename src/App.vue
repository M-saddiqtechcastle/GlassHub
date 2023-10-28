<template>
  <div id="app">
    <Toast />
    <Dialog
      :visible="loading"
      :closeOnEscape="false"
      :closable="false"
      showHeader="false"
      modal="true"
    >
      <img src="./assets/images/loading.gif" />
    </Dialog>
    <DynamicDialog />
    <ConfirmDialog />
    <router-view> </router-view>
  </div>
</template>

<script>
import appConfig from "@/app.config"
import { mapGetters } from "vuex"

export default {
  name: "App",
  components: {},
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
  },
  data() {
    return {
      User: {},
    }
  },
  computed: {
    ...mapGetters({
      userSessionSiteid: "user/getUserSessionSiteid",
      loading: "application/getLoading",
      online: "application/getOnline",
      OfflineTimeRemaining: "application/getOfflineTimeRemaining",
    }),
  },
  created: async function () {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get("token")) {
      await this.$store.commit(
        "userSession/setUserSessionToken",
        urlParams.get("token")
      )
    }

    await this.$store
      .dispatch("user/getCurrentUserFromServer")
      .then(async () => {
        this.User = this.$store.getters["user/getUser"]
        let sessionSiteid =
          this.$store.getters["userSession/getUserSessionSiteid"]
        if (!sessionSiteid) {
          await this.$store.dispatch("userSession/checksiteforuser")
        } else {
          await this.$store.dispatch("application/checkforNonSyncData")
          await this.$store.dispatch("application/syncData")
        }
      })
  },
}
</script>
