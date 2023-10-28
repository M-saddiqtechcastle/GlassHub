<template>
  <div class="row">
    <RecordFinder
      :limitDisplayCols="['menuid', 'description']"
      @handleSelection="selectMenu"
      title="Select Menu"
      store="menu"
      gridid="menurecordfinder"
      dataKey="menuid"
      ref="menuRecordFinder"
      :showButton="false"
    />
    <div class="col-6 align-content-end">
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
    <div class="col-6 text-end">
      <button @click="addFeature" class="btn addBtn">
        <i class="bx bx-plus me-1"></i> Add Feature
      </button>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="featureGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="featureGridv"
        :instanceid="0"
        deleteText="Delete Feature?"
        dataKey="featureid"
        store="feature"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #linkedroles>
              <!-- if userroleid is in list then show unlink button else link button -->
              <div>
                <button
                  class="btn btn-danger"
                  type="button"
                  v-if="isLinked(slotProps) > 0"
                  :data-id="isLinked(slotProps)"
                  @click="unlinkRole"
                >
                  Unlinked
                </button>
                <button
                  class="btn btn-success"
                  type="button"
                  v-if="isLinked(slotProps) === 0"
                  @click="linkRole(slotProps.data.featureid)"
                >
                  Link
                </button>
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
import { h } from "vue";
import Button from "primevue/button";
import RecordFinder from "../recordfinder/RecordFinder";
import dataGrid from "../datagrid/DataGridWrapper";
import queryObject from "../../common/queryObject";
import { operatorType } from "../../common/queryObject";
import VSwitch from "@lmiller1990/v-switch";
import FeatureDialog from "./FeatureDialog";

export default {
  name: "FeatureDataGrid",
  components: {
    dataGrid,
    VSwitch,
    RecordFinder,
  },
  props: {
    userroleid: {
      default: 0,
    },
  },
  methods: {
    async saveCurrentRecord(currentRecord) {
      this.$store.dispatch("application/setLoading", true);

      let response;
      if (parseInt(currentRecord.featureid) === 0) {
        response = await this.$store.dispatch("feature/add", currentRecord);
      } else {
        response = await this.$store.dispatch("feature/update", currentRecord);
      }

      if (response.errors.length === 0) {
        this.errors = {};
        this.$toast.add({
          severity: "success",
          summary: "Updated",
          detail: "Feature Updated",
          life: 3000,
        });
        this.$store.dispatch("application/setLoading", false);
        this.$refs.featureGrid.loadLazyData();
        return true;
      } else {
        this.$store.dispatch("application/setLoading", false);
        return false;
      }
    },
    addFeature() {
      this.$store.dispatch("application/setLoading", true);
      let thisObject = this;
      this.$store.commit("feature/setErrors", {});

      let defaultRecord = {
        featuretype: 0, // default core
        featureid: 0, // new record
        featureaccesstype: 2, // default manager
      };
      this.$store.commit("feature/setCurrentRecord", defaultRecord);

      const dialogRef = this.$dialog.open(FeatureDialog, {
        props: {
          header: `Feature`,
          style: {
            width: "50vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
        },
        modal: true,
        templates: {
          footer: () => {
            return [
              h(Button, {
                label: "Cancel",
                icon: "pi pi-times",
                class: "p-button-danger",
                onClick: () => dialogRef.close(),
                autofocus: false,
              }),
              h(Button, {
                label: "Save",
                icon: "pi pi-check",
                onClick: async () => {
                  if (
                    await thisObject.saveCurrentRecord(
                      this.$store.getters["feature/getCurrentRecord"]
                    )
                  ) {
                    dialogRef.close();
                  }
                },
                autofocus: true,
              }),
            ];
          },
        },
        onClose: (options) => {
          options;
        },
        handleSelection(event) {
          thisObject.$emit("handleSelection", event);
          this.close;
        },
      });
      this.$store.dispatch("application/setLoading", false);
    },
    editFeature(id) {
      this.$store.dispatch("application/setLoading", true);
      let thisObject = this;
      this.$store.commit("feature/setErrors", {});

      let Record = this.$store.dispatch("feature/FetchById", id);
      this.$store.commit("feature/setCurrentRecord", Record);

      const dialogRef = this.$dialog.open(FeatureDialog, {
        props: {
          header: `Feature`,
          style: {
            width: "50vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
        },
        modal: true,
        templates: {
          footer: () => {
            return [
              h(Button, {
                label: "Cancel",
                icon: "pi pi-times",
                class: "p-button-danger",
                onClick: () => dialogRef.close(),
                autofocus: false,
              }),
              h(Button, {
                label: "Save",
                icon: "pi pi-check",
                onClick: async () => {
                  if (
                    await thisObject.saveCurrentRecord(
                      this.$store.getters["feature/getCurrentRecord"]
                    )
                  ) {
                    dialogRef.close();
                  }
                },
                autofocus: true,
              }),
            ];
          },
        },
        onClose: (options) => {
          options;
        },
        handleSelection(event) {
          thisObject.$emit("handleSelection", event);
          this.close;
        },
      });
      this.$store.dispatch("application/setLoading", false);
    },
    async search() {
      if (this.searchValue) {
        let queryobject = await new queryObject();
        queryobject.addCriteria({
          field: "featurename",
          value: this.searchValue,
          operator: operatorType.like,
        });

        queryobject.addCriteria({
          field: "featureid",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        queryobject.addCriteria({
          field: "filepath",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        queryobject.addCriteria({
          field: "featuredescription",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        this.$refs.featureGrid.setQueryParams(queryobject.getQueryParams());
      } else {
        this.$refs.featureGrid.setQueryParams();
      }
    },
    async onRowDoubleClick(event) {
      this.editFeature(event.featureid);
    },
    async postDeleteRow(event) {
      event;
    },
    async editRow(event) {
      this.editFeature(event.featureid);
    },
    async selectMenu(menuRecord) {
      await this.$store.dispatch("userrolefeature/add", {
        featureid: this.linkfeatureid,
        userroleid: this.userroleid,
        menuid: menuRecord.menuid,
      });
      this.$refs.featureGrid.loadLazyData();
    },
    async linkRole(featureid) {
      this.linkfeatureid = featureid;
      this.$refs.menuRecordFinder.showFinder();
    },
    async unlinkRole(event) {
      await this.$store.dispatch("userrolefeature/delete", {
        id: event.target.dataset.id,
      });
      this.$refs.featureGrid.loadLazyData();
    },
    isLinked(role) {
      if (role.data.linkedroles) {
        let foundRole = role.data.linkedroles.filter((linkedrole) => {
          return parseInt(linkedrole.userroleid) === parseInt(this.userroleid);
        });

        if (foundRole.length > 0) {
          return foundRole[0].userrolefeatureid;
        }
      }
      return 0;
    },
  },
  data() {
    return {
      searchValue: null,
      linkfeatureid: Number,
    };
  },
};
</script>
