<template>
  <CardGridBase
    store="site"
    datakey="siteid"
    ref="siteCardGrid"
    :limitQuery="setLimitQuery()"
  >
    <template v-slot:main="slotProps">
      <div class="col-6">
        <SiteSummaryCard :site="slotProps.data" @editRow="editRow" />
      </div>
    </template>
  </CardGridBase>
</template>
<script>
import SiteMixin from "./SiteMixin.js"
import SiteSummaryCard from "./SiteSummaryCard"
import CardGridBase from "../../components/cardgrid/CardGridBase"

export default {
  name: "SiteCardGrid",
  mixins: [SiteMixin],
  components: {
    CardGridBase,
    SiteSummaryCard,
  },
  props: {
    companyid: {
      default: null,
    },
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        this.$refs.siteCardGrid.setQueryParams(
          await this.setSearchCriteria(this.searchValue)
        )
      } else {
        this.$refs.compsiteCardGridanyCardGrid.setQueryParams()
      }
    },
    
  },
}
</script>
