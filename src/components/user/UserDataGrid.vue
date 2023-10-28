<template>
  <Search @search="search" />
  <div class="row">
    <div class="col-lg-12">
      <dataGrid
        ref="userGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        gridid="userGridv"
        :instanceid="0"
        deleteText="Delete User?"
        dataKey="userid"
        store="user"
      >
        <template #body="slotProps">
          <v-switch :case="slotProps.field">
            <template #status>
              <div
                class="btn btn-success btn-sm"
                v-if="slotProps.data.status === '1'"
              >
                Active
              </div>
              <div
                class="btn btn-danger btn-sm"
                v-if="slotProps.data.status === '0'"
              >
                Inactive
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
            <template #username>
              <Avatar
                :label="
                  slotProps.data.username.charAt(0).toUpperCase() +
                  slotProps.data.userlastname.charAt(0).toUpperCase()
                "
                shape="circle"
                class="text-white"
                :style="{
                  'background-color': '#' + slotProps.data.avatarcolor,
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
import dataGrid from "../datagrid/DataGridWrapper"
import VSwitch from "@lmiller1990/v-switch"
import Avatar from "primevue/avatar"
import UserMixin from "./UserMixin.js"

export default {
  name: "UserDataGrid",
  mixins: [UserMixin],
  components: {
    dataGrid,
    VSwitch,
    Avatar,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        this.$refs.userGrid.setQueryParams(
          await this.setSearchCriteria(this.searchValue)
        )
      } else {
        this.$refs.userGrid.setQueryParams()
      }
    },
    postDeleteRow(){
      this.search(this.searchValue)
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
