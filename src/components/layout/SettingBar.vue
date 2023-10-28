<template>
  <div class="dropdown d-inline-block">
    <button
      type="button"
      class="btn header-item noti-icon right-bar-toggle toggle-right"
      id="right-bar-toggle-v"
      @click="toggleRightSidebar"
    >
      <eva-icon class="icon-sm toggle-right" name="settings-outline"></eva-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: "setting-bar",
};
</script>

<style scoped></style>
