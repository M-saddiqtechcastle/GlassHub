
<template>
  

  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="userGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="shippingdemandGridv"
        :instanceid="0"
        deleteText= "Delete User?"
        dataKey="shippingdemandid"
        store="shippingdemand"
        :limitDisplayCols="['siteid', 'shippingdemandid']"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #status>
              <div class="btn btn-success btn-sm" v-if="slotProps.data.status === '1'">
                Active
              </div>
              <div class="btn btn-danger btn-sm" v-if="slotProps.data.status === '0'">
                Inactive
              </div>
            </template>
            <template #userrolename>
              <div
                :style="{
                  background: this.stringToColor(slotProps.data[slotProps.field]),
                  opacity: 0.6,
                }"
                class="badge badge-soft mb-0"
              >
                {{ slotProps.data[slotProps.field] }}
              </div>
            </template>
            <template #username>
              <Avatar
                :label="slotProps.data.username.charAt(0).toUpperCase()+slotProps.data.userlastname.charAt(0).toUpperCase()"
                shape="circle"
                class="text-white"
                :style="{
                  'background-color':'#'+slotProps.data.avatarcolor,
                  opacity: 0.6,
                }"
              />
              {{ slotProps.data.username }} {{ slotProps.data.userlastname }}
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
import dataGrid from "../datagrid/DataGridWrapper";
import queryObject from "../../common/queryObject";
import { operatorType } from "../../common/queryObject";
import VSwitch from "@lmiller1990/v-switch";
import Avatar from "primevue/avatar";

export default {
  name: "UserDataGrid",
  components: {
    dataGrid,
    VSwitch,
    Avatar,
  },

  methods: {
    stringToColor(str) {
      if (!str){
        str = "textforcolor";
      }
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = "#";
      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff;
        color += ("00" + value.toString(16)).substr(-2);
      }
      return color;
    },
    async searchUsers() {
      if (this.searchValue) {
        let queryobject = await new queryObject();
        queryobject.addCriteria({
          field: "email",
          value: this.searchValue,
          operator: operatorType.like,
        });

        queryobject.addCriteria({
          field: "username",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        queryobject.addCriteria({
          field: "userlastname",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        this.$refs.userGrid.setQueryParams(queryobject.getQueryParams());
      } else {
        this.$refs.userGrid.setQueryParams();
      }
    },
    async onRowDoubleClick(event) {
      this.$router.push(`/user/${event.userid}`);
    },
    async postDeleteRow(event) {
      event;
    },
    async editRow(event) {
      this.$router.push(`/user/${event.userid}`);
    },
  },
  data() {
    return {
      searchValue: null,
    };
  },
};
</script>

<style scoped>

.searchbar {
  margin: 0 auto;
}

.input-group {
  justify-content: center;
  align-items: center;
}

.input-group input{
  border-radius: 0.75em 0 0 0.75em;
}

:deep(.input-group .btn) {
  border-radius: 0 0.75em 0.75em 0 !important;
}

:deep(.p-datatable .p-paginator-bottom) {
  border: 0px !important;
}


</style>
