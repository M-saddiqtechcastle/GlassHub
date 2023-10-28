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
                  <h5 class="d-inline">Stock adjustment</h5>
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
                    <div class="select-group">
                      <label class="selectLabel" for="selectTest"
                        >Adjustment Reason</label
                      >
                      <select
                        class="form-select text-muted mb-0"
                        :class="{ 'is-invalid': errors?.userlevel }"
                        @change="
                          (event) =>
                            $emit('update:userlevel', event.target.value)
                        "
                        placeholder="Warehouse"
                      >
                        <option value="5">Transfer</option>
                        <option value="4">Adjustment</option>
                        <option value="3">Waste</option>
                        <option value="2">Damage</option>
                        <option value="1">Write Off</option>
                        <option value="0">Internal Use</option>
                      </select>
                    </div>
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
                  <i class="fas fa-exchange-alt fa-fw fa-2x me-3"></i>

                  <div class="d-inline-block">
                    <h5 class="d-inline">Transfer</h5>
                    <br />
                    *card to appear if adjustment reason is Transfer*
                  </div>
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
                    <h3>Origin</h3>
                    <div class="select-group">
                      <label class="selectLabel" for="selectTest"
                        >Warehouse</label
                      >
                      <select
                        class="form-select text-muted mb-0"
                        :class="{ 'is-invalid': errors?.userlevel }"
                        @change="
                          (event) =>
                            $emit('update:userlevel', event.target.value)
                        "
                        placeholder="Warehouse"
                      >
                        <option value="3">Dronfield</option>
                        <option value="2">Sheffield</option>
                        <option value="1">Chesterfield</option>
                        <option value="0">Derby</option>
                      </select>
                    </div>
                    <hr />
                  </div>

                  <div class="col-12">
                    <h3>Destination</h3>
                    <div class="select-group">
                      <label class="selectLabel" for="selectTest"
                        >Warehouse</label
                      >
                      <select
                        class="form-select text-muted mb-0"
                        :class="{ 'is-invalid': errors?.userlevel }"
                        @change="
                          (event) =>
                            $emit('update:userlevel', event.target.value)
                        "
                        placeholder="Warehouse"
                      >
                        <option value="3">Dronfield</option>
                        <option value="2">Sheffield</option>
                        <option value="1">Chesterfield</option>
                        <option value="0">Derby</option>
                      </select>
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

export default {
  name: "CompanyCard",

  components: {},
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
