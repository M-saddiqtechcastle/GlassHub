import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"
import Search from "../page/Search"

export default {
  components: { Search },
  methods: {
    async setSearchCriteria(enteredSearchValue) {
      let queryobject = await new queryObject()
      queryobject.addCriteria({
        field: "description",
        value: enteredSearchValue,
        operator: operatorType.like,
      })

      queryobject.addCriteria({
        field: "menuid",
        value: enteredSearchValue,
        operator: operatorType.equals,
        group: queryobject.addCriteriaGroup(),
      })

      return queryobject.getQueryParams()
    },
    async onRowDoubleClick(event) {
      this.$emit("onRowDoubleClick", event.menuid) // push to parent to handle
    },
    async postDeleteRow(event) {
      event
    },
    async editRow(event) {
      this.$emit("onRowDoubleClick", event.menuid) // push to parent to handle
    },
  },
  data() {
    return {
      searchValue: null,
    }
  },
}
