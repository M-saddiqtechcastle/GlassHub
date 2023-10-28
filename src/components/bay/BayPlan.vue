<template>
  <div class="row" v-if="pageMode === 'view'">
    <Sidebar v-model:visible="trailerAssignments" position="left">
      <h3 class="text-center">Assign Trailer To Bay</h3>
      <div class="row">
        <div class="col-12">
          <PickList
            v-model="trailers"
            dataKey="id"
            v-model:selection="trailersSelected"
            responsive="true"
            breakpoint="9999px"
          >
            <template #sourceheader> Unassigned Trailers </template>
            <template #targetheader> Bay Plan - **NAME OF BAY**</template>
            <template #item="slotProps">
              <div class="card action-card accordion" id="accordionExample">
                <div class="card-header text-start">
                  <div class="row">
                    <div class="col-3 my-auto">
                      <span class="loadTruckIcon">
                        <i class="fas fa-truck fa-fw fa-125x"></i>
                      </span>
                    </div>
                    <div class="col-7 my-auto">
                      <h2>#{{ slotProps.item.id }}</h2>
                    </div>
                    <div class="col-2 p-0 justify-content-top">
                      <i class="fas fa-ellipsis-h fa-fw fa-125x"></i>
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-10">
                      <h3>{{ slotProps.item.transportcarrier }}</h3>
                    </div>
                    <div class="col-2">
                      <i
                        class="fas fa-people-carry fa-fw text-success d-inline-block mb-1"
                        v-if="slotProps.item.pickplanned === 'true'"
                      ></i>
                      <i
                        class="fas fa-people-carry fa-fw text-danger d-inline-block mb-1"
                        v-if="slotProps.item.pickplanned === 'false'"
                      ></i>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <i class="fas fa-calendar-alt fa-fw me-2"></i
                      >{{ slotProps.item.duedate }}<br />
                      <i class="fas fa-clock fa-fw me-2"></i
                      >{{ slotProps.item.duetime }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </PickList>
        </div>
      </div>
    </Sidebar>

    <GGanttChart
              chart-start="2020-03-01 00:00"
              chart-end="2020-03-03 00:00"
            >
                  <GGanttRow label="My row #1"/>
            </GGanttChart>

    <div class="col-md-4">
      <p @click="trailerAssignments = true">Side menu view</p>
      <div class="card accordion" id="accordionExample">
        <div class="card-header text-start">
          <div class="row">
            <div class="col-10 headericon">
              <i class="fas fa-parking fa-fw fa-2x me-3"></i>
              <h5 class="d-inline">Bays</h5>
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
          class="accordion-collapse collapse show mb-3"
          aria-labelledby="heading"
          data-bs-parent="#accordionExample"
        >
          <div class="card-body hrTop">
            <hr />
            <div class="card action-card accordion mb-3" id="accordionExample2">
              <div class="card-header text-start">
                <div class="row">
                  <div class="col-2 text-start">
                    <i class="fas fa-parking fa-fw fa-2x text-success"></i>
                  </div>
                  <div class="col-8 my-auto">
                    <h2>Bay 1</h2>
                  </div>
                  <div class="col-2 p-0 justify-content-top">
                    <span
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      >&nbsp;</span
                    >
                  </div>
                </div>
                <div class="row align-items-center mt-3 ps-2">
                  <div class="col-6">
                    <div class="row mb-3">
                      <div class="col-2">
                        <i
                          class="fas fa-truck fa-fw pe-2 align-middle text-primary"
                        ></i>
                      </div>
                      <div class="col-10">3 planned</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row mb-3">
                      <div class="col-2">
                        <i
                          class="fas fa-tape fa-fw pe-2 align-middle text-primary"
                        ></i>
                      </div>
                      <div class="col-10">Standard Dock</div>
                    </div>
                  </div>
                  <div class="col-12">
                    <ProgressBar class="loadingbar" mode="indeterminate" />
                  </div>
                </div>
              </div>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample2"
              >
                <div class="card-body hrTop">
                  <hr />

                  <div class="row my-1 pt-2 text-center">
                    <div class="col-4">
                      <i
                        class="fas fa-ellipsis-h fa-fw fa-125x black"
                        @click="toggle"
                      ></i>

                      <Menu ref="menu" :model="menuItems" :popup="true" />
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4">
                      <i class="fas fa-ban fa-fw fa-125x text-danger"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="card action-card accordion mb-3 active"
              id="accordionExample2"
            >
              <div class="card-header text-start">
                <div class="row">
                  <div class="col-2 text-start">
                    <i class="fas fa-parking fa-fw fa-2x text-success"></i>
                  </div>
                  <div class="col-8 my-auto">
                    <h2>Bay 2</h2>
                  </div>
                  <div class="col-2 p-0 justify-content-top">
                    <span
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      >&nbsp;</span
                    >
                  </div>
                </div>
                <div class="row align-items-center mt-3 ps-2">
                  <div class="col-6">
                    <div class="row mb-3">
                      <div class="col-2">
                        <i
                          class="fas fa-truck fa-fw pe-2 align-middle text-primary"
                        ></i>
                      </div>
                      <div class="col-10">3 planned</div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row mb-3">
                      <div class="col-2">
                        <i
                          class="fas fa-tape fa-fw pe-2 align-middle text-primary"
                        ></i>
                      </div>
                      <div class="col-10">Standard Dock</div>
                    </div>
                  </div>
                  <div class="col-12">
                    <ProgressBar class="loadingbar" mode="indeterminate" />
                  </div>
                </div>
              </div>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample2"
              >
                <div class="card-body hrTop">
                  <hr />

                  <div class="row my-1 pt-2 text-center">
                    <div class="col-4">
                      <i
                        class="fas fa-ellipsis-h fa-fw fa-125x black"
                        @click="toggle"
                      ></i>

                      <Menu ref="menu" :model="menuItems" :popup="true" />
                    </div>
                    <div class="col-4"></div>
                    <div class="col-4">
                      <i class="fas fa-ban fa-fw fa-125x text-danger"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8"></div>
  </div>

  <div class="row" v-if="pageMode === 'edit' || pageMode === 'add'"></div>
</template>

<script>
//import PickList from "primevue/picklist"
//import ProgressBar from "primevue/progressbar"
//import Sidebar from "primevue/sidebar"
//import { GGanttChart, GGanttRow } from "vue-ganttastic";

export default {
  name: "BayPlan",
  data() {
    return {
      /*  myChartStart: "2020-03-01 00:00",
      myChartEnd: "2020-03-02 00:00",
      myBars1: [
        {
          myBarStart: "2020-03-01 01:30",
          myBarEnd: "2020-03-01 06:00",
          ganttBarConfig: {
            bundle: "foo",
          },
        },
      ],
      myBars2: [
        {
          myBarStart: "2020-03-01 15:10",
          myBarEnd: "2020-03-01 20:00",
          ganttBarConfig: {
            bundle: "foo",
          },
        },
      ],
      trailerAssignments: false,
      plannedTrucks: false,

      modalVisible: false,
      store: "site",
      dataGridRef: "SiteDataGrid",
      defaultRecord: {
        siteid: 0,
        companyid: 0,
      },
      trailersSelected: [],
      trailers: [
        [
          {
            id: "165132",
            transportcarrier: "Internal Fleet",
            duedate: "25/10/2022",
            duetime: "15:25",
            pickplanned: "true",
          },
          {
            id: "165132",
            transportcarrier: "Internal Fleet",
            duedate: "25/10/2022",
            duetime: "15:25",
            pickplanned: "false",
          },
          {
            id: "165132",
            transportcarrier: "Internal Fleet",
            duedate: "25/10/2022",
            duetime: "15:25",
            pickplanned: "true",
          },
          {
            id: "165132",
            transportcarrier: "Internal Fleet",
            duedate: "25/10/2022",
            duetime: "15:25",
            pickplanned: "true",
          },
        ],
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
      ],*/
    }
  },
  components: {
   // PickList,
    //ProgressBar,
    //Sidebar,
    //  GGanttChart,
    //  GGanttRow,
  },
  props: {
    pageMode: {
      default: "view",
    },
  },

  methods: {},
}
</script>

<style scoped>
.loadingbar {
  height: 0.1em !important;
}

.active .card-header,
.active {
  background-color: #daf0ec;
}

:deep(.p-picklist-source-controls .p-button.p-button-icon-only),
:deep(.p-picklist-target-controls .p-button.p-button-icon-only) {
  width: 1.5em;
  height: 1.5em;
  background: var(--neutral-color1);
  border-color: var(--neutral-color1);
}
</style>
