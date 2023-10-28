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
          v-on:keyup.enter="searchIcon"
          v-model="searchValue"
        />
        <button
          type="button"
          @click="searchIcon"
          v-on:keyup.enter="searchIcon"
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
        ref="iconGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="iconGridv"
        :instanceid="0"
        deleteText="Delete Icon?"
        dataKey="iconid"
        store="icon"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #icontags>
              <smart-tagz
                :sources="slotProps.data[slotProps.field].split(',')"
                :default-tags="slotProps.data[slotProps.field].split(',')"
                :allow-duplicates="false"
                readOnly
                :theme="{
                  primary: '#1A5190',
                  tagTextColor: '#fff',
                }"
              />
            </template>
            <template #icondata>
              <div
                class="darkbackground"
                v-html="slotProps.data[slotProps.field]"
              ></div>
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
import { SmartTagz } from "smart-tagz"
import "smart-tagz/dist/smart-tagz.css"
import queryObject from "../../common/queryObject";
import { operatorType } from "../../common/queryObject";

export default {
  name: "IconDataGrid",
  components: {
    dataGrid,
    VSwitch,
    SmartTagz,
  },

  methods: {
    async searchIcon() {
      if (this.searchValue) {
        let queryobject = await new queryObject();
        queryobject.addCriteria({
          field: "iconid",
          value: this.searchValue,
          operator: operatorType.like,
        });

        queryobject.addCriteria({
          field: "icondata",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        queryobject.addCriteria({
          field: "icontags",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        this.$refs.iconGrid.setQueryParams(queryobject.getQueryParams());
      } else {
        this.$refs.iconGrid.setQueryParams();
      }
    },
    async onRowDoubleClick(event) {
      this.$emit("onRowDoubleClick", event.iconid) // push to parent to handle
    },
    async editRow(event) {
      this.$emit("editRow", event.iconid) // push to parent to handle
    }
  },
}
</script>

<style scoped>
.darkbackground {
  fill: rgba(0, 0, 0, 0.6);
  text-align: center;
  min-width: 2.3em;
}

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
