<template>
  <div class="col-12 col-xl-6 col-xxl-4">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 headericon">
            <i class="fas fa-building fa-fw fa-2x"></i>
            <div class="d-block head-title">
              <h5>Company</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body hrTop text-center" v-if="pageMode === 'view'">
        <hr />
        <h5>{{ currentCompanyRecord.companyname }}</h5>
        <h5 class="mb-2">Site(s)</h5>
        <div
          v-for="site in currentRecord.sites"
          :key="site.siteid"
          :id="site.siteid"
        >
          <span class="badge bg-soft-success text-dark mt-2 mb-2 px-4 py-2">
            {{ site.sitename }}</span
          >
        </div>
      </div>

      <div class="card-body hrTop" v-if="pageMode === 'add' || pageMode === 'edit'">
        <hr />
        <div class="text-center mb-4">
          <h5>{{ currentCompanyRecord.companyname }}</h5>
          <RecordFinder
            :limitDisplayCols="['companyid', 'companyname', 'linkcode']"
            title="Select Company"
            store="company"
            gridid="companyrecordfinder"
            dataKey="companyid"
            label="Change Company"
            @handleSelection="setCompany"
          />
        </div>

        <div class="select-group">
          <SiteSelect :companyid="currentCompanyRecord.companyid" />
        </div>
      </div>
      <!-- end card body -->
    </div>
  </div>
</template>

<script>
import SiteSelect from "../common/SiteSelect";
import RecordFinder from "../recordfinder/RecordFinder";

export default {
  name: "Company",
  components: {
    SiteSelect,
    RecordFinder,
  },
  watch: {
    async currentRecord() {
      let user = this.$store.getters["user/getCurrentRecord"];
      if (user.userid !== 0) {
        await this.$store.dispatch("company/FetchById", user.companyid);
      }
    },
  },
  methods: {
    setCompany(companySelected) {
      this.currentRecord.companyid = companySelected.companyid;
      this.currentCompanyRecord = companySelected;
    },
  },
  computed: {
    currentCompanyRecord: {
      get() {
        return this.$store.getters["company/getCurrentRecord"];
      },
      set(value) {
        console.log("set", value);
        this.$store.commit("company/setCurrentRecord", value);
      },
    },
    currentRecord: {
      get() {
        return this.$store.getters["user/getCurrentRecord"];
      },
      set(value) {
        console.log("set", value);
        this.$store.commit("user/setCurrentRecord", value);
      },
    },
    errors: {
      get() {
        return this.$store.getters["feature/getErrors"];
      },
    },
  },
  props: {
    pageMode: {
      default: "view",
    },
  },
};
</script>

<style scoped></style>
