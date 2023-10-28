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
        ref="TransportContainerGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="TransportContainerGridv"
        :instanceid="0"
        deleteText="Delete Container?"
        dataKey="transportcontainerid"
        store="transportcontainer"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #length>
              <div>
                <unitInput
                  v-model="slotProps.data[slotProps.field]"
                  label=""
                  error=""
                  displayUnitType="largelengthunit"
                  :readonly="true"
                />
              </div>
            </template>
            <template #width>
              <div>
                <unitInput
                  v-model="slotProps.data[slotProps.field]"
                  label=""
                  error=""
                  displayUnitType="largelengthunit"
                  :readonly="true"
                />
              </div>
            </template>
            <template #height>
              <div>
                <unitInput
                  v-model="slotProps.data[slotProps.field]"
                  label=""
                  error=""
                  displayUnitType="largelengthunit"
                  :readonly="true"
                />
              </div>
            </template>
            <template #weightlimit>
              <div>
                <unitInput
                  v-model="slotProps.data[slotProps.field]"
                  label=""
                  error=""
                  displayUnitType="largeweightunit"
                  :readonly="true"
                />
              </div>
            </template>
            <template #volume>
              <div>
                <unitInput
                  v-model="slotProps.data[slotProps.field]"
                  label=""
                  error=""
                  displayUnitType="volumeunit"
                  :readonly="true"
                />
              </div>
            </template>
            <template #containertype>
              <div>
               {{ slotProps.data[slotProps.field] }}
               image here
              </div>
            </template>
            <template #iconid>
              <div>
               <icon :iconid="iconid" />
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
import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"
import VSwitch from "@lmiller1990/v-switch"
import unitInput from "../form/input/UnitInput"
import icon from "../Icon"

export default {
  name: "CompanyDataGrid",
  components: {
    dataGrid,
    VSwitch,
    unitInput,
    icon,
  },

  methods: {
    async search() {
      if (this.searchValue) {
        let queryobject = await new queryObject()
        queryobject.addCriteria({
          field: "containername",
          value: this.searchValue,
          operator: operatorType.like,
        })

        queryobject.addCriteria({
          field: "linkcode",
          value: this.searchValue,
          operator: operatorType.like,
        })

        // containertype

        queryobject.addCriteria({
          field: "transportcontainerid",
          value: this.searchValue,
          operator: operatorType.equals,
          group: queryobject.addCriteriaGroup(),
        })

        this.$refs.TransportContainerGrid.setQueryParams(
          queryobject.getQueryParams()
        )
      } else {
        this.$refs.TransportContainerGrid.setQueryParams()
      }
    },
    async onRowDoubleClick(event) {
      this.$emit("onRowDoubleClick", event.transportcontainerid) // push to parent to handle
    },
    async postDeleteRow(event) {
      event
    },
    async editRow(event) {
      this.$emit("onRowDoubleClick", event.transportcontainerid) // push to parent to handle
    },
  },
  data() {
    return {
      searchValue: null,
    }
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
