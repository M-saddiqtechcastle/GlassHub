<template>
  <div
    class="card accordion"
    :id="'demandLineCard' + shippingDemandGroupLine.shippingdemandlineid"
  >
    <div class="card-header text-start">
      <div class="p-0 justify-content-top text-end">
        <span
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="
            '#collapseDemandLine' + shippingDemandGroupLine.shippingdemandlineid
          "
          aria-expanded="false"
          :aria-controls="
            '#collapseDemandLine' + shippingDemandGroupLine.shippingdemandlineid
          "
          >&nbsp;</span
        >
      </div>
      <div class="row">
        <div class="col-10">
          <div class="">
            <h5 class="d-inline">
              Demand Line #{{ shippingDemandGroupLine.shippingdemandlineid }}
            </h5>
          </div>
        </div>
      </div>
      <div class="row mt-1">
        <div class="row mb-2">
          <div class="col-1">
            <i
              class="fas fa-calendar-alt fa-fw pe-2 align-middle text-primary"
            ></i>
          </div>
          <div class="col-5">2022-07-28</div>
          <div class="col-1">
            <i class="fas fa-clock fa-fw pe-2 align-middle text-primary"></i>
          </div>
          <div class="col-5">18:33:00</div>
        </div>
        <div class="row mb-2">
          <div class="col-1">
            <i
              class="fas fa-map-marker-alt fa-fw me-2 align-middle text-primary"
            ></i>
          </div>
          <div class="col-7">
            {{ shippingDemandGroupLine?.addressline1 }},
            {{ shippingDemandGroupLine?.addresspostcode }}
          </div>
          <div class="col-3">Distance?</div>
        </div>
      </div>
      <div class="row mt-1">
        <SlotButton
          class="col-4"
          @click="addLineToSlot(0)"
          slotNumberLabel="1"
        />
        <SlotButton
          class="col-4"
          @click="addLineToSlot(1)"
          slotNumberLabel="2"
        />
        <SlotButton
          class="col-4"
          @click="addLineToSlot(2)"
          slotNumberLabel="3"
        />
      </div>
      <hr />
      <div class="row mt-1">
        <SlotButton
          class="col-4"
          @click="addQtyToSlot(0)"
          slotNumberLabel="Q1"
        />
        <SlotButton
          class="col-4"
          @click="addQtyToSlot(1)"
          slotNumberLabel="Q2"
        />
        <SlotButton
          class="col-4"
          @click="addQtyToSlot(2)"
          slotNumberLabel="Q3"
        />
      </div>
    </div>
    <div
      :id="'collapseDemandLine' + shippingDemandGroupLine.shippingdemandlineid"
      class="accordion-collapse collapse hide"
      aria-labelledby="headingOne"
      :data-bs-parent="'#demandLineCard' + demandLineCard"
    >
      <div class="card-body hrTop">
        <hr class="text-success hrStatus" />
        Volumes etc here
        <hr />
        <div class="row mb-3">
          <div class="col-3">
            <i
              class="fas fa-pencil-ruler fa-fw me-2 align-middle text-primary"
            ></i
            ><i class="fas fa-list fa-fw pe-2 align-middle text-primary"></i>
          </div>
          <div class="col-9">Item / Qty</div>
        </div>
        <div class="row mb-3">
          <div class="col-3">
            <i
              class="fas fa-pencil-ruler fa-fw me-2 align-middle text-primary"
            ></i
            ><i class="fas fa-list fa-fw pe-2 align-middle text-primary"></i>
          </div>
          <div class="col-9">Customer</div>
        </div>
        <hr />
        <div class="row mb-3 text-center">
          <div class="col-12">
            <button
              type="button"
              class="btn btn-soft-primary btn-sm w-50 mx-auto"
            >
              <i class="fa fa-box-open me-1"></i> View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--
    todo add volume / weight / item / unit / required date / transport method /
    address line one / postcode / inventory available / insight area
    -->
</template>

<script>
import SlotButton from "./SlotButton.vue"
export default {
  name: "ShippingDemandGroupLine",
  components: {
    SlotButton,
  },
  props: {
    shippingDemandGroupLine: {
      default: {},
    },
  },
  methods: {
    RemainingQty(plannedQty, totalQty) {
      let value = Math.max(parseInt(totalQty) - parseInt(plannedQty), 0)
      if (isNaN(value)) {
        value = totalQty
      }

      // todo trucate based on unit?

      return value
    },
    async addLineToSlot(slotnumber) {
      let response = await this.$store.dispatch(
        "transportplanning/addShippingDemandLineToSlot",
        {
          shippingdemandline: this.shippingDemandGroupLine,
          slotnumber: slotnumber,
        }
      )

      if (response?.error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: response.error,
          life: 2000,
        })
      }

      console.log(response)
    },
    addQtyToSlot(slotnumber) {
      alert(slotnumber)
    },
  },
}
</script>
