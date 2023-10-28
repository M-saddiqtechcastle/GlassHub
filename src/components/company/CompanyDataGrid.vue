<template>
  <Search @search="search" />

  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="UnitGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="CompanyGridv"
        :instanceid="0"
        deleteText="Delete Company?"
        dataKey="companyid"
        store="company"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #default>
              <div>{{ slotProps.data[slotProps.field] }}</div>
            </template>
          </v-switch>
        </template>
      </dataGrid>
    </div>
  </div>
</template>

<script>
import dataGrid from "../datagrid/DataGridWrapper"
import VSwitch from "@lmiller1990/v-switch"
import CompanyMixin from "./CompanyMixin.js"

export default {
  name: "CompanyDataGrid",
  mixins:[CompanyMixin],
  components: {
    dataGrid,
    VSwitch,
  },

  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        this.$refs.UnitGrid.setQueryParams(
          await this.setSearchCriteria(this.searchValue)
        )
      } else {
        this.$refs.UnitGrid.setQueryParams()
      }
    },
  },
}
</script>

<style scoped></style>
