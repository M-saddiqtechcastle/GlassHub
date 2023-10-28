<template>
  <div class="col-xl-4 col-sm-6">
    <div class="card card-rounded-header accordion">
      <div class="card-header text-start">
        <div class="row">
          <div class="col-3 my-auto">
            <h5>Container</h5>
          </div>
          <div class="col-2 my-auto">
            <h6>#{{ transportcontainer.transportcontainerid }}</h6>
          </div>
          <div class="col-3 my-auto">
           
          </div>
          <div class="col-4 my-auto">
            
            <br />
            
          </div>
          <div class="col-1 p-0 justify-content-top">
            <span
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="
                '#transportcontainerSummaryCollapse' +
                transportcontainer.transportcontainerid
              "
              aria-expanded="true"
              :aria-controls="
                'transportcontainerSummaryCollapse' +
                transportcontainer.transportcontainerid
              "
              >&nbsp;</span
            >
          </div>
        </div>
        <hr />
        <div class="row">
          Todo Insight
          <!-- 
            todo sort insights out
               <div class="col-6">
          <i class="far fa-hourglass fa-fw fa-15x text-warning"></i>
            <h6 class="ms-3 d-inline">Due in 2 days</h6>
          </div>
          <div class="col-6 text-end">
            <h6 class="me-3 d-inline">Active Alerts</h6>
            <i
              class="fas fa-exclamation-triangle fa-fw fa-15x text-danger"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            ></i>
          </div> -->
        </div>
      </div>
      <div
        :id="'transportcontainerSummaryCollapse' + transportcontainer.transportcontainerid"
        class="accordion-collapse collapse"
        :data-bs-parent="
          'transportcontainerSummaryAccordian' + transportcontainer.transportcontainerid
        "
      >
        <div class="card-body">
          <div class="row mb-2">
            <div class="col-6">
              <i class="mdi mdi-account"></i>
             
            </div>
            <div class="col-6">
              <i class="bx bx-map-pin"></i>
             
            </div>
          </div>
          <div class="row">
            <!-- <div class="col-4">
              <i class="mdi mdi-truck-trailer"></i>
              container
            </div> -->
            <!-- <div class="col-4">
              <i class="mdi mdi-truck-fast-outline"></i>
              carrier
            </div> -->
            <div class="col-4">
              <i class="mdi mdi-train"></i>
             
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-4">
             
            </div>
            <div class="col-8 datacontrol text-end">
              <!--<span><i class="fas fa-filter"></i> Filter</span> -->
              <!-- <span><i class="fas fa-ellipsis-h"></i></span>-->
            </div>
          </div>
          <div class="row">
            <div class="col-12">
             
            <hr />
          </div>
          <div class="row">
            <div class="col-12">
              <div class="text-start">
                <button
                  @click="$emit('editRow', transportcontainer)"
                  type="button"
                  class="btn btn-soft-primary btn-sm w-50 mx-auto"
                >
                  <i class="bx bx-cuboid me-1"></i> View Details
                </button>
                <button
                  @click="$emit('deleteRow', transportcontainer)"
                  type="button"
                  class="btn btn-soft-danger btn-sm w-50 mx-auto ml-2"
                >
                  <i class="bx bx-times me-1"></i> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> </div>
  </div>
</template>

<script>
export default {
  name: "TransportContainerSummaryCard",
  components: {},
  props: {
    transportcontainer: {
      default: {},
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
