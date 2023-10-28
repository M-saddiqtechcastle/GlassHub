<template>
  <div class="transactions-contain border rounded">
    <div class="row align-items-center">
      <div class="col-12 col-sm-5">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0 me-3">
            <div class="avatar">
              <div
                :class="{
                  'bg-soft-success': inbound,
                  'bg-soft-danger': outbound,
                }"
                class="avatar-title rounded"
              >
                <i
                  :class="{ 'text-success': inbound, 'text-danger': outbound }"
                  class="bx bx-down-arrow-circle font-size-24"
                ></i>
              </div>
            </div>
          </div>
          <div class="flex-grow-1">
            <h5 class="font-size-14 mb-1 text-truncate">
              {{ trailerDetails.trailername }}
            </h5>
            <p class="text-muted mb-0">{{ trailerDetails.displayDateTime }}</p>
          </div>
        </div>
      </div>
      <div class="col col-sm-3">
        <div class="mt-3 mt-md-0 text-md-end">
          <h5 class="font-size-14 mb-1 text-truncate">
            {{ trailerDetails.weight }}kg
          </h5>
          <p class="text-muted mb-0 text-truncate">Weight</p>
        </div>
      </div>
      <div class="col-auto col-sm-4">
        <div class="mt-3 mt-md-0 text-end">
          <h5 class="font-size-14 mb-1 text-truncate">
            {{ trailerDetails.volume }}cm
          </h5>
          <p class="text-muted mb-0">Volume</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodayShipmentRecent",
  props: {
    trailerDetails: {},
    outbound: Boolean,
    inbound: Boolean,
  },
};
</script>
