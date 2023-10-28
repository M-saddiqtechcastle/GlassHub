<template>
  <Layout :pagetitle="'Receive Inventory'">
    <div class="row align-items-center mb-2">
      <div class="col-8">
        <div class="d-inline-block align-items-center headmenu">
          <ul class="list-group list-group-horizontal">
            <li
              class="list-group-item"
              @click="receiptType = 'purchaseOrder'"
              :class="{active: receiptType === 'purchaseOrder'}"
            >
              Purchase Order
            </li>
            <li
              class="list-group-item"
              @click="receiptType = 'productionReceipt'"
              :class="{active: receiptType === 'productionReceipt'}"
            >
              Production Receipt
            </li>
            <li
              class="list-group-item"
              @click="receiptType = 'stockAdjustment'"
              :class="{active: receiptType === 'stockAdjustment'}"
            >
              Stock Adjustment
            </li>
          </ul>
        </div>
        
      </div>
      <div class="col-md-4">
        <div>
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
    </div>
    <!-- content-->

    <div class="container-fluid">
      <ReceivePurchaseOrder
        :pageMode="pageMode"
        v-if="receiptType === 'purchaseOrder'"
      />
      <ReceiveProductionReceipt
        :pageMode="pageMode"
        v-if="receiptType === 'productionReceipt'"
      />
      <ReceiveStockAdjustment
        :pageMode="pageMode"
        v-if="receiptType === 'stockAdjustment'"
      />
    </div>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js";
import PageCrudMixin from "../../../common/PageCrudMixin.js";
import NavigationButtons from "../../../components/page/NavigationButtons";
import ReceivePurchaseOrder from "../../../components/inventory/ReceivePurchaseOrder";
import ReceiveProductionReceipt from "../../../components/inventory/ReceiveProductionReceipt";
import ReceiveStockAdjustment from "../../../components/inventory/ReceiveStockAdjustment";

export default {
  name: "receiveinventory",
  mixins: [pageMixin, PageCrudMixin],
  components: {
    NavigationButtons,
    ReceivePurchaseOrder,
    ReceiveProductionReceipt,
    ReceiveStockAdjustment,
  },

  data() {
    return {
      receiptType: "purchaseOrder",
    };
  },
};
</script>

<style scoped></style>
