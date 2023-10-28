<template>
  <div class="card">
    <div class="card-body p-0" v-if="pageMode === 'add' || pageMode === 'edit'">
      <div class="user-profile-img">
        <img
          src="@/assets/images/pattern-bg.jpg"
          class="profile-img profile-foreground-img rounded-top"
          style="height: 120px"
          alt=""
        />
        <div class="overlay-content rounded-top">
          <div>
            <div class="user-nav p-3">
              <div class="d-flex justify-content-end"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- end user-profile-img -->
      <div class="mt-n5 position-relative text-center">
        <Avatar
          :label="initials"
          shape="circle"
          size="xlarge"
          icon="fas fa-user"
          class="text-white"
          :style="{ 'background-color': '#' + currentRecord.avatarcolor }"
        />
        <br />
        Avatar Colour
        <ColorPicker v-model="currentRecord.avatarcolor" />
        <div class="mt-3 mx-3">
          <TextInput
            v-model="currentRecord.username"
            label="First Name"
            :error="errors?.username"
          />
          <TextInput
            v-model="currentRecord.userlastname"
            label="Surname"
            :error="errors?.userlastname"
          />
          <hr />
          <div class="form-group">
            <h4 class="card-title">User Role</h4>
            <recordfinder
              :limitDisplayCols="['userroleid', 'rolename', 'roleaccesstype']"
              title="Role Search"
              store="userrole"
              gridid="userrolerecordfinder"
              dataKey="userroleid"
              label="Change Role"
              class="mt-3"
              @handleSelection="selectRole"
            >
            </recordfinder><br />
            <span class="badge bg-soft-success text-dark mt-1 mb-3 px-4 py-2">{{
              userrolename
            }}</span>

            
            <div class="invalid-feedback" v-if="errors?.userrolename">
              {{ errors?.userrolename }}
            </div>
          </div>

          <hr />

          <div class="">
            <h4 class="card-title mb-2">User Level</h4>
            <select
              class="form-select text-muted mb-0"
              v-bind="userlevel"
              :class="{ 'is-invalid': errors?.userlevel }"
              @change="(event) => $emit('update:userlevel', event.target.value)"
              placeholder="User Level"
            >
              <option value="3">Normal User</option>
              <option value="2">Site Admin</option>
              <option value="1">Company Admin</option>
              <option value="0">System Admin</option>
            </select>
            <div class="invalid-feedback" v-if="errors?.userlevel">
              {{ errors?.userlevel }}
            </div>
          </div>

          <hr />

          <div class="pt-2 pb-0">
            <h4 class="card-title mb-3">Account Status</h4>

            <InputSwitch
              aria-label="status"
              v-model="tempstatus"
              trueValue="'1'"
              falseValue=""
              :class="{ 'is-invalid': errors?.status }"
              @change="(event) => $emit('update:status', event.target.value)"
            />
            <p class="mt-2">{{ displayStatus }} **change on toggle**</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card-body p-0" v-if="pageMode === 'view'">
      <div class="user-profile-img">
        <img
          src="@/assets/images/pattern-bg.jpg"
          class="profile-img profile-foreground-img rounded-top"
          style="height: 120px"
          alt=""
        />
        <div class="overlay-content rounded-top">
          <div>
            <div class="user-nav p-3">
              <div class="d-flex justify-content-end"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- end user-profile-img -->

      <div class="mt-n5 position-relative">
        <div class="text-center">
          <Avatar
            :label="initials"
            shape="circle"
            size="xlarge"
            icon="fas fa-user"
            class="text-white"
            :style="{ 'background-color': '#' + currentRecord.avatarcolor }"
          />
          <div class="mt-3">
            <h5 class="mb-1">{{ username }} {{ userlastname }}</h5>
            <div>
              <hr />

              <h4 class="card-title">Role</h4>
              <span class="badge bg-soft-success text-dark mt-3 px-4 py-2">{{
                userrolename
              }}</span>
            </div>
            <div class="mt-4"></div>
          </div>
        </div>
      </div>
      <div class="p-3 pt-2 mt-2">
        <div class="row text-center">
          <div class="col-6 border-end">
            <div class="pt-2 pb-0">
              <h5 class="mb-2">User Level</h5>
              <p>{{ displayUserLevel }}</p>
            </div>
          </div>
          <div class="col-6">
            <div class="pt-2 pb-0">
              <h5 class="mb-2">Status</h5>
              <p class="text-success">{{ displayStatus }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end card body -->
  </div>
</template>

<script>
import Avatar from "primevue/avatar"
import ColorPicker from "primevue/colorpicker"
import { mapGetters } from "vuex"
import InputSwitch from "primevue/inputswitch"
import recordfinder from "../recordfinder/RecordFinder"
import queryObject from "../../common/queryObject.js"
import { operatorType } from "../../common/queryObject"

let query = new queryObject()

export default {
  name: "UserCard",
  components: {
    Avatar,
    InputSwitch,
    recordfinder,
    ColorPicker,
  },
  computed: {
    ...mapGetters(["getPageMode"]),
    currentRecord: {
      get() {
        return this.$store.getters["user/getCurrentRecord"]
      },
      async set(value) {
        this.$store.commit("user/setCurrentRecord", value)
      },
    },
  },
  props: {
    userlastname: String,
    username: String,
    userrolename: String,
    userlevel: Number,
    status: Number,
    errors: {},
    pageMode: { default: "view" },
  },
  data() {
    return {
      model: false,
      tempstatus: 1,
      displayStatus: "",
      displayUserLevel: "",
      data: {},
      roleQuery: {},
      initials: "",
    }
  },
  watch: {
    username() {
      let initials = ""
      if (this.username) {
        initials += this.username.charAt(0).toUpperCase() ?? ""
      }
      if (this.userlastname) {
        initials += this.userlastname.charAt(0).toUpperCase() ?? ""
      }

      this.initials = initials
    },
  },
  created() {
    query.addCriteria({
      field: "roleaccesstype",
      value: 1,
      operator: operatorType.equals,
    })
    this.roleQuery = query.getQueryParams()
  },
  mounted() {
    this.model = true
    this.tempstatus = this.status
    this.setDisplayStatus(this.status)
    this.setDisplayUserLevel(this.userlevel)
  },
  methods: {
    selectRole(event) {
      console.log("card", event)
      this.$emit("update:userroleid", event.userroleid)
      this.$emit("update:userrolename", event.rolename)
    },
    setDisplayStatus(input) {
      this.displayStatus = "Inactive"
      if (parseInt(input) === 1) {
        this.displayStatus = "Active"
      }
    },
    setDisplayUserLevel(input) {
      switch (parseInt(input)) {
        case 0:
          this.displayUserLevel = "System Admin"
          break
        case 1:
          this.displayUserLevel = "Organisation Admin"
          break
        case 2:
          this.displayUserLevel = "Site Admin"
          break
        case 3:
          this.displayUserLevel = "Normal User"
          break
        default:
          this.displayUserLevel = "Normal User"
      }
    },
  },
}
</script>

<style scoped></style>
