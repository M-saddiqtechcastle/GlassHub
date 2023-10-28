<template>
  <Layout :pagetitle="'Shipping Demands'">
    <TopMenu
      :pageView="pageView"
      @changeView="changeView"
      addPage="shippingdemand"
    />
    <ShippingDemandDataGrid v-if="pageView === 'list'" />
    <ShippingDemandCardGrid v-if="pageView === 'grid'" />
  </Layout>
</template>

<script>
import Layout from "../../layouts/main"
import appConfig from "@/app.config"
import pageMixin from "../../../common/pageMixin.js"
import TopMenu from "../../../components/page/TopMenu"
import ShippingDemandDataGrid from "../../../components/shippingdemand/ShippingDemandDataGrid"
import ShippingDemandCardGrid from "../../../components/shippingdemand/ShippingDemandCardGrid"

export default {
  page: {
    title: "Shipping Demands",
    meta: [
      {
        name: "Shipping Demands",
        content: appConfig.description,
      },
    ],
  },
  mixins: [pageMixin],
  components: {
    Layout,
    TopMenu,
    ShippingDemandDataGrid,
    ShippingDemandCardGrid,
  },
}
</script>

<style scoped></style>
