<template>
  <Layout :pagetitle="'User'">
    <Toast />
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="mb-3"></div>
      </div>
      <div class="col-md-6">
        <div
          class="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3"
        >
          <div v-if="getPageMode === 'view'">
            <div class="btn btn-primary" @click="$router.go(-1)">
              <i class="bx bx-arrow-back me-1"></i> Back
            </div>
          </div>
          <div v-if="getPageMode === 'view'">
            <div class="btn btn-success" @click="edit">
              <i class="bx bx-edit me-1"></i> Edit
            </div>
          </div>

          <div v-if="getPageMode === 'add' || getPageMode === 'edit'">
            <div class="btn btn-danger" @click="cancel">
              <i class="bx bx-x me-1"></i> Cancel
            </div>
          </div>
          <div>
            <div
              class="btn btn-success"
              @click="saveUser"
              v-if="getPageMode === 'add' || getPageMode === 'edit'"
            >
              <i class="bx bx-save me-1"></i> Save
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
        <div class="user-sidebar">
          <userCard
            v-model:userlastname="user.userlastname"
            v-model:username="user.username"
            v-model:userrolename="user.userrolename"
            v-model:status="user.status"
            v-model:userlevel="user.userlevel"
            :errors="this.getErrors"
            :pageMode="getPageMode"
          />
          <userPersonalInfoCard 
            :pageMode="getPageMode" 
            v-model:phone="user.phone"
            v-model:email="user.email"
            v-model:linkcode="user.linkcode"
            v-model:createddatetime="user.createddatetime"
            :errors="this.getErrors"
           />
        </div>
      </div>

      <div class="col-12 col-sm-10 col-md-6 col-lg-6 col-xl-8 col-xxl-9">
        <div class="row">
            <usersummarystats />
            <usersummarystats />
            <usersummarystats />
        </div>
        <div class="row">
            <password />
            <company 
            :pageMode="getPageMode"
            />
            <mainMenu 
            :pageMode="getPageMode"
            />
            <teammembers :userid="getCurrentRecord.userid" :userroleid="getCurrentRecord.userroleid" />
        </div>  
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main"
import userCard from "../../../components/user/UserCard"
import password from "../../../components/user/Password"
import company from "../../../components/user/Company"
import mainMenu from "../../../components/user/MainMenu"
import userPersonalInfoCard from "../../../components/user/UserPersonalInfoCard"
import { mapGetters } from "vuex"
import Toast from "primevue/toast"
import teammembers from "../../../components/user/TeamMembers"
import usersummarystats from "../../../components/user/UserSummaryStats" 
import pageMixin from "../../../common/pageMixin.js"

export default {
  name: "user",
  mixins: [pageMixin],
  components: {
    Layout,
    userCard,
    password,
    company,
    mainMenu,
    userPersonalInfoCard,
    Toast,
    teammembers,
    usersummarystats,
  },
  computed: {
    ...mapGetters({
      getPageMode: "user/getPageMode",
      getCurrentRecord: "user/getCurrentRecord",
      getErrors:"user/getErrors",
    }),
  },
  data() {
    return {
      user: {
        userid: 0,
        userlevel: 3,
        status: 1,
      },
      errors: {},
    }
  },
  props: {
    userid: Number,
  },
  async created() {
    if (parseInt(this.$route.params.userid) === 0) {
      this.$store.commit("user/setPageMode", "add")
    }
    if (parseInt(this.$route.params.userid) > 0) {
      await this.$store.dispatch(
        "user/FetchById",
        parseInt(this.$route.params.userid)
      )
      this.user = this.getCurrentRecord
    } 
  },
  methods: {
    getImage(img) {
      return require(`@/assets/${img}.png`)
    },
    async cancel() {
      if (this.$store.getters["user/getPageMode"] === "add") {
        this.$router.push("/users")
      }
      this.$store.commit("user/setPageMode", "view")
    },
    async edit() {
      this.$store.commit("user/setPageMode", "edit")
    },
    async saveUser() {
      this.$store.dispatch("application/setLoading", true)

      let response
      if (parseInt(this.user.userid) === 0) {
        response = await this.$store.dispatch("user/add", this.user)
      } else {
        response = await this.$store.dispatch("user/update", this.user)
      }

      if (response.errors.length === 0) {
        this.errors = {}
        this.$toast.add({
          severity: "success",
          summary: "Updated",
          detail: "User Updated",
          life: 3000,
        })
        this.$store.commit("user/setPageMode", "view")
        this.user = this.getCurrentRecord
        this.$router.push(`/user/${this.user.userid}`)
      } else {
        this.errors = this.getErrors
      }

      this.$store.dispatch("application/setLoading", false)
    },
  },
}
</script>

