<template>
  <div>
    <Search @search="search">
      <template v-slot:additionalSearchTwo>
        <ImportExportButtons text="Roles / Features" store="userrole" />
      </template>
    </Search>
    <CardGridBase store="userrole" datakey="userroleid" ref="userRoleCardGrid">
      <template v-slot:main="slotProps">
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body">
              <div class="dropdown float-end">
                <a
                  class="text-muted dropdown-toggle font-size-16"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  ><i class="fas fa-ellipsis-h fa-fw fa-125x black"></i
                ></a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="editRow(slotProps.data)"
                    >Edit</a
                  >
                  <a class="dropdown-item" @click="deleteRow(slotProps.data)"
                    >Delete</a
                  >
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div>
                  <i class="fas fa-users-cog fa-fw fa-2x"></i>
                </div>
                <div class="flex-1 ms-3">
                  <h4>{{ slotProps.data.rolename }}</h4>
                </div>
              </div>
              <hr />
              <div class="mt-3 pt-1">
                <div
                  class="row mb-3"
                  v-if="
                    parseInt(slotProps.data.roleaccesstype) === 0 ||
                    parseInt(slotProps.data.roleaccesstype) === 1
                  "
                >
                  <div class="col-2">
                    <i
                      class="fas fa-mobile-alt fa-fw pe-2 align-middle text-primary"
                    ></i>
                  </div>
                  <div class="col-10">Scanner</div>
                </div>
                <div
                  class="row mb-3"
                  v-if="
                    parseInt(slotProps.data.roleaccesstype) === 0 ||
                    parseInt(slotProps.data.roleaccesstype) === 2
                  "
                >
                  <div class="col-2">
                    <i
                      class="fas fa-desktop fa-fw pe-2 align-middle text-primary"
                    ></i>
                  </div>
                  <div class="col-10">Manager</div>
                </div>
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-list-ul fa-fw pe-2 align-middle text-primary"
                    ></i>
                  </div>
                  <div class="col-10">
                    <div
                      v-for="value in slotProps.data.linkedfeatures.slice(0, 5)"
                      :key="value.userrolefeatureid"
                    >
                      {{ value.featurename }}<br />
                    </div>
                    <div
                      v-if="
                        numberOfMoreFeatureLinked(
                          slotProps.data.linkedfeatures
                        ) > 0
                      "
                    >
                      +
                      {{
                        numberOfMoreFeatureLinked(slotProps.data.linkedfeatures)
                      }}
                      more...
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button
                  type="button"
                  class="btn btn-soft-primary btn-sm w-50 mx-auto"
                  @click="editRow(slotProps.data)"
                >
                  <i class="bx bx-user me-1"></i> View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </CardGridBase>
  </div>
</template>

<script>
import ImportExportButtons from "../page/ImportExportButtons"
import CardGridBase from "../../components/cardgrid/CardGridBase"
import UserRoleMixin from "./UserRoleMixin.js"

export default {
  name: "UserDataGrid",
  mixins: [UserRoleMixin],
  components: {
    ImportExportButtons,
    CardGridBase,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        this.$refs.userRoleCardGrid.setQueryParams(
          await this.setSearchCriteria(enteredSearchValue)
        )
      } else {
        this.$refs.userRoleCardGrid.setQueryParams()
      }
    },
  }
}
</script>

<style scoped></style>
