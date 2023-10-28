<template>
  <CardGridBase
    store="shippingdemandline"
    datakey="shippingdemandlineid"
    ref="shippingDemandLineCardGrid"
    :limitQuery="setLimitQuery()"
  >
    <template v-slot:main="slotProps">
      <ShippingDemandLineSummaryCard
        :shippingdemandline="slotProps.data"
        @onRowDoubleClick="onRowDoubleClick"
        @deleteRow="deleteRow"
        @editRow="editRow"
      />
    </template>
  </CardGridBase>
  <Dialog
    header="Demand Line"
    v-model:visible="modalVisible"
    :modal="true"
    :draggable="false"
    :dismissableMask="true"
  >
    <ShippingDemandLineCard />
    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        class="p-button-danger"
        @click="modalVisible = false"
      />
      <Button label="Save" icon="pi pi-check" @click="save" />
    </template>
  </Dialog>
</template>

<script>
import DialogCrudMixin from "../../common/DialogCrudMixin.js"
import CardGridBase from "../cardgrid/CardGridBase"
import ShippingDemandLineSummaryCard from "./ShippingDemandLineSummaryCard"
import ShippingDemandLineCard from "./ShippingDemandLineCard"
import ShippingDemandLineMixin from "./ShippingDemandLineMixin.js"

export default {
  name: "ShippingDemandLineCardGrid",
  mixins: [DialogCrudMixin, ShippingDemandLineMixin],
  components: {
    CardGridBase,
    ShippingDemandLineSummaryCard,
    ShippingDemandLineCard,
  },
  props: {
    shippingdemandid: {
      default: 0,
    },
  },
  methods: {
    async search() {
      await this.$refs.shippingDemandLineCardGrid.setQueryParams(
        this.setLimitQuery()
      )
    },
  },
}
</script>
