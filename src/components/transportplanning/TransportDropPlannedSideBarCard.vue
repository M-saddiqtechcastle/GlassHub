<template>
  <XyzTransition appear xyz="fade right-75% duration-5" mode="in-out">
  <div class="row">
    <div class="col-12">
      <div class="card action-card accordion" id="accordionExample">
        <div class="card-header text-start">
          <div class="row">
            <div class="col-3 my-auto">
              <i class="fas fa-truck-loading fa-fw fa-2x"></i>
            </div>
            <div class="col-7 my-auto">
              <h2>{{transportDrop?.transportdropname}}</h2>
            </div>
            <div class="col-2 p-0 justify-content-top">
              <span
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                >&nbsp;</span
              >
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-6">
              <h3>Internal Fleet</h3>
              <i class="fas fa-calendar-alt fa-fw"></i>25/10/2022<br />
              <i class="fas fa-clock fa-fw"></i>15:30
            </div>
            <div class="col-3 text-center">
              <i
                class="fas fa-parking fa-fw text-success d-inline-block mb-1"
              ></i
              ><br />

              <i
                class="fas fa-people-carry fa-fw text-danger d-inline-block"
              ></i>
            </div>
            <div class="col-3 text-end">
              <Knob
                readonly
                v-model="value2"
                class="d-inline-block"
                :size="40"
              />
            </div>
          </div>
        </div>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="card-body hrTop">
            <hr />
            <div class="row my-1">
              <div class="col-4">Utilised</div>
              <div class="col-8">
                <ProgressBar :value="progressValue" />
              </div>
            </div>
            <div class="row my-1">
              <div class="col-4">Volume</div>
              <div class="col-8">
                <ProgressBar :value="progressValue" />
              </div>
            </div>
            <div class="row my-1">
              <div class="col-4">Weight</div>
              <div class="col-8">
                <ProgressBar :value="progressValue" />
              </div>
            </div>
            <div class="row my-1">
              <div class="col-4">CO2</div>
              <div class="col-8">
                <ProgressBar :value="progressValue" />
              </div>
            </div>
            <hr />
            <!--<div class="row my-1 pt-2 text-center">
              <div class="col-4">
                <i
                  class="fas fa-ellipsis-h fa-fw fa-125x black"
                  @click="toggle"
                ></i>

                <Menu ref="menu" :model="menuItems" :popup="true" />
              </div>
              <div class="col-4">
                <i class="fas fa-calendar-alt fa-fw fa-125x text-info"></i>
              </div>
              <div class="col-4">
                <i class="fas fa-times fa-fw fa-125x text-danger"></i>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  </XyzTransition>
</template>

<script>
export default {
  name: "TransportDropPlannedSideBarCard",
  props: {
    transportDrop: {
      default: {},
    },
  },
}
</script>
