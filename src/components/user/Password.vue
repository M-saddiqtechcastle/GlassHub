<template>
  <div class="col-12 col-xl-6 col-xxl-4">
    <Toast />
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 headericon">
            <i class="fas fa-key fa-fw fa-2x"></i>
            <div class="d-block head-title">
              <h5>Password</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body hrTop text-center">
        <hr />
        <div class="stage1" v-if="getPasswordCard.view !== 'newPassword'">
          <label class="">
            <password
              v-model="oldPassword"
              :class="{ 'is-invalid': !getPasswordCard.oldPasswordValid }"
              :feedback="false"
              placeholder="Current Password"
              toggleMask
            />
            <div
              class="invalid-feedback"
              v-if="!getPasswordCard.oldPasswordValid"
            >
              {{ getPasswordCard.error }}
            </div>
          </label>
          <br />
          <button
            @click="passwordCardView('newPassword')"
            class="btn btn-primary my-3"
          >
            Change Password
          </button>
        </div>

        <div class="stage2" v-if="getPasswordCard.view === 'newPassword'">
          <password
            v-model="newPassword"
            placeholder="New Password"
            toggleMask
          /><br />
          <password
            class="mt-1"
            v-model="newPasswordRepeat"
            placeholder="Repeat Password"
            toggleMask
          /><br />
          <button
            @click="passwordCardView('changeStart')"
            class="btn btn-secondary my-3 me-2"
          >
            Cancel
          </button>
          <button
            @click="passwordCardView('changeComplete')"
            class="btn btn-success my-3 ms-2"
          >
            Save
          </button>
        </div>
      </div>
      <!-- end card body -->
    </div>
  </div>
</template>

<script>
import password from "primevue/password";
import { mapGetters } from "vuex";
import Toast from "primevue/toast";

export default {
  components: { password, Toast },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      newPasswordRepeat: "",
    };
  },
  computed: {
    ...mapGetters({
      getPasswordCard: "user/getPasswordCard",
    }),
  },
  methods: {
    async passwordCardView(value) {
      if (value === "newPassword") {
        await this.$store.dispatch("application/setLoading", true);
        // get password value and auth user
        let valid = await this.$store.dispatch(
          "user/validatePassword",
          this.oldPassword
        );
        await this.$store.dispatch("application/setLoading", false);

        this.$store.commit(
          "user/setPasswordCardViewError",
          "Incorrect Current Password"
        );
        this.$store.commit("user/setOldPasswordValid", valid);
        if (valid) {
          this.$store.commit("user/setPasswordCardView", value);
        }
      }

      if (value === "changeComplete") {
        if (this.newPassword !== this.newPasswordRepeat) {
          this.$store.commit(
            "user/setPasswordCardViewError",
            "Passwords Do Not Match"
          );
          this.$store.commit("user/setOldPasswordValid", false);
          return;
        }

        if (this.newPassword.length < 5) {
          this.$store.commit(
            "user/setPasswordCardViewError",
            "Password not long enough"
          );
          this.$store.commit("user/setOldPasswordValid", false);
          return;
        }

        // update passowrd
        let response = await this.$store.dispatch("user/updatePassword", {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        });
        if (response.passwordchanged) {
          this.$toast.add({
            severity: "success",
            summary: "Password Updated",
            detail: "User Password Updated",
            life: 3000,
          });
          this.$store.commit("user/setPasswordCardView", value);
          (this.oldPassword = ""),
            (this.newPassword = ""),
            (this.newPasswordRepeat = "");
        } else {
          this.$store.commit("user/setPasswordCardViewError", response.error);
          this.$store.commit("user/setOldPasswordValid", false);
          return;
        }
      }

      if (value !== "changeComplete" && value !== "newPassword") {
        this.$store.commit("user/setPasswordCardView", value);
      }
    },
  },
};
</script>

<style scoped>
.card-body {
  min-height: 11em;
}
</style>
