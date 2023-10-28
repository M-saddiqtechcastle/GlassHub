<template>
  <div>
    <div class="row">
      <slot
        name="main"
        :data="item"
        v-for="item in getData"
        :key="item[datakey]"
      >
      </slot>
    </div>

    <div class="row align-items-center pb-4">
      <div class="col-12">
        <Paginator
          :rows="12"
          :totalRecords="getTotal"
          @page="onPage($event)"
          class="p-cardGridPaginator"
        ></Paginator>
      </div>
    </div>
  </div>
</template>

<script>
import Paginator from "primevue/paginator"

export default {
  name: "CardGridBase",
  components: {
    Paginator,
  },
  props: {
    store: {
      default: "userrole",
    },
    datakey: {
      default: "userroleid",
    },
    deleteText: String,
    limitQuery: {},
  },
  async mounted() {
    this.onPage({ page: 0 })
  },
  computed: {
    getData: {
      get() {
        return this.$store.getters[this.store + "/getData"]
      },
    },
    getTotal: {
      get() {
        return this.$store.getters[this.store + "/getTotal"]
      },
    },
    getPage: {
      get() {
        return this.$store.getters[this.store + "/getPage"]
      },
    },
  },
  methods: {
    onDelete(event, id) {
      this.$confirm.require({
        message: "Delete User?",
        header: "Delete",
        icon: "pi pi-exclamation-triangle",
        accept: async () => {
          let complete = await this.$store.dispatch(`user/delete`, {
            id: id,
          })
          if (complete) {
            this.$toast.add({
              severity: "success",
              summary: "Confirmed",
              detail: "Deleted",
              life: 3000,
            })
            this.onPage({ page: this.getPage })
          }
        },
        reject: () => {
          // do nothing
        },
      })
    },
    async onPage(event) {
      this.$store.dispatch("application/setLoading", true)

      let queryparams = this.lazyParams.queryparams
      if (this.limitQuery) {
        // todo add loop through groups and append limit query
        queryparams = this.limitQuery
      }

      await this.$store.dispatch(`${this.store}/fetch`, {
        page: event.page + 1,
        rp: 12,
        sortname: "",
        sortorder: "",
        queryparams: queryparams ?? [],
      })
      this.$store.dispatch("application/setLoading", false)
    },
    async setQueryParams(inputqueryparams) {
      this.loading = true
      this.lazyParams.queryparams = inputqueryparams
      this.onPage({ page: 0 })
    },
  },
  data() {
    return {
      lazyParams: {},
    }
  },
}
</script>
