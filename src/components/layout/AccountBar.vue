<template>
  <div class="dropdown d-inline-block">
    <button
      type="button"
      class="btn header-item user text-start d-flex align-items-center"
      id="page-header-user-dropdown-v"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <div class="avatar-sm">
        <span
          :style="`--element-color: #${user.avatarcolor}`"
          class="avatar-title rounded-circle text-white font-size-16"
        >
          {{ user.initials }}
        </span>
      </div>
      <!--  <img
              class="rounded-circle header-profile-user"
              src="@/assets/images/users/avatar-1.jpg"
              alt="Header Avatar"
            /> -->
    </button>
    <div class="dropdown-menu dropdown-menu-end pt-0">
      <div class="p-3 border-bottom">
        <h6 class="mb-0">{{ user.username }} {{ user.userlastname }}</h6>
        <p class="mb-0 font-size-11 text-muted">{{ user.email }}</p>
        <p class="mb-0 font-size-11 text-muted">
          <b>{{ user.userrolename }}</b>
        </p>
      </div>
      <router-link class="dropdown-item" :to="`/user/${user.userid}`"
        ><i
          class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1"
        ></i>
        <span class="align-middle">Profile</span></router-link
      >
      <div class="dropdown-item" @click="switchView_Click">
        <i
          class="mdi mdi-cellphone-android text-muted font-size-16 align-middle me-1"
        ></i>
        <span class="align-middle">Scanner</span>
      </div>
      <a class="dropdown-item d-flex align-items-center" href="#"
        ><i
          class="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1"
        ></i>
        <span class="align-middle">Settings</span></a
      >
      <div class="dropdown-item" @click="logoff_Click">
        <i class="mdi mdi-logout text-muted font-size-16 align-middle me-1"></i>
        <span class="align-middle">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "AccountBar",
  data: () => ({}),
  mounted() {
    if (!this.userLoginValid) {
      //this.logoff_Click()
    }
  },
  updated() {
    if (!this.userLoginValid) {
      //this.logoff_Click()
    }
  },
  Props: {},
  methods: {
    logoff_Click() {
      window.location.href = `${window.$serverURL}/logout.php`
    },
    switchView_Click() {
      window.location.href = `${window.$scannerURL}/`
    },
  },
  computed: {
    ...mapGetters({
      user: "user/getUser",
      userSessionToken: "userSession/getUserSessionToken",
      userLoginValid: "userSession/getUserLoginValid",
    }),
  },
}
</script>

<style scoped>
.avatar-title {
  background-color: var(--element-color);
}
</style>
