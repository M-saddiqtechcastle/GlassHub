<template>
  <div>
    <Search @search="search" />
    <CardGridBase store="menu" datakey="menuid" ref="menuCardGrid">
      <template v-slot:main="slotProps">
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-bars fa-fw fa-2x"></i>

                  <div class="d-inline-block">
                    <h5 class="d-inline">{{ slotProps.data.description }}</h5>
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
              <div class="mt-3 pt-1 text-center">
                <Icon
                  :iconid="slotProps.data.iconid"
                  :iconclass="darkbackground"
                  wrapperclass="DataCardIcon"
                />
              </div>

              <div class="d-flex py-3 text-center">
                <a
                  type="button"
                  class="btn btn-soft-primary btn-sm w-50 mx-auto"
                  @click="editRow(slotProps.data)"
                >
                  <i class="fas fa-info me-1"></i> Change Icon
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
import CardGridBase from "../../components/cardgrid/CardGridBase";
import MenuMixin from "./MenuMixin.js";
import Icon from "../Icon";

export default {
  name: "MenuCardGrid",
  mixins: [MenuMixin],
  components: {
    CardGridBase,
    Icon,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue;
      if (this.searchValue) {
        this.$refs.menuCardGrid.setQueryParams(
          await this.setSearchCriteria(this.searchValue)
        );
      } else {
        this.$refs.menuCardGrid.setQueryParams();
      }
    },
  },
};
</script>
