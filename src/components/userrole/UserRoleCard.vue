<template>
  <div class="container-fluid" v-if="pageMode === 'view'">
    <h5>Role Name</h5>
    <p>{{ rolename }}</p>
    <br />
    <h5>Access Type</h5>
    <p>
      <v-switch :case="`${roleaccesstype}`">
        <template #0>
          <i class="fas fa-mobile-alt"></i> + <i class="fas fa-desktop"></i
          ><br />
          Scanner + Manager</template
        >
        <template #1><i class="fas fa-mobile-alt"></i> Scanner</template>
        <template #2><i class="fas fas fa-desktop"></i> Manager</template>
        <template #default>Select Access Type</template>
      </v-switch>
    </p>

    <button @click="duplicateRole" class="btn addBtn">
      Duplicate This Role
    </button>
  </div>

  <div class="container-fluid" v-if="pageMode === 'edit' || pageMode === 'add'">
    <h5>Role Name</h5>
    <TextInput
        v-model="currentRecord.rolename"
        label="Role Name"
        :error="errors?.rolename"
      />
    <br />
    <h5>Access Type</h5>
    <div>
      <select
        class="form-select text-muted mb-0"
        :value="roleaccesstype"
        :class="{ 'is-invalid': errors?.roleaccesstype }"
        @change="(event) => $emit('update:roleaccesstype', event.target.value)"
        placeholder="Access Type"
      >
        <option value="0">Scanner + Manager</option>
        <option value="1">Scanner</option>
        <option value="2">Manager</option>
      </select>
      <div class="invalid-feedback" v-if="errors?.roleaccesstype">
        {{ errors?.roleaccesstype }}
      </div>
    </div>
  </div>
</template>

<script>
import VSwitch from "@lmiller1990/v-switch";
import UserRoleCopyDialog from "./UserRoleCopyDialog";
import { h } from "vue";
import Button from "primevue/button";

export default {
  name: "UserRoleCard",
  components: {
    VSwitch,
  },
  props: {
    pageMode: {
      default: "view",
    },
    userroleid: Number,
    rolename: String,
    roleaccesstype: Number,
    //errors: {},
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["userrole/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("userrole/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["userrole/getErrors"]
      },
    },
  },

  methods: {
    async copyRecord(copyrolename) {
      this.$store.dispatch("application/setLoading", true);
      let response = await this.$store.dispatch("userrole/copyUserRole", {
        userroleid: this.userroleid,
        userrolename: copyrolename,
      });

      if (response.errors.length === 0) {
        this.$toast.add({
          severity: "success",
          summary: "Updated",
          detail: "User Updated",
          life: 3000,
        });
        this.$store.commit("userrole/setPageMode", "view");
        this.$store.commit("userrole/setCurrentRecord", response.dataset);
        this.$store.commit("userrole/setErrors", response.errors);
        this.$router.push(`/userroles`);
      } else {
        this.$store.commit("userrole/setCopyErrors", response.errors);
      }

      this.$store.dispatch("application/setLoading", false);
    },
    duplicateRole() {
      let thisObject = this;
      this.$store.commit("userrole/setCopyErrors", {});
      const dialogRef = this.$dialog.open(UserRoleCopyDialog, {
        props: {
          header: `Copy Role`,
          style: {
            width: "50vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
          errors: thisObject.copyErrors,
        },
        modal: true,
        templates: {
          footer: () => {
            return [
              h(Button, {
                label: "Cancel",
                icon: "pi pi-times",
                class: "p-button-danger",
                onClick: () => dialogRef.close(),
                autofocus: false,
              }),
              h(Button, {
                label: "Save",
                icon: "pi pi-check",
                onClick: () => {
                  this.copyRecord(
                    this.$store.getters["userrole/getCopyUserRoleName"]
                  );
                },
                autofocus: true,
              }),
            ];
          },
        },
        onClose: (options) => {
          options;
        },
        handleSelection(event) {
          thisObject.$emit("handleSelection", event);
          this.close;
        },
      });
    },
  },
};
</script>
