import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"
import Search from "../page/Search"

export default {
  components: {
    Search,
  },
  methods: {
    async setSearchCriteria(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      let queryobject = await new queryObject()
      queryobject.addCriteria({
        field: "companyname",
        value: this.searchValue,
        operator: operatorType.like,
      })

      queryobject.addCriteria({
        field: "companyid",
        value: this.searchValue,
        operator: operatorType.equals,
        group: queryobject.addCriteriaGroup(),
      })

      return queryobject.getQueryParams()
    },
    async onRowDoubleClick(event) {
      this.$emit("onRowDoubleClick", event.companyid) // push to parent to handle
    },
    async postDeleteRow(event) {
      event
    },
    async editRow(event) {
      this.$emit("onRowDoubleClick", event.companyid) // push to parent to handle
    },
  },
  data() {
    return {
      searchValue: null,
    }
  },
}
