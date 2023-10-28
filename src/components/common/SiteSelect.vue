<template>
  <div class="select-group">
    <label class="selectLabel" for="selectTest">Site</label>
    <MultiSelect
      :options="sitelist"
      v-model="selected"
      optionLabel="sitename"
      placeholder="Select Site(s)"
    />
  </div>
</template>
<script>
import MultiSelect from "primevue/multiselect"
import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"

export default {
  name: "SiteSelect",
  components: {
    MultiSelect,
  },
  props: {
    companyid: {
      default: 0,
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    sitelist: {
      get() {
        return this.$store.getters["site/getData"]
      },
      set(value) {
        this.$store.commit("site/setData", value)
      },
    },
  },
  watch: {
    async companyid() {
      this.loadSites()
    },
    async selected(){
      let currentRecord = this.$store.getters["user/getCurrentRecord"]
      let reducedArray = []

      this.selected.forEach((selectedSite)=>{
        reducedArray.push({siteid: selectedSite.siteid, companyid: selectedSite.companyid})
      })

      
      currentRecord.sites = reducedArray
      await this.$store.commit("user/setCurrentRecord", currentRecord)
    }
  },
  mounted() {
    this.loadSites()
  },
  methods: {
    async loadSites() {
      this.$store.dispatch("application/setLoading", true)
      let queryobject = await new queryObject()
      queryobject.addCriteria({
        field: "companyid",
        value: this.companyid,
        operator: operatorType.equals,
      })

      await this.$store.dispatch(`site/fetch`, {
        page: 1,
        rp: 999,
        sortname: "",
        sortorder: "",
        queryparams: queryobject.getQueryParams(),
      })

      this.selected = []
      let currentRecord = this.$store.getters["user/getCurrentRecord"]
      currentRecord.sites.forEach((linkedsite) => {
        let selectedSite = this.sitelist.find((site) => {
          return parseInt(site.siteid) === parseInt(linkedsite.siteid)
        })
        this.selected.push(selectedSite)
      })
      this.$store.dispatch("application/setLoading", false)
    },
  },
}
</script>
