<template>
  <div class="row">
    <div class="col-1 col-sm-2 col-md-3 d-lg-none"></div>
    <div class="col-10 col-sm-8 col-md-6 col-lg-5 align-content-end mb-3">
      <div class="input-group">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search..."
          class="form-control"
          v-on:keyup.enter="search"
          v-model="searchValue"
        />
        <div class="input-group-append">
          <button
            type="button"
            @click="search"
            v-on:keyup.enter="search"
            class="btn btn-primary"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-1 col-sm-2 col-md-3 d-lg-none"></div>

    <div class="col-12 col-lg-7 pb-1">
      <ImportExportButtons text="Roles / Features" store="userrole" />
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="userRoleGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="userRoleGridv"
        :instanceid="0"
        deleteText="Delete User Role?"
        dataKey="userroleid"
        store="userrole"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #roleaccesstype>
              <div v-if="parseInt(slotProps.data[slotProps.field]) === 0">
                icon=0
                {{ slotProps.data[slotProps.field] }}
              </div>
              <div v-if="parseInt(slotProps.data[slotProps.field]) === 1">
                icon=1
                {{ slotProps.data[slotProps.field] }}
              </div>
            </template>

            <template #userrolename>
              <div
                :style="{
                  background: this.stringToColor(
                    slotProps.data[slotProps.field]
                  ),
                  opacity: 0.6,
                }"
                class="badge badge-soft mb-0"
              >
                {{ slotProps.data[slotProps.field] }}
              </div>
            </template>
            <template #default>
              <div>{{ slotProps.data[slotProps.field] }}</div>
            </template>
            <!-- needed to display base fields -->
          </v-switch>
        </template>
      </dataGrid>
    </div>
  </div>
</template>

<script>
import dataGrid from "../datagrid/DataGridWrapper"
import VSwitch from "@lmiller1990/v-switch"
import ImportExportButtons from "../page/ImportExportButtons"

export default {
  name: "UserDataGrid",
  components: {
    dataGrid,
    VSwitch,
    ImportExportButtons,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        this.$refs.userRoleGrid.setQueryParams(
          await this.setSearchCriteria(this.searchValue)
        )
      } else {
        this.$refs.userRoleGrid.setQueryParams()
      }
    },
  },
}
</script>

<style scoped></style>
