import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"
import Search from "../page/Search"

export default {
  components: {
    Search,
  },
  mehtods: {
      async setSearchCriteria(enteredSearchValue) {
          this.searhValue = enteredSearchValue
          let queryobject = await new queryObject()
          queryobject.addCriteria({
            field: "unit",
            value: this.searchValue,
            operator: operatorType.like,
          })

          queryobject.addCriteria({
            field: "unitid",
            value: this.searchValue,
            operator: operatorType.equals,
            group: queryobject.addCriteriaGroup(),
          })
          return queryobject.getQueryParams()
    },
    async onRowDoubleClick(event) {
      this.$emit("onRowDoubleClick", event.unitid) // push to parent to handle
    },
    async postDeleteRow(event) {
      event
    },
    async editRow(event) {
      this.$emit("onRowDoubleClick", event.unitid) // push to parent to handle
    },
  },
  data() {
    return {
      searchValue: null,
    }
  },
}
