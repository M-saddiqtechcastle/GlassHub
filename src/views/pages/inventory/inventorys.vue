<template>
  <Layout :pagetitle="'Inventory'">
    <TopMenu
      :pageView="pageView"
      @changeView="changeView"
      addPage="inventory"
    />
    <InventoryDataGrid v-if="pageView === 'list'" />
    <InventoryCardGrid v-if="pageView === 'grid'" />
  </Layout>
</template>

<script>
import Layout from "../../layouts/main"
import appConfig from "@/app.config"
import pageMixin from "../../../common/pageMixin.js"
import TopMenu from "../../../components/page/TopMenu"
import InventoryDataGrid from "../../../components/inventory/InventoryDataGrid"
import InventoryCardGrid from "../../../components/inventory/InventoryCardGrid"

export default {
  page: {
    title: "Inventory",
    meta: [
      {
        name: "Inventory",
        content: appConfig.description,
      },
    ],
  },
  mixins: [pageMixin],
  components: {
    Layout,
    TopMenu,
    InventoryDataGrid,
    InventoryCardGrid,
  },
}
</script>

<style scoped></style>
