import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"
import Search from "../page/Search"

export default {
  components: {
    Search,
  },
  methods: {
    setLimitQuery() {
      let queryobject = new queryObject()
      queryobject.addCriteria({
        field: "companyid",
        value: this.companyid,
        operator: operatorType.equals,
      })

      return queryobject.getQueryParams()
    },
    async setSearchCriteria(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      let queryobject = await new queryObject()
      queryobject.addCriteria({
        field: "sitename",
        value: this.searchValue,
        operator: operatorType.like,
      })

      queryobject.addCriteria({
        field: "postcode",
        value: this.searchValue,
        operator: operatorType.like,
      })

      queryobject.addCriteria({
        field: "addressline1",
        value: this.searchValue,
        operator: operatorType.like,
      })

      queryobject.addCriteria({
        field: "siteid",
        value: this.searchValue,
        operator: operatorType.equals,
        group: queryobject.addCriteriaGroup(),
      })

      return queryobject.getQueryParams()
    },
    async onRowDoubleClick(event) {
      this.$emit("onRowDoubleClick", event.siteid) // push to parent to handle
    },
    async postDeleteRow(event) {
      event
    },
    async editRow(event) { 
      this.$emit("edit", event.siteid) // push to parent to handle
    },
  },
  data() {
    return {
      searchValue: null,
    }
  },
}
