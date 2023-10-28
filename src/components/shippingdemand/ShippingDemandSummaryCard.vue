<template>
  <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
    <div
      class="card accordion"
      :id="'demandCard' + shippingdemand.shippingdemandid"
    >
      <div class="card-header text-start">
        <div class="row">
          <div class="col-10 headericon">
            <i class="fas fa-pallet fa-fw fa-2x me-3"></i>

            <div class="d-inline-block">
              <h5 class="d-inline">Demand</h5>
              <br />
              <h6>#{{ shippingdemand.shippingdemandid }}</h6>
            </div>
          </div>
          <div class="col-2 p-0 justify-content-top text-end">
            <span
              class="accordion-button withOptionsButton"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="
                '#collapseDemand' + shippingdemand.shippingdemandid
              "
              aria-expanded="true"
              :aria-controls="
                '#collapseDemand' + shippingdemand.shippingdemandid
              "
              >&nbsp;</span
            >

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
                <a class="dropdown-item" @click="editRow(slotProps.data)"
                  >Edit</a
                >
                <a class="dropdown-item" @click="deleteRow(slotProps.data)"
                  >Delete</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        :id="'collapseDemand' + shippingdemand.shippingdemandid"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        :data-bs-parent="'#demandCard' + shippingdemand.shippingdemandid"
      >
        <div class="card-body hrTop">
          <hr class="text-success hrStatus" />
          <div class="row mb-3">
            <div class="col-12 mb-3 text-center">
              <ShippingDemandStatusSelect
                :propStatus="shippingdemand.demandstatus"
                error=""
                :disabled="true"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-2">
              <i
                class="fas fa-calendar-alt fa-fw pe-2 align-middle text-primary"
              ></i>
            </div>
            <div class="col-10">
              {{ shippingdemand?.requiredshipdate?.split(" ")[0] }}
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-2">
              <i class="fas fa-clock fa-fw pe-2 align-middle text-primary"></i>
            </div>
            <div class="col-10">
              {{ shippingdemand?.requiredshipdate?.split(" ")[1] }}
            </div>
          </div>

          <hr />

          <div class="row mb-3">
            <div class="col-3">
              <i
                class="fas fa-pencil-ruler fa-fw me-2 align-middle text-primary"
              ></i>
              <i
                class="fas fa-calendar-alt fa-fw pe-2 align-middle text-primary"
              ></i>
            </div>
            <div class="col-9">
              {{ shippingdemand?.plannedshipdate?.split(" ")[0] }}
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-3">
              <i
                class="fas fa-pencil-ruler fa-fw me-2 align-middle text-primary"
              ></i>
              <i class="fas fa-clock fa-fw pe-2 align-middle text-primary"></i>
            </div>
            <div class="col-9">
              {{ shippingdemand?.plannedshipdate?.split(" ")[1] }}
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-3">
              <i
                class="fas fa-pencil-ruler fa-fw me-2 align-middle text-primary"
              ></i>
              <i class="fas fa-truck fa-fw pe-2 align-middle text-primary"></i>
            </div>
            <div class="col-9">Transport Method</div>
          </div>

          <div class="row mb-3">
            <div class="col-3">
              <i
                class="fas fa-pencil-ruler fa-fw me-2 align-middle text-primary"
              ></i>
              <i class="fas fa-list fa-fw pe-2 align-middle text-primary"></i>
            </div>
            <div class="col-9">Demand line count</div>
          </div>

          <hr />

          <div class="row mb-3">
            <div class="col-2">
              <i
                class="fas fa-map-marker-alt fa-fw me-2 align-middle text-primary"
              ></i>
            </div>
            <div class="col-10">
              {{ shippingdemand.customername
              }}<br v-if="shippingdemand?.customername" />
              {{ shippingdemand.addressname
              }}<br v-if="shippingdemand?.addressname" />
              {{ shippingdemand.addresstown
              }}<br v-if="shippingdemand?.addresstown" />
              {{ shippingdemand.addresspostcode }}
            </div>
          </div>

          <div class="row mb-3 text-center">
            <div class="col-12">
              <button
                type="button"
                class="btn btn-soft-primary btn-sm w-50 mx-auto"
                @click="$emit('editRow', shippingdemand)"
              >
                <i class="fa fa-box-open me-1"></i> View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShippingDemandStatusSelect from "./ShippingDemandStatusSelect";

export default {
  name: "ShippingDemandSummaryCard",
  components: {
    ShippingDemandStatusSelect,
  },
  props: {
    shippingdemand: {
      default: {},
    },
  },
  data() {
    return {};
  },
  methods: {
    add() {
      this.$refs.ShippingDemandLineGrid.add();
    },
  },
};
</script>

<style scoped></style>
