<template>
  <div>
    <Search @search="search" />
    <CardGridBase store="unit" datakey="unitid" ref="unitCardGrid">
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
                >
                  <i class="fas fa-ellipsis-h fa-fw fa-125x black"></i>
                </a>
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
              <div class="mt-3 pt-1">
               {{slotProps.data}}
              </div>

              <div class="d-flex pt-4 text-center">
                <a
                  type="button"
                  class="btn btn-soft-primary btn-sm w-50 mx-auto"
                  @click="editRow(slotProps.data)"
                >
                  <i class=" me-1"></i> Unit
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
import CardGridBase from "../../components/cardgrid/CardGridBase"
import UnitMixin from "./UnitMixin.js"

export default {
  name: "UnitCardGrid",
  mixins: [UnitMixin],
  components: {
    CardGridBase,
  },
}
</script>
