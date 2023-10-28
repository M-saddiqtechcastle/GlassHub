<template>
  <div class="col-12 col-sm-6 col-lg-4 col-xl-3 ">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-2"><i class="fas fa-box-open fa-fw fa-15x"></i></div>
          <div class="col-8 text-start">
            <h5>{{ shippingdemandline.code }}</h5>
          </div>
          <div class="col-2">
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
                <a
                  class="dropdown-item"
                  @click="$emit('editRow', shippingdemandline)"
                  >View Details</a
                >
                <a
                  class="dropdown-item"
                  @click="$emit('deleteRow', shippingdemandline)"
                  >Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body hrTop">
        <hr />
        <div class="row mb-3">
          <div class="col-2">
            <i class="far fa-file-alt fa-fw pe-2 align-middle text-primary"></i>
          </div>
          <div class="col-10">
            {{ shippingdemandline.description }}
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2">
            <i
              class="fas fa-calendar-alt fa-fw pe-2 align-middle text-primary"
            ></i>
          </div>
          <div class="col-10">
            {{ shippingdemandline.requiredshipdate.split(" ")[0] }}
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2">
            <i class="fas fa-clock fa-fw pe-2 align-middle text-primary"></i>
          </div>
          <div class="col-10">
            {{ shippingdemandline.requiredshipdate.split(" ")[1] }}
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2">
            <i class="fas fa-coins fa-fw pe-2 align-middle text-primary"></i>
          </div>
          <div class="col-10">
            {{ formatNumber(shippingdemandline.plannedqty) }} /
            {{ formatNumber(shippingdemandline.shippingdemandqty) }}
          </div>
        </div>

        <div class="row mb-3 text-center">
          <div class="col-12">
            <button
              type="button"
              class="btn btn-soft-primary btn-sm w-50 mx-auto"
              @click="$emit('editRow', shippingdemandline)"
            >
              <i class="fa fa-box-open me-1"></i> View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingDemandLineSummaryCard",
  props: {
    shippingdemandline: {
      default: {},
    },
  },

  methods: {
    formatNumber(num) {
      return parseFloat(num).toFixed(2);
    },
  },
};
</script>
