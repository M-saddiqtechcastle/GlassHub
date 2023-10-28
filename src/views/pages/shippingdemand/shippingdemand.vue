<template>
  <Layout :pagetitle="'Shipping Demand'">
    <div class="row align-items-center pt-4">
      <div class="col-md-12">
        <div class="mb-3">
          <NavigationButtons
            @add="add"
            @save="save"
            @cancel="cancel"
            @setPageMode="setPageMode"
            :store="store"
            :pageMode="pageMode"
          />
        </div>
      </div>
      <!-- content-->
      <div class="container-fluid">
        <ShippingDemandCard :pageMode="pageMode" />
      </div>
    </div>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js"
import PageCrudMixin from "../../../common/PageCrudMixin.js"
import NavigationButtons from "../../../components/page/NavigationButtons"
import ShippingDemandCard from "../../../components/shippingdemand/ShippingDemandCard"

export default {
  name: "shippingdemand",
  mixins: [pageMixin, PageCrudMixin],
  components: {
    NavigationButtons,
    ShippingDemandCard,
  },
  data() {
    return {
      store: "shippingdemand",
      dataGridRef: "ShippingDemandDataGrid",
      defaultRecord: {
        shippingdemandid: 0,
        siteid: 0,
        demandstatus: 0,
        //requiredshipdate,
        shippingdemandnum: 0,
        addressoverridden: 0,
      },
      addPage: "shippingdemand",
    }
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters[this.store + "/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit(this.store + "/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters[this.store + "/getErrors"]
      },
    },
    pageMode: {
      get() {
        return this.$store.getters[this.store + "/getPageMode"]
      },
    },
  },
  async created() {
    if (parseInt(this.$route.params.shippingdemandid) === 0) {
      this.$store.commit(this.store + "/setPageMode", "add")
      this.currentRecord = this.defaultRecord
    }
    if (parseInt(this.$route.params.shippingdemandid) > 0) {
      this.$store.commit(this.store + "/setPageMode", "view")
      await this.$store.dispatch(
        this.store + "/FetchById",
        parseInt(this.$route.params.shippingdemandid)
      )
    }
  },
}
</script>

<style scoped></style>
