<template>
  <div>
    <div class="row mb-4">
      <div class="col-1 col-sm-2 col-md-3 d-lg-none"></div>
      <div class="col-10 col-sm-8 col-md-6 col-lg-5 align-content-end mb-3">
        <div class="input-group">
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search..."
            class="form-control"
            v-on:keyup.enter="search"
            v-model="searchValue"
          />
          <div class="input-group-append">
            <button
              type="button"
              @click="search"
              v-on:keyup.enter="search"
              class="btn btn-primary"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="col-1 col-sm-2 col-md-3 d-lg-none"></div>
      <div class="col-12 col-lg-7 pb-1"></div>
    </div>

    <CardGridBase
      store="transportcontainer"
      datakey="transportcontainerid"
      ref="transportcontainerCardGrid"
    >
      <template v-slot:main="slotProps">
        <!-- <ShippingDemandSummaryCard
          :shippingdemand="slotProps.data"
          @editRow="editRow(slotProps.data)"
          @deleteRow="deleteRow(slotProps.data)"
        /> -->
        <TransportContainerSummaryCard
        :transportcontainer="slotProps.data"
         />
      </template>
    </CardGridBase>
  </div>
</template>

<script>
//import queryObject from "../../common/queryObject"
//import { operatorType } from "../../common/queryObject"
import CardGridBase from "../../components/cardgrid/CardGridBase"
import TransportContainerSummaryCard from "./TransportContainerSummaryCard"

export default {
  name: "TransportContainerCardGrid",
  components: {
    CardGridBase,
    TransportContainerSummaryCard
  },
  methods: {
    async search() {
      /*
      // todo get this in one place instead of grid and card object
      if (this.searchValue) {
        let queryobject = await new queryObject()
        queryobject.addCriteria({
          field: "shippingdemand.shippingdemandid",
          value: this.searchValue,
          operator: operatorType.like,
        })

        this.$refs.shippingDemandCardGrid.setQueryParams(
          queryobject.getQueryParams()
        )
      } else {
        this.$refs.shippingDemandCardGrid.setQueryParams()
      }
      */
    },
    async onRowDoubleClick(event) {
      this.$router.push(`/transportcontainer/${event.transportcontainerid}`)
    },
    async postDeleteRow(event) {
      event
    },
    async editRow(event) {
      this.$router.push(`/transportcontainer/${event.transportcontainerid}`)
    },
    async deleteRow(event) {
      this.loading = true
      
      this.$confirm.require({
        message: "Delete Container?",
        header: "Delete",
        icon: "pi pi-exclamation-triangle",
        accept: async () => {
          let complete = await this.deleteRecord(event.shippingdemandid)
          if (complete) {
            this.$toast.add({
              severity: "success",
              summary: "Confirmed",
              detail: "Deleted",
              life: 3000,
            })
            this.refreshGrid()
            this.$emit("postDeleteRow", event) // push to parent to handle
          }
          this.loading = false
        },
        reject: () => {
          // do nothing
        },
      })

      this.loading = false
    },
    async deleteRecord(id) {
      let response = await this.$store.dispatch(`${this.store}/delete`, {
        id: id,
      })

      if (response.success) {
        return true
      } else {
        return false
      }
    },
  },
  data() {
    return {
      searchValue: null,
    }
  },
}
</script>

<style scoped></style>
