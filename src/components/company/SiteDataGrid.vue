<template>
  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="siteGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="siteGridv"
        :instanceid="0"
        deleteText="Delete Site?"
        dataKey="siteid"
        store="site"
        :limitQuery="setLimitQuery()"
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
import SiteMixin from "./SiteMixin.js"

export default {
  name: "SiteDataGrid",
  mixins: [SiteMixin],
  components: {
    dataGrid,
    VSwitch,
  },
  props: {
    companyid: {
      default: null,
    },
  },
}
</script>

<style scoped>
.searchbar {
  margin: 0 auto;
}

.input-group {
  justify-content: center;
  align-items: center;
}

.input-group input {
  border-radius: 0.75em 0 0 0.75em;
}

::v-deep(.input-group .btn) {
  border-radius: 0 0.75em 0.75em 0 !important;
}
</style>
