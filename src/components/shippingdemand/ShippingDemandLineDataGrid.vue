<template>
  <div>
    <dataGrid
      ref="ShippingDemandLineDataGrid"
      @onRowDoubleClick="onRowDoubleClick"
      @postDeleteRow="postDeleteRow"
      @editRow="editRow"
      gridid="shippingDemandLineGridv"
      :instanceid="0"
      deleteText="Delete Line?"
      dataKey="shippingdemandlineid"
      store="shippingdemandline"
      :limitQuery="setLimitQuery()"
      :rowsPerPage="[5]"
    >
      <template #body="slotProps">
        <v-switch :case="slotProps.field">
          <template #default>
            <div>{{ slotProps.data[slotProps.field] }}</div>
          </template>
          <!-- needed to display base fields -->
        </v-switch>
      </template>
    </dataGrid>
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
  </div>
</template>

<script>
import dataGrid from "../datagrid/DataGridWrapper"
import VSwitch from "@lmiller1990/v-switch"
import DialogCrudMixin from "../../common/DialogCrudMixin.js"
import ShippingDemandLineCard from "./ShippingDemandLineCard"
import ShippingDemandLineMixin from "./ShippingDemandLineMixin.js"

export default {
  name: "ShippingDemandDataGrid",
  components: {
    dataGrid,
    VSwitch,
    ShippingDemandLineCard,
  },
  mixins: [DialogCrudMixin, ShippingDemandLineMixin],
  props: {
    shippingdemandid: {
      default: 0,
    },
  },
  methods: {
    async search() {
      await this.$refs.ShippingDemandLineDataGrid.setQueryParams(
        this.setLimitQuery()
      )
    },
  },
}
</script>

<style scoped></style>
