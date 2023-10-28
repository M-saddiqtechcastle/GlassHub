<template>
  <div class="row" v-if="pageMode === 'view'">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-box fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">PO #168155</h5>
                </div>

                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-3">
                  <div class="col-12 text-center">
                    <a
                      type="button"
                      class="btn btn-warning btn-sm mx-auto px-4"
                    >
                      Part Received
                    </a>
                  </div>
                  <div class="col-12">
                    <label class="inp">
                      <input
                        type="text"
                        value="Jeff's Boxes"
                        placeholder="&nbsp;"
                        disabled
                      />
                      <span class="label">Supplier</span>
                    </label>
                    <label class="inp">
                      <input
                        type="text"
                        value="Internal Fleet"
                        placeholder="&nbsp;"
                        disabled
                      />
                      <span class="label">Carrier</span>
                    </label>
                    <label class="inp">
                      <input
                        type="text"
                        value="25/10/2022"
                        placeholder="&nbsp;"
                        disabled
                      />
                      <span class="label">Due Date</span>
                    </label>
                    <label class="inp">
                      <input
                        type="text"
                        value="15:30"
                        placeholder="&nbsp;"
                        disabled
                      />
                      <span class="label">Due Time</span>
                    </label>
                    <label class="inp">
                      <input
                        type="text"
                        value="1hr 45mins"
                        placeholder="&nbsp;"
                        disabled
                      />
                      <span class="label">Estimated Receiving Time</span>
                    </label>
                  </div>
                </div>
                <hr />
                <div class="row mb-3">
                  <div class="col-12 text-center">
                    <h5
                      class="text-center"
                      style="text-transform: uppercase; font-size: 1.2em"
                    >
                      Status
                    </h5>
                    <a
                      type="button"
                      class="btn btn-primary btn-sm px-4 mx-auto"
                    >
                      Unloading In Progress
                    </a>
                  </div>
                  <div class="col-12 text-center mt-3 px-4">
                    <ProgressBar :value="truckStatusValue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fa fa-exclamation-triangle fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">Quarantine</h5>
                </div>

                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-3">
                  <div class="col-12 text-center tooltipcss">
                    <a type="button" class="btn btn-danger btn-sm mx-auto px-4">
                      Quarantine Required
                    </a>
                    <div class="top">
                      <h3>Warning!</h3>
                      <p>There are items within this order that require quarantine before use</p>
                      <i></i>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-box-open fa-fw pe-2 align-middle text-primary"
                    ></i>
                  </div>
                  <div class="col-10">Paper Roll</div>
                </div>
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-box-open fa-fw pe-2 align-middle text-primary"
                    ></i>
                  </div>
                  <div class="col-10">Paper Roll - White</div>
                </div>
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-box-open fa-fw pe-2 align-middle text-primary"
                    ></i>
                  </div>
                  <div class="col-10">Ink Barrel</div>
                </div>

                (on click of item, Modal? To view detail and set/change
                quarantine duration and location)
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-parking fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">Bay Plan</h5>
                </div>

                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-3">
                  <div class="col-12">
                    <h5 class="mb-4">Bay 12</h5>
                    <Timeline :value="bayplan" class="bayplan">
                      <template #content="slotProps">
                        <div :class="slotProps.item.thistrailer">
                          <span :class="slotProps.item.warning">
                            <span class="bold">{{
                              slotProps.item.truckid
                            }}</span
                            ><br />
                            {{ slotProps.item.carrier }}<br />
                            {{ slotProps.item.duetime }}<br />
                            {{ slotProps.item.loadtime }}<br
                          /></span>
                        </div>
                      </template>
                    </Timeline>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-people-carry fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">Receiving</h5>
                </div>

                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row">
                  <div class="col-12">
                    <div class="text-center">
                      <button class="btn addBtn">Assign Picker</button>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12">
                    <div class="card action-card accordion" id="collapseOne">
                      <div class="card-header text-start">
                        <div class="row">
                          <div class="col-3 my-auto">
                            <div class="avatar-group-item">
                              <a
                                href="javascript: void(0);"
                                class="d-inline-block"
                                ><div class="avatar-sm">
                                  <span
                                    class="avatar-title rounded-circle bg-success text-white font-size-16"
                                  >
                                    RC
                                  </span>
                                </div></a
                              >
                            </div>
                          </div>
                          <div class="col-7 my-auto">
                            <h2>Richard Cheethamlongname</h2>
                          </div>
                          <div class="col-2 p-0 justify-content-top">
                            <span
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapsePicking"
                              aria-expanded="false"
                              aria-controls="collapsePicking"
                              >&nbsp;</span
                            >
                          </div>
                        </div>
                        <div class="row align-items-center mt-3">
                          <div class="col-12">
                            <div class="row mb-3">
                              <div class="col-2">
                                <i
                                  class="fas fa-clock fa-fw pe-2 align-middle text-primary"
                                ></i>
                              </div>
                              <div class="col-10">Due to pick at 14:15</div>
                            </div>
                            <div class="row mb-3">
                              <div class="col-2">
                                <i
                                  class="far fa-clipboard fa-fw pe-2 align-middle text-primary"
                                ></i>
                              </div>
                              <div class="col-10">4 Assigned Loads</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="collapsePicking"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#collapsePicking"
                      >
                        <div class="card-body hrTop">
                          <hr />

                          <Timeline :value="pickPlan" class="pickPlan">
                            <template #content="slotProps">
                              <div :class="slotProps.item.thistrailer">
                                <span :class="slotProps.item.warning">
                                  <span class="bold">{{
                                    slotProps.item.truckid
                                  }}</span
                                  ><br />
                                  Start Picking: {{ slotProps.item.starttime
                                  }}<br />
                                  {{ slotProps.item.picktime }}<br />
                                </span>
                              </div>
                            </template>
                          </Timeline>

                          <hr />
                          <div class="row my-1 pt-2 text-center">
                            <div class="col-4">
                              <i
                                class="fas fa-ellipsis-h fa-fw fa-125x black"
                                @click="toggle"
                              ></i>

                              <Menu
                                ref="menu"
                                :model="menuItems"
                                :popup="true"
                              />
                            </div>
                            <div class="col-4"></div>
                            <div class="col-4">
                              <i
                                class="fas fa-times fa-fw fa-125x text-danger"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-list fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">Order Lines</h5>
                </div>

                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-3">
                  <div class="col-12">
                    data table to include: description, qty ordered, qty
                    received, location, confirm receive button
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row" v-if="pageMode === 'edit' || pageMode === 'add'"></div>
</template>

<script>
import { ref } from "vue";
import Timeline from "primevue/timeline";

export default {
  name: "CompanyCard",

  components: {
    Timeline,
  },
  props: {
    pageMode: {
      default: "view",
    },
  },

  data() {
    return {
      modalVisible: false,
      store: "site",
      dataGridRef: "SiteDataGrid",
      defaultRecord: {
        siteid: 0,
        companyid: 0,
      },

      truckStatusValue: 63,

      routeplan: [
        {
          company: "Box Inc",
          city: "Dronfield",
          postcode: "S18 1AS",
          distance: "32.3 miles",
          co2: "2,235g",
          statusIcon: "delivered",
        },
        {
          company: "Packaging R Us",
          city: "Dronfield",
          postcode: "S18 5FS",
          distance: "2.1 miles",
          co2: "425g",
          statusIcon: "failed",
        },
        {
          company: "Big Box",
          city: "Chesterfield",
          postcode: "S42 5GF",
          distance: "10.8 miles",
          co2: "1,025g",
          statusIcon: "planned",
        },
        {
          company: "Little Box",
          city: "Derby",
          postcode: "DE12 3WE",
          distance: "29.2 miles",
          co2: "2,001g",
          statusIcon: "planned",
        },
      ],

      bayplan: [
        {
          truckid: "#1354132",
          carrier: "Fedex",
          duetime: "9:00",
          loadtime: "1hr 15mins",
          thistrailer: "",
          warning: "",
        },
        {
          truckid: "#64845",
          carrier: "TNT",
          duetime: "11:30",
          loadtime: "2hr 15mins",
          thistrailer: "",
          warning: "",
        },
        {
          truckid: "#168155",
          carrier: "Internal Fleet",
          duetime: "15:30",
          loadtime: "1hr 45mins",
          thistrailer: "thistrailer",
          warning: "",
        },
        {
          truckid: "#015132",
          carrier: "Fedex",
          duetime: "16:00",
          loadtime: "1hr 15mins",
          thistrailer: "",
          warning: "text-danger",
        },
      ],

      pickPlan: [
        {
          truckid: "#1354132",
          starttime: "8:00",
          picktime: "1hr 30mins",
          thistrailer: "",
          warning: "",
        },
        {
          truckid: "#64845",
          starttime: "9:30",
          picktime: "2hr 00mins",
          thistrailer: "",
          warning: "",
        },
        {
          truckid: "#168155",
          starttime: "14:00",
          picktime: "1hr 20mins",
          thistrailer: "thistrailer",
          warning: "",
        },
        {
          truckid: "#015132",
          starttime: "15:30",
          picktime: "1hr 30mins",
          thistrailer: "",
          warning: "text-danger",
        },
      ],
    };
  },

  methods: {},

  setup() {
    const value1 = ref(0);
    const value2 = ref(50);
    const value3 = ref(75);
    const value4 = ref(10);
    const value5 = ref(40);
    const value6 = ref(60);
    const value7 = ref(40);
    const value8 = ref(60);
    const value9 = ref(50);
    const value10 = ref(0);

    return {
      progressValue: 40,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10,
    };
  },
};
</script>

<style scoped>
:deep(.bayplan .p-timeline-event-opposite),
:deep(.pickPlan .p-timeline-event-opposite) {
  display: none;
}

:deep(.p-timeline-event-content) {
  padding-bottom: 1.2em !important;
}

.bayplan,
.pickPlan {
  font-size: 90%;
  opacity: 75%;
  font-style: italic;
}

.bayplan .thistrailer,
.pickPlan .thistrailer {
  font-size: 120%;
  opacity: 100%;
  font-style: normal;
}

.custom-marker {
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  color: #4caf50;
  border-radius: 50%;
  z-index: 1;
}
</style>
