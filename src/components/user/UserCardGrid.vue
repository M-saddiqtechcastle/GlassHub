<template>
  <div>
    <Search @search="search" />
    <CardGridBase store="user" datakey="userid" ref="userCardGrid">
      <template v-slot:main="slotProps">
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <Avatar
                    :label="
                      slotProps.data.username.charAt(0) +
                      slotProps.data.userlastname.charAt(0)
                    "
                    shape="circle"
                    size="large"
                  />

                  <div class="ms-3 d-inline-block">
                    <h5 class="d-inline">
                      {{
                        [
                          slotProps.data.username,
                          slotProps.data.userlastname,
                        ].join(" ")
                      }}
                    </h5>
                    <br />
                    <span class="badge badge-soft-success mb-0">{{
                      slotProps.data.userleveldesc
                    }}</span>
                  </div>
                </div>
                <div class="col-2 p-0 justify-content-top text-end">
                  <div class="dropdown">
                    <a
                      class="text-muted dropdown-toggle font-size-16"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      ><i class="fas fa-ellipsis-h fa-fw fa-125x black"></i
                    ></a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <button
                        class="dropdown-item"
                        @click="editRow(slotProps.data)"
                      >
                        Edit
                      </button>
                      <button
                        class="dropdown-item"
                        @click="deleteRow(slotProps.data)"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body hrTop">
              <hr />
              <div class="mt-3 pt-1">
                <p class="text-muted mb-0">
                  <i
                    class="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"
                  ></i>
                  {{ slotProps.data.phone || "N/A" }}
                </p>
                <p class="text-muted mb-0 mt-2">
                  <i
                    class="mdi mdi-email font-size-15 align-middle pe-2 text-primary"
                  ></i>
                  {{ slotProps.data.email }}
                </p>

                <p class="text-muted mb-0 mt-2">
                  <i
                    class="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"
                  ></i>
                  {{
                    [
                      slotProps.data.addressline1,
                      slotProps.data.addresstown,
                      slotProps.data.addresspostcode,
                    ].join(" ")
                  }}
                </p>
              </div>

              <div class="d-flex py-3 text-center">
                <a
                  type="button"
                  class="btn btn-soft-primary btn-sm w-50 mx-auto"
                  @click="editRow(slotProps.data)"
                >
                  <i class="bx bx-user me-1"></i> Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </CardGridBase>
  </div>
</template>

<script>
import Avatar from "primevue/avatar";
import UserMixin from "./UserMixin.js";
import CardGridBase from "../../components/cardgrid/CardGridBase";

export default {
  name: "UserCardGrid",
  mixins: [UserMixin],
  components: {
    Avatar,
    CardGridBase,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue;
      if (this.searchValue) {
        this.$refs.userCardGrid.setQueryParams(
          await this.setSearchCriteria(this.searchValue)
        );
      } else {
        this.$refs.userCardGrid.setQueryParams();
      }
    },
    postDeleteRow() {
      this.search(this.searchValue);
    },
  },
};
</script>
