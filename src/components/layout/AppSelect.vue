<template>
  <div class="dropdown d-none d-lg-inline-block">
    <button
      type="button"
      class="btn header-item noti-icon"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <eva-icon class="icon-sm" name="grid-outline"></eva-icon>
    </button>
    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
      <div class="p-3">
        <div class="row align-items-center">
          <div class="col">
            <h5 class="m-0 font-size-15">Site Select</h5>
          </div>
          <div class="col-auto"></div>
        </div>
      </div>
      <div class="px-lg-2 pb-2">
        <div class="row g-0">
          <div class="col">
            <div
              v-for="usercompsite in userSites"
              :key="usercompsite.usercompsiteid"
              :id="usercompsite.usercompsiteid"
            >
              <div
                class="card action-card"
                :class="{ 'alert alert-success': checkCurrent(usercompsite) }"
              >
                <div class="card-body">
                  <h3>{{ usercompsite.sitename }}</h3>
                  <hr />
                  <div class="text-start">
                    <span v-if="checkCurrent(usercompsite)">Current Site</span>
                  </div>
                  <div class="text-center">
                    <button
                      type="button"
                      class="btn btn-soft-primary btn-sm w-50 mx-auto"
                      v-if="!checkCurrent(usercompsite)"
                      @click="changeSite(usercompsite)"
                    >
                      <i class="fa fa-building me-1"></i> Select Site
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  components: {},
  computed: {
    userSites: {
      get() {
        let user = this.$store.getters["user/getUser"]
        return user.sites
      },
    },
    currentSite: {
      get() {
        return this.$store.getters["userSession/getUserSessionSiteid"]
      },
    },
  },
  methods: {
    checkCurrent(usercompsite) {
      return parseInt(usercompsite.siteid) === parseInt(this.currentSite)
    },
    changeSite(usercompsite) {
      this.$store.dispatch("userSession/changeSiteForUser", usercompsite.siteid)
    },
  },
}
</script>

<style scoped></style>
