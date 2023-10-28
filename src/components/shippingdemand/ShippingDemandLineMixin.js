import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"

export default {
  methods: {
    postSaveRow() {
      this.search()
    },
    async onRowDoubleClick(event) {
      console.log(event)
      this.edit(event.shippingdemandlineid)
    },
    async editRow(event) {
      this.edit(event.shippingdemandlineid)
    },
    setLimitQuery() {
      let queryobject = new queryObject()
      queryobject.addCriteria({
        field: "shippingdemandline.shippingdemandid",
        value: this.shippingdemandid,
        operator: operatorType.equals,
      })

      return queryobject.getQueryParams()
    },
    async postDeleteRow(event) {
      event
    },
  },
  data() {
    return {
      searchValue: null,
      modalVisible: false,
      store: "shippingdemandline",
      dataGridRef: "ShippingDemandLineDataGrid",
      deleteText: "Delete Line?",
      defaultRecord: {
        shippingdemandid: this.shippingdemandid,
        shippingdemandlineid: 0,
      },
    }
  },
}