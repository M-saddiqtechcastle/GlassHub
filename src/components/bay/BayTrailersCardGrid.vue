<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="card accordion" id="demandCard">
        <div class="card-header text-start">
          <div class="row">
            <div class="col-10 headericon">
              <i
                class="fas fa-arrow-down fa-fw fa-2x me-3"
                v-tooltip.top="'Inbound Delivery'"
              ></i>

              <div class="d-inline-block">
                <h5 class="d-inline">#12345</h5>
                <br />
                <h6>Internal Fleet</h6>
              </div>
            </div>
            <div class="col-2 p-0 justify-content-top text-end">
              <span
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="
                                #collapseDemand"
                aria-expanded="true"
                aria-controls="
                                #collapseDemand
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
                  ><i
                    class="fas fa-ellipsis-h fa-fw fa-125x black"
                    v-tooltip.top="'View Options'"
                  ></i
                ></a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="editRow(slotProps.data)"
                    >Assign to Bay</a
                  >
                  <a class="dropdown-item" @click="editRow(slotProps.data)"
                    >Change Date / Time</a
                  >
                  <hr />
                  <a class="dropdown-item" @click="editRow(slotProps.data)"
                    >Edit Trailer</a
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
          id="collapseDemand"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="
                          #demandCard
                        "
        >
          <div class="card-body hrTop">
            <hr class="text-success hrStatus" />
            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-calendar-alt fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Due Date'"
                ></i>
              </div>
              <div class="col-10">22-11-2022</div>
            </div>

            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-clock fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Due Time'"
                ></i>
              </div>
              <div class="col-10">12:30</div>
            </div>
            
            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-hourglass-half fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Estimated Loading Time'"
                ></i>
              </div>
              <div class="col-10">2hrs 20mins</div>
            </div>

            <hr />
            <div class="row my-1 pb-2 text-center">
              <div class="col-4">
                <i
                  class="fas fa-parking fa-fw fa-125x black"
                  v-tooltip.top="'Assign to Bay'"
                ></i>
                <!--  <Menu ref="menu" :model="menuItems" :popup="true" />-->
              </div>
              <div class="col-4">
                <i
                  class="fas fa-calendar-alt fa-fw fa-125x text-info"
                  v-tooltip.top="'Change Date / Time'"
                ></i>
              </div>
              <div class="col-4">
                <i
                  class="fas fa-times fa-fw fa-125x text-danger"
                  v-tooltip.top="'Delete Trailer'"
                  @click="deleteTransportDrop"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
