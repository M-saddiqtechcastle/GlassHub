<template>
  <Search @search="search" />
  <CardGridBase store="company" datakey="companyid" ref="companyCardGrid">
    <template v-slot:main="slotProps">
      <div class="col-lg-6 col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="dropdown float-end">
              <a
                class="text-muted dropdown-toggle font-size-16"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                ><i class="bx bx-dots-horizontal-rounded"></i
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
                <i class="fas fa-city fa-fw fa-2x"></i>
              </div>
              <div class="flex-1 ms-3">
                <h4>{{ slotProps.data.companyname }}</h4>
              </div>
            </div>
            <hr />
            <div class="mt-3 pt-1">
              <div class="row mb-3">
                <div class="col-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fas fa-building fa-fw fa-125x pe-2 align-middle text-primary"
                      ></i>
                    </div>
                    <div class="col-10">
                      <div>
                        <!-- todo sort this count -->
                        Dronfield<br />
                        Sheffield<br />
                        Leeds<br />
                        Nottingham<br />
                        Derby
                      </div>
                      <div>+ 5 more...</div>
                    </div>
                  </div>
                </div>
                <div class="col-6">Logo</div>
              </div>
            </div>
            <div class="d-flex">
              <button
                type="button"
                class="btn btn-soft-primary btn-sm w-50 mx-auto"
                @click="editRow(slotProps.data)"
              >
                <i class="fas fa-city fa-fw me-1"></i> View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </CardGridBase>
</template>
<script>
import CompanyMixin from "./CompanyMixin.js"
import CardGridBase from "../../components/cardgrid/CardGridBase"

export default {
  name: "CompanyCardGrid",
  mixins: [CompanyMixin],
  components: {
    CardGridBase,
  },
  methods: {
    async search(enteredSearchValue) {
      this.searchValue = enteredSearchValue
      if (this.searchValue) {
        this.$refs.companyCardGrid.setQueryParams(
          await this.setSearchCriteria(this.searchValue)
        )
      } else {
        this.$refs.companyCardGrid.setQueryParams()
      }
    },
  },
}
</script>
