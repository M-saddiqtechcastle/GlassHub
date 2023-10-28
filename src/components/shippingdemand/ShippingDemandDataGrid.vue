<template>
  <Search @search="search" />
  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="ShippingDemandGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="shippingDemandGridv"
        :instanceid="0"
        deleteText="Delete Shipping Demand?"
        dataKey="shippingdemandid"
        store="shippingdemand"
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
    </div>
  </div>
</template>

<script>
import dataGrid from "../datagrid/DataGridWrapper"
import VSwitch from "@lmiller1990/v-switch"
import ShippingDemandMixin from "./ShippingDemandMixin.js"

export default {
  name: "ShippingDemandDataGrid",
  mixins: [ShippingDemandMixin],
  components: {
    dataGrid,
    VSwitch,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        let searchParams = await this.setSearchCriteria(this.searchValue)
        this.$refs.ShippingDemandGrid.setQueryParams(searchParams)
      } else {
        this.$refs.ShippingDemandGrid.setQueryParams()
      }
    },
  },
}
</script>

<style scoped></style>
