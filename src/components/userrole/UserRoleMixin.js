import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"
import Search from "../page/Search"

export default {
  components: { Search },
  methods: {
    async setSearchCriteria(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      let queryobject = await new queryObject()
      queryobject.addCriteria({
        field: "userroleid",
        value: this.searchValue,
        operator: operatorType.like,
      })

      queryobject.addCriteria({
        field: "rolename",
        value: this.searchValue,
        operator: operatorType.like,
        group: queryobject.addCriteriaGroup(),
      })

      return queryobject.getQueryParams()
    },
    numberOfMoreFeatureLinked(linkedfeatures) {
      return Math.max(linkedfeatures.length - 5, 0)
    },
    stringToColor(str) {
      if (!str) {
        str = "textforcolor"
      }
      let hash = 0
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
      }
      let color = "#"
      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff
        color += ("00" + value.toString(16)).substr(-2)
      }
      return color
      },
    async onRowDoubleClick(event) {
      this.$router.push(`/userrole/${event.userroleid}`)
    },
    async postDeleteRow(event) {
      event
    },
    async editRow(event) {
      this.$router.push(`/userrole/${event.userroleid}`)
    },
    async deleteRow(event) {
      this.loading = true
      this.$confirm.require({
        message: "Delete User Role?",
        header: "Delete",
        icon: "pi pi-exclamation-triangle",
        accept: async () => {
          let complete = await this.deleteRecord(event.userroleid)
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
