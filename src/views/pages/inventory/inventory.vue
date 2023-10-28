<template>
  <Layout :pagetitle="'Inventory Detail'">
    <div class="row align-items-center pt-4">
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
        <InventorySummary :pageMode="pageMode" />
      </div>
    </div>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js";
import NavigationButtons from "../../../components/page/NavigationButtons"
import InventorySummary from "../../../components/inventory/InventorySummary";


export default {
  name: "inventory",
  mixins: [pageMixin],
  components: {
    NavigationButtons,
    InventorySummary,
  },
};
</script>

<style scoped></style>
