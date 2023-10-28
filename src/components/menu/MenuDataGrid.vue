<template>
  <Search @search="search" />

  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="menuGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="menuGridv"
        :instanceid="0"
        deleteText="Delete Menu?"
        dataKey="menuid"
        store="menu"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #iconid>
              <Icon
                :iconid="slotProps.data[slotProps.field]"
                :iconclass="darkbackground"
                wrapperclass="DataGridIcon"
              />
            </template>
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
import Icon from "../Icon"
import MenuMixin from "./MenuMixin.js"

export default {
  name: "MenuDataGrid",
  mixins: [MenuMixin],
  components: {
    dataGrid,
    VSwitch,
    Icon,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        this.$refs.menuGrid.setQueryParams(
          await this.setSearchCriteria(this.searchValue)
        )
      } else {
        this.$refs.menuGrid.setQueryParams()
      }
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
