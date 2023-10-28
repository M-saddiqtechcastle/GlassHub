<template>
  <Layout :pagetitle="'Company'">
    <div class="row align-items-center">
      <div class="col-md-12">
        
        <div class="mb-3">
          <NavigationButtons
            @add="add"
            @save="save"
            @cancel="cancel"
            @setPageMode="setPageMode"
            :store="store"
            :pageMode="pageMode"
          />
        </div>
      </div>
      <!-- content-->
      <div class="container-fluid">
        <CompanyCard :pageMode="pageMode" />
      </div>

    </div>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js"
import PageCrudMixin from "../../../common/PageCrudMixin.js"
import NavigationButtons from "../../../components/page/NavigationButtons"
import CompanyCard from "../../../components/company/CompanyCard"

export default {
  name: "company",
  mixins: [pageMixin, PageCrudMixin],
  components: {
    NavigationButtons,
    CompanyCard,
  },
  data() {
    return {
      store: "company",
      dataGridRef: "CompanyDataGrid",
      defaultRecord: {
        companyid: 0,
      },
      addPage: "company",
    }
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["company/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("company/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["company/getErrors"]
      },
    },
    pageMode: {
      get() {
        return this.$store.getters["company/getPageMode"]
      },
    },
  },
  async created() {
    if (parseInt(this.$route.params.companyid) === 0) {
      this.$store.commit("company/setPageMode", "add")
      this.currentRecord = this.defaultRecord
    }
    if (parseInt(this.$route.params.companyid) > 0) {
      this.$store.commit("company/setPageMode", "view")
      await this.$store.dispatch(
        "company/FetchById",
        parseInt(this.$route.params.companyid)
      )
    }
  },
}
</script>

<style scoped></style>
