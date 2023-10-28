import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"
import Search from "../page/Search"

export default {
  components: { Search },
  methods: {
    async setSearchCriteria(enteredSearchValue) {
      let queryobject = await new queryObject()
      queryobject.addCriteria({
        field: "shippingdemandid",
        value: enteredSearchValue,
        operator: operatorType.like,
      })

      return queryobject.getQueryParams()
    },
    async onRowDoubleClick(event) {
      this.$router.push(`/shippingdemand/${event.shippingdemandid}`)
    },
    async postDeleteRow(event) {
      event
    },
    async editRow(event) {
      this.$router.push(`/shippingdemand/${event.shippingdemandid}`)
    },
    async deleteRow(event) {
      this.loading = true
      this.$confirm.require({
        message: "Delete Demand?",
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
