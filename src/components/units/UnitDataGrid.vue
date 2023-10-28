<template>
  <div class="row">
    <div class="col-0"></div>
    <div class="col-12 searchbar">
      <div class="input-group">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search..."
          class="gridjs-input gridjs-search-input"
          v-on:keyup.enter="search"
          v-model="searchValue"
        />
        <button
          type="button"
          @click="search"
          v-on:keyup.enter="search"
          class="btn btn-primary w-md form-control-lg"
        >
          Search
        </button>
      </div>
    </div>
    <div class="col-0"></div>
  </div>

  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="UnitGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="UnitGridv"
        :instanceid="0"
        deleteText="Delete Unit?"
        dataKey="unitid"
        store="unit"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #metric>
              <div v-if="parseInt(slotProps.data[slotProps.field]) === 1">
                <i class="pi pi-check green"></i>
              </div>
              <div v-if="parseInt(slotProps.data[slotProps.field]) !== 1">
                <i class="pi pi-times red"></i>
              </div>
            </template>
            <template #baseunit>
              <div v-if="parseInt(slotProps.data[slotProps.field]) === 1">
                <i class="pi pi-check green"></i>
              </div>
              <div v-if="parseInt(slotProps.data[slotProps.field]) !== 1">
                <i class="pi pi-times red"></i>
              </div>
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
import UnitMixin from "./UnitMixin.js"

export default {
  name: "UnitDataGrid",
  mixins: [UnitMixin],
  components: {
    dataGrid,
    VSwitch,
  },
  methods: {
    async search(enteredSearchValue) {
      if (this.searchValue) {
        this.searhValue = enteredSearchValue
        this.$refs.UnitGrid.setQueryParams(
          await this.setSearchCriteria(this.searhValue)
        )
      } else {
        this.$refs.UnitGrid.setQueryParams()
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

.green {
  color: green;
}
.red {
  color: red;
}
</style>
