<template>
  <div class="navbar-brand-box">
    <router-link to="/" class="logo logo-dark">
      <span class="logo-sm">
        <img src="@/assets/images/logo-dark-sm.png" alt="" height="30" />
      </span>
      <span class="logo-lg">
        <img src="@/assets/images/logo-dark.png" alt="" width="150" />
      </span>
    </router-link>

    <router-link to="/" class="logo logo-light">
      <span class="logo-lg">
        <img src="@/assets/images/logo-light.png" alt="" width="150" />
      </span>
      <span class="logo-sm">
        <img src="@/assets/images/logo-light-sm.png" alt="" height="30" />
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
    name: "navbar-brand"
}
</script>

<style scoped></style>
