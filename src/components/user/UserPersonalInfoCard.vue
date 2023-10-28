<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-12 headericon">
          <i class="fas fa-file-signature fa-fw fa-2x"></i>
          <div class="d-block head-title">
            <h5>Personal Information</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body hrTop" v-if="pageMode === 'view'">
      <hr />
      <label class="inp">
        <input type="text" :value="phone" placeholder="&nbsp;" disabled />
        <span class="label">Phone Number</span>
      </label>
      <label class="inp">
        <input type="text" :value="email" placeholder="&nbsp;" disabled />
        <span class="label">Email Address</span>
      </label>
      <label class="inp">
        <input type="text" :value="linkcode" placeholder="&nbsp;" disabled />
        <span class="label">Link Code</span>
      </label>
      <label class="inp">
        <input
          type="text"
          :value="createddatetime"
          placeholder="&nbsp;"
          disabled
        />
        <span class="label">User Created</span>
      </label>
    </div>

    <div
      class="card-body hrTop"
      v-if="pageMode === 'add' || pageMode === 'edit'"
    >
      <hr />
      <TextInput
        v-model="currentRecord.phone"
        label="Phone Number"
        :error="errors?.phone"
      />
      <TextInput
        v-model="currentRecord.email"
        label="Email"
        :error="errors?.email"
      />
      <TextInput
        v-model="currentRecord.linkcode"
        label="Link Code"
        :error="errors?.linkcode"
      />
      <TextInput
        v-model="currentRecord.createddatetime"
        label="User Created"
        :error="errors?.createddatetime"
        disabled
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPersonalInfoCard",
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["user/getCurrentRecord"];
      },
      async set(value) {
        this.$store.commit("user/setCurrentRecord", value);
      },
    },
  },
  props: {
    pageMode: {
      default: "view",
    },
    phone: {
      default: "",
    },
    email: {
      default: "",
    },
    linkcode: {
      default: "",
    },
    createddatetime: {
      default: "",
    },
    errors: {},
  },
};
</script>
