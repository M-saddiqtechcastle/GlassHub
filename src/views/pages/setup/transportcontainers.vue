<template>
  <Layout :pagetitle="'Transport Containers'">
    <TopMenu
      :pageView="pageView"
      @changeView="changeView"
      addPage="transportcontainer"
    />
    <TransportContainerDataGrid
      ref="TransportContainerDataGrid"
      @onRowDoubleClick="edit"
      @editRow="edit"
      v-if="pageView === 'list'"
    />

    <TransportContainerCardGrid
      ref="TransportContainerCardGrid"
      @onRowDoubleClick="edit"
      @editRow="edit"
      v-if="pageView === 'grid'"
    />
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js"
import PageCrudMixin from "../../../common/PageCrudMixin.js"
import TopMenu from "../../../components/page/TopMenu"
import TransportContainerDataGrid from "../../../components/transportcontainers/TransportContainerDataGrid"
import TransportContainerCardGrid from "../../../components/transportcontainers/TransportContainerCardGrid"

export default {
  name: "transportcontainers",
  mixins: [pageMixin, PageCrudMixin],
  components: {
    TransportContainerDataGrid,
    TransportContainerCardGrid,
    TopMenu,
  },
  data() {
    return {
      store: "transportcontainer",
      dataGridRef: "TransportContainerDataGrid",
      defaultRecord: {
        tranportcontainerid: 0,
      },
      addPage: "transportcontainer",
    }
  },
}
</script>
