<template>
  <div>
    <Search @search="search" />
    <CardGridBase
      store="shippingdemand"
      datakey="shippingdemandid"
      ref="shippingDemandCardGrid"
    >
      <template v-slot:main="slotProps">
        <ShippingDemandSummaryCard
          :shippingdemand="slotProps.data"
          @editRow="editRow(slotProps.data)"
          @deleteRow="deleteRow(slotProps.data)"
        />
      </template>
    </CardGridBase>
  </div>
</template>

<script>
import CardGridBase from "../../components/cardgrid/CardGridBase"
import ShippingDemandSummaryCard from "./ShippingDemandSummaryCard"
import ShippingDemandMixin from "./ShippingDemandMixin.js"

export default {
  name: "ShippingDemandCardGrid",
  mixins: [ShippingDemandMixin],
  components: {
    CardGridBase,
    ShippingDemandSummaryCard,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        let searchParams = await this.setSearchCriteria(this.searchValue)
        this.$refs.shippingDemandCardGrid.setQueryParams(searchParams)
      } else {
        this.$refs.shippingDemandCardGrid.setQueryParams()
      }
    },
  },
}
</script>

<style scoped></style>
