<template>
  <div>
    <div class="form-group">
      <label class="inp">
        <input
          type="input"
          placeholder="&nbsp;"
          :class="{ 'is-invalid': copyErrors?.rolename }"
          v-model="copyUserRoleName"
          required
        />
        <span class="label">Role Name</span>
        <div class="invalid-feedback">
          {{ copyErrors?.rolename }}
        </div>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserRoleCopyDialog",
  inject: ["dialogRef"],
  computed: {
    copyUserRoleName: {
      get() {
        return this.$store.getters["userrole/getCopyUserRoleName"]
      },
      set(value) {
        this.$store.commit("userrole/setCopyUserRoleName", value)
      },
    },
    copyErrors: {
      get() {
        return this.$store.getters["userrole/getCopyErrors"]
      },
    },
  },
}
</script>
