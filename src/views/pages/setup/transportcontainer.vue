<template>
  <Layout :pagetitle="'Transport Container'">
    <div class="row align-items-center">
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
        <TransportContainerCard :pageMode="pageMode" />
      </div>
      <hr />
    </div>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js"
import PageCrudMixin from "../../../common/PageCrudMixin.js"
import NavigationButtons from "../../../components/page/NavigationButtons"
import TransportContainerCard from "../../../components/transportcontainers/TransportContainerCard"

export default {
  name: "transportcontainer",
  mixins: [pageMixin, PageCrudMixin],
  components: {
    NavigationButtons,
    TransportContainerCard,
  },
  data() {
    return {
      store: "transportcontainer",
      dataGridRef: "TransportContainerDataGrid",
      defaultRecord: {
        transportcontainerid: 0,
      },
      addPage: "transportcontainer",
    }
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters[this.store+"/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit(this.store+"/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters[this.store+"/getErrors"]
      },
    },
    pageMode: {
      get() {
        return this.$store.getters[this.store+"/getPageMode"]
      },
    },
  },
  async created() {
    if (parseInt(this.$route.params.transportcontainerid) === 0) {
      this.$store.commit(this.store+"/setPageMode", "add")
      this.currentRecord = this.defaultRecord
    }
    if (parseInt(this.$route.params.transportcontainerid) > 0) {
      this.$store.commit(this.store+"/setPageMode", "view")
      await this.$store.dispatch(
        this.store+"/FetchById",
        parseInt(this.$route.params.transportcontainerid)
      )
    }
  },
}
</script>

<style scoped></style>
