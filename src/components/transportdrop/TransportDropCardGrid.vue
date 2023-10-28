<template>
  <div class="row mb-4">
    <div class="col-3"></div>
    <div class="col-6 searchbar">
      <div class="input-group">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search..."
          class="form-control"
          v-on:keyup.enter="searchUsers"
          v-model="searchValue"
        />
        <button
          type="button"
          @click="searchUsers"
          v-on:keyup.enter="searchUsers"
          class="btn btn-primary w-md"
        >
          Search
        </button>
      </div>
    </div>
    <div class="col-3"></div>
  </div>
  <div class="row">
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
              <a class="dropdown-item">Edit</a>
              <a class="dropdown-item">Delete</a>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div>
              <i class="fas fa-truck fa-fw fa-2x"></i>
            </div>
            <div class="flex-1 ms-3">
              <h5>#3151815</h5>
              Fedex
            </div>
          </div>
          <hr class="text-success hrStatus" />
          <div class="mt-3 pt-1">
            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-calendar-alt fa-fw pe-2 align-middle text-primary"
                ></i>
              </div>
              <div class="col-10">26/10/2022</div>
            </div>
            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-clock fa-fw pe-2 align-middle text-primary"
                ></i>
              </div>
              <div class="col-10">15:30</div>
            </div>
            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-parking fa-fw pe-2 align-middle text-primary"
                ></i>
              </div>
              <div class="col-10">Bay 2</div>
            </div>
            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-map-marker-alt fa-fw pe-2 align-middle text-primary"
                ></i>
              </div>
              <div class="col-10">Dronfield</div>
            </div>
            <div class="row mb-3 align-items-center">
              <div class="col-2">
                <i
                  class="fas fa-people-carry fa-fw pe-2 align-middle text-primary"
                ></i>
              </div>
              <div class="col-10">
                <div class="avatar-group">
                  <div class="avatar-group-item">
                    <a href="javascript: void(0);" class="d-inline-block"
                      ><div class="avatar-sm">
                        <span
                          class="avatar-title rounded-circle bg-danger text-white font-size-16"
                        >
                          AS
                        </span>
                      </div></a
                    >
                  </div>
                  <div class="avatar-group-item">
                    <a href="javascript: void(0);" class="d-inline-block"
                      ><div class="avatar-sm">
                        <span
                          class="avatar-title rounded-circle bg-warning text-white font-size-16"
                        >
                          SD
                        </span>
                      </div></a
                    >
                  </div>
                  <div class="avatar-group-item">
                    <a href="javascript: void(0);" class="d-inline-block"
                      ><div class="avatar-sm">
                        <span
                          class="avatar-title rounded-circle bg-success text-white font-size-16"
                        >
                          AG
                        </span>
                      </div></a
                    >
                  </div>
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
              <i class="fa fa-truck me-1"></i> View Details
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row align-items-center pb-4">
      <div class="col-12">
        <Paginator
          :rows="12"
          :totalRecords="getTotal"
          @page="onPage($event)"
          class="p-cardGridPaginator"
        ></Paginator>
      </div>
    </div>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import pageMixin from "../../common/pageMixin.js";
import Paginator from "primevue/paginator";

export default {
  page: {
    title: "Transport Planning",
    meta: [
      {
        name: "Transport Planning",
        content: appConfig.description,
      },
    ],
  },
  mixins: [pageMixin],
  components: {
    Paginator,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
