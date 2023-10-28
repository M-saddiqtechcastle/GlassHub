<template>
  <Layout :pagetitle="'User Role'">
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
              @click="saveUserRole"
              v-if="getPageMode === 'add' || getPageMode === 'edit'"
            >
              <i class="bx bx-save me-1"></i> Save
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="getPageMode === 'add' || getPageMode === 'edit'">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-12 my-auto">
                  <h5>Role Details</h5>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <UserRoleCard
                    :pageMode="getPageMode"
                    :errors="getErrors"
                    v-model:rolename="userrole.rolename"
                    v-model:roleaccesstype="userrole.roleaccesstype"
                    v-model:userroleid="userrole.userroleid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>

    <div v-if="getPageMode === 'view'">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-12 my-auto">
                  <h5>Role Details</h5>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <UserRoleCard
                    :pageMode="getPageMode"
                    :errors="getErrors"
                    v-model:rolename="userrole.rolename"
                    v-model:roleaccesstype="userrole.roleaccesstype"
                    v-model:userroleid="userrole.userroleid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="row">
            <div class="col-12">
              <div class="card accordion" id="accordionExampleTwo">
                <div class="card-header text-start">
                  <div class="row">
                    <div class="col-11 my-auto">
                      <h5>Features</h5>
                    </div>
                    <div class="col-1 p-0 justify-content-top">
                      <span
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                        >&nbsp;</span
                      >
                    </div>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExampleTwo"
                >
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12">
                        <FeatureDataGrid :userroleid="userrole.userroleid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js";
import { mapGetters } from "vuex";
import UserRoleCard from "../../../components/userrole/UserRoleCard";
import FeatureDataGrid from "../../../components/userrole/FeatureDataGrid";

export default {
  name: "userrole",
  mixins: [pageMixin],
  components: {
    UserRoleCard,
    FeatureDataGrid,
  },
  data() {
    return {
      userrole: {
        userroleid: 0,
        rolename: "",
        roleaccesstype: 0,
      },
    };
  },
  async created() {
    if (parseInt(this.$route.params.userroleid) === 0) {
      this.$store.commit("userrole/setPageMode", "add");
    }
    if (parseInt(this.$route.params.userroleid) > 0) {
      await this.$store.dispatch(
        "userrole/FetchById",
        parseInt(this.$route.params.userroleid)
      );

      this.userrole = this.getCurrentRecord;
      console.log(this.userrole);
    }
  },
  computed: {
    ...mapGetters({
      getPageMode: "userrole/getPageMode",
      getCurrentRecord: "userrole/getCurrentRecord",
      getErrors: "userrole/getErrors",
    }),
  },
  methods: {
    getImage(img) {
      return require(`@/assets/${img}.png`);
    },
    async cancel() {
      if (this.$store.getters["userrole/getPageMode"] === "add") {
        this.$router.push("/userroles");
      }
      this.$store.commit("userrole/setPageMode", "view");
    },
    async edit() {
      this.$store.commit("userrole/setPageMode", "edit");
    },
    async saveUserRole() {
      this.$store.dispatch("application/setLoading", true);

      let response;
      if (parseInt(this.userrole.userroleid) === 0) {
        response = await this.$store.dispatch("userrole/add", this.userrole);
      } else {
        response = await this.$store.dispatch("userrole/update", this.userrole);
      }

      if (response.errors.length === 0) {
        this.errors = {};
        this.$toast.add({
          severity: "success",
          summary: "Updated",
          detail: "User Updated",
          life: 3000,
        });
        this.$store.commit("userrole/setPageMode", "view");
        this.userrole = this.getCurrentRecord;
        this.$router.push(`/userrole/${this.userrole.userroleid}`);
      } else {
        this.errors = this.getErrors;
      }

      this.$store.dispatch("application/setLoading", false);
    },
  },
};
</script>
