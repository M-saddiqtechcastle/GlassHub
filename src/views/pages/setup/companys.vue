<template>
  <Layout :pagetitle="'Companies'">
      <TopMenu :pageView="pageView" @changeView="changeView" addPage="company"/>
      <CompanyDataGrid
        ref="CompanyDataGrid"
        @onRowDoubleClick="edit"
        @editRow="edit"
        v-if="pageView === 'list'"
      />
      <CompanyCardGrid 
        ref="CompanyCardGrid"
        @onRowDoubleClick="edit"
        @editRow="edit"
        v-if="pageView === 'grid'"
      />
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js"
import PageCrudMixin from "../../../common/PageCrudMixin.js"
import CompanyDataGrid from "../../../components/company/CompanyDataGrid"
import CompanyCardGrid from "../../../components/company/CompanyCardGrid"
import TopMenu from "../../../components/page/TopMenu"

export default {
  name: "companies",
  mixins: [pageMixin,PageCrudMixin],
  components: {
    CompanyDataGrid,
    CompanyCardGrid,
    TopMenu,
  },
  data() {
    return {
      store: "company",
      dataGridRef: "CompanyDataGrid",
      defaultRecord: {
        companyid: 0,
      },
      addPage:"company"
    }
  },
}
</script>

<style scoped></style>
