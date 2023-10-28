
<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-4">Todays Shipments</h5>

      <div class="mt-4">
        <!-- <p class="text-muted">Available Balance</p>
              <h4 class="font-size-20 mb-2">$46,256,342.00</h4>
              <p class="text-muted">5,56.52645.258</p> -->

        <div class="row mt-4 pb-3">
          <div class="col-md-6">
            <div class="d-flex align-items-center">
              <div class="avatar">
                <div class="avatar-title rounded bg-soft-primary">
                  <i class="mdi mdi-arrow-down font-size-22 text-primary"></i>
                </div>
              </div>
              <div class="flex-1 ms-3">
                <h5 class="mb-1 font-size-16">4</h5>
                <p class="text-muted mb-0">Incoming</p>
              </div>
            </div>
            <div class="mt-3 mb-4 mb-md-0">
              <button type="button" class="btn btn-primary bg-gradient w-100">
                Plan Receipt
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-center">
              <div class="avatar">
                <div class="avatar-title rounded bg-soft-danger">
                  <i class="mdi mdi-arrow-up font-size-22 text-danger"></i>
                </div>
              </div>
              <div class="flex-1 ms-3">
                <h5 class="mb-1 font-size-16">7</h5>
                <p class="text-muted mb-0">Outbound</p>
              </div>
            </div>
            <div class="mt-3">
              <button type="button" class="btn btn-danger bg-gradient w-100">
                Plan Shipment
              </button>
            </div>
          </div>
        </div>

        <hr class="mb-4" />
        <h4 class="card-title mb-4">Recent</h4>
        <SimpleBar
          class="list-unstyled mb-0 px-3 mx-n3"
          data-simplebar
          style="max-height: 465px"
        >
          <li class="py-2 pt-0">
            <todayShipmentRecent
              :trailerDetails="inboundShipment"
              v-bind:inbound="true"
            />
          </li>

          <li class="py-2">
            <todayShipmentRecent
              :trailerDetails="inboundShipment"
              v-bind:inbound="true"
            />
          </li>

          <li class="py-2">
            <todayShipmentRecent
              :trailerDetails="outboundShipment"
              v-bind:outbound="true"
            />
          </li>

          <li class="py-2">
            <todayShipmentRecent
              :trailerDetails="outboundShipment"
              v-bind:outbound="true"
            />
          </li>

          <li class="py-2">
            <todayShipmentRecent
              :trailerDetails="inboundShipment"
              v-bind:inbound="true"
            />
          </li>
          <li class="py-2">
            <todayShipmentRecent
              :trailerDetails="inboundShipment"
              v-bind:inbound="true"
            />
          </li>
        </SimpleBar>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleBar } from "simplebar-vue3";
import todayShipmentRecent from "./TodayShipmentRecent";
export default {
  name: "todayShipment",
  components: {
    SimpleBar,
    todayShipmentRecent,
  },
  data() {
    return {
      inboundShipment: {
        trailername: "Test inbound",
        displayDateTime: "Today: 12:34pm",
        weight: 2500,
        volume: 2050,
        units: 20,
      },
      outboundShipment: {
        trailername: "Test outbound",
        displayDateTime: "Today: 12:34pm",
        weight: "2500",
        volume: "2050",
      },
    };
  },
};
</script>
