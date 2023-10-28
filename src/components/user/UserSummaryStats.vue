<template>
  <div class="col-12 col-xl-6 col-xxl-4">
    <div class="card">
      <div class="card-body">
        <div class="d-flex row align-items-center text-center">
          <div class="col-3">
            <div class="avatar">
              <div class="avatar-title rounded bg-primary bg-gradient">
                <eva-icon
                  name="clock-outline"
                  class="fill-white fa-2x"
                ></eva-icon>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="row">
              <div class="col-12">
                <p class="text-muted mb-1">Last Logged In</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h4 class="mb-0 d-inline">24/7/2022</h4>
                <br />
                <div
                  class="badge rounded-pill font-size-13 badge-soft-danger m-2"
                >
                  + 45 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end card body -->
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSummaryStats",
}
</script>

<style>
svg {
  top: 0em !important;
}
</style>
