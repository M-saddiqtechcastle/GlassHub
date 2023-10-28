<template>
  <Layout :pagetitle="'Trailer Detail'">
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
        <TransportDropCard :pageMode="pageMode" />
      </div>

    </div>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js"
import PageCrudMixin from "../../../common/PageCrudMixin.js"
import NavigationButtons from "../../../components/page/NavigationButtons"
import TransportDropCard from "../../../components/transportdrop/TransportDropCard"

export default {
  name: "transportdrop",
  mixins: [pageMixin, PageCrudMixin],
  components: {
    NavigationButtons,
    TransportDropCard,
  },
  data() {
    return {
      store: "transportdrop",
      dataGridRef: "TransportDropDataGrid",
      defaultRecord: {
        transportdropid: 0,
      },
      addPage: "transportdrop",
    }
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["transportdrop/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("transportdrop/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["transportdrop/getErrors"]
      },
    },
    pageMode: {
      get() {
        return this.$store.getters["transportdrop/getPageMode"]
      },
    },
  },
  async created() {
    if (parseInt(this.$route.params.trailerid) === 0) {
      this.$store.commit("transportdrop/setPageMode", "add")
      this.currentRecord = this.defaultRecord
    }
    if (parseInt(this.$route.params.trailerid) > 0) {
      this.$store.commit("transportdrop/setPageMode", "view")
      await this.$store.dispatch(
        "transportdrop/FetchById",
        parseInt(this.$route.params.trailerid)
      )
    }
  },
}
</script>

<style scoped></style>
