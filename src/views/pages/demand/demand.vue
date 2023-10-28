<template>
  <Layout :pagetitle="'Demand'">
    <div>
      <DemandTopMenu />
      <div class="row">
        <div class="col-md-6">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-3 my-auto">
                  <h5>Demand</h5>
                </div>

                <div class="col-4 my-auto">
                  <h6>#543213</h6>
                </div>
                <div class="col-4 my-auto">
                  <Dropdown
                    v-model="statusSelect"
                    :options="status"
                    optionLabel="name"
                    placeholder="Status"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value">
                        <div>{{ slotProps.value.name }}</div>
                      </div>
                      <span v-else>
                        {{ slotProps.placeholder }}
                      </span>
                    </template>
                    <template #option="slotProps">
                      <div class="">
                        <div>{{ slotProps.option.name }}</div>
                      </div>
                    </template>
                  </Dropdown>
                </div>
                <div class="col-1 p-0 justify-content-top">
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
              <hr />
              <div class="row">
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
                  <div class="col-4">
                    <button class="btn addBtn">Add Demand Line</button>
                  </div>
                  <div class="col-8 datacontrol text-end">
                    <span><i class="fas fa-filter"></i> Filter</span>
                    <span><i class="fas fa-ellipsis-h"></i></span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <DemandDataGrid />
                  </div>
                  <div class="col-12">
                    <div class="text-start">
                      <button
                        class="btn"
                        type="button"
                        label="Toggle"
                        @click="toggle"
                      >
                        <i class="fas fa-bars pe-2"></i> Demand Line Actions
                      </button>
                      <Menu ref="menu" :model="menuItems" :popup="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card card-rounded-header accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-3 my-auto">
                  <h5>Demand</h5>
                </div>

                <div class="col-4 my-auto">
                  <h6>#132543</h6>
                </div>
                <div class="col-4 my-auto">
                  <Dropdown
                    v-model="statusSelect"
                    :options="status"
                    optionLabel="name"
                    placeholder="Status"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value">
                        <div>{{ slotProps.value.name }}</div>
                      </div>
                      <span v-else>
                        {{ slotProps.placeholder }}
                      </span>
                    </template>
                    <template #option="slotProps">
                      <div class="">
                        <div>{{ slotProps.option.name }}</div>
                      </div>
                    </template>
                  </Dropdown>
                </div>
                <div class="col-1 p-0 justify-content-top">
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
              <hr />
              <div class="row">
                <div class="col-6">
                  <i class="far fa-hourglass fa-fw fa-15x text-primary"></i>
                  <h6 class="ms-3 d-inline">Due today</h6>
                </div>
                <div class="col-6 text-end">
                  <h6 class="me-3 d-inline">No Alerts</h6>
                  <i
                    class="fas fa-check-circle fa-fw fa-15x text-success"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight2"
                    aria-controls="offcanvasRight"
                  ></i>
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-4">
                    <button class="btn addBtn">Add Demand Line</button>
                  </div>
                  <div class="col-8 datacontrol text-end">
                    <span><i class="fas fa-filter"></i> Filter</span>
                    <span><i class="fas fa-ellipsis-h"></i></span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <DemandDataGrid />
                  </div>
                  <div class="col-12">
                    <div class="text-start">
                      <button
                        class="btn"
                        type="button"
                        label="Toggle"
                        @click="toggle"
                      >
                        <i class="fas fa-bars pe-2"></i> Demand Line Actions
                      </button>
                      <Menu ref="menu" :model="menuItems" :popup="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card-rounded-header accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-3 my-auto">
                  <h5>Demand</h5>
                </div>

                <div class="col-4 my-auto">
                  <h6>#186733</h6>
                </div>
                <div class="col-4 my-auto">
                  <Dropdown
                    v-model="statusSelect"
                    :options="status"
                    optionLabel="name"
                    placeholder="Status"
                  >
                    <template #value="slotProps">
                      <div v-if="slotProps.value">
                        <div>{{ slotProps.value.name }}</div>
                      </div>
                      <span v-else>
                        {{ slotProps.placeholder }}
                      </span>
                    </template>
                    <template #option="slotProps">
                      <div class="">
                        <div>{{ slotProps.option.name }}</div>
                      </div>
                    </template>
                  </Dropdown>
                </div>
                <div class="col-1 p-0 justify-content-top">
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
              <hr />
              <div class="row">
                <div class="col-6">
                  <i class="far fa-hourglass fa-fw fa-15x text-danger"></i>
                  <h6 class="ms-3 d-inline">Overdue</h6>
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
                </div>
              </div>
            </div>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="row">
                  <div class="col-4">
                    <button class="btn addBtn">Add Demand Line</button>
                  </div>
                  <div class="col-8 datacontrol text-end">
                    <span><i class="fas fa-filter"></i> Filter</span>
                    <span><i class="fas fa-ellipsis-h"></i></span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <DemandDataGrid />
                  </div>
                  <div class="col-12">
                    <div class="text-start">
                      <button
                        class="btn"
                        type="button"
                        label="Toggle"
                        @click="toggle"
                      >
                        <i class="fas fa-bars pe-2"></i> Demand Line Actions
                      </button>
                      <Menu ref="menu" :model="menuItems" :popup="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        aria-hidden="true"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Demand #543213 Alerts</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="row">
            <div class="col-12">
              <div class="card action-card">
                <div class="card-body">
                  <h2>Address</h2>
                  <hr />
                  <div class="text-center">
                    <i
                      class="fas fa-exclamation-triangle fa-fw fa-15x text-danger"
                    ></i>
                    <h3></h3>
                    <h4>Address not validated</h4>
                    <h5>View Detail</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card action-card">
                <div class="card-body">
                  <h2>Address</h2>
                  <hr />
                  <div class="text-center">
                    <i
                      class="fas fa-exclamation-triangle fa-fw fa-15x text-danger"
                    ></i>
                    <h3></h3>
                    <h4>Address not validated</h4>
                    <h5>View Detail</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card action-card">
                <div class="card-body">
                  <h2>Address</h2>
                  <hr />
                  <div class="text-center">
                    <i
                      class="fas fa-exclamation-triangle fa-fw fa-15x text-danger"
                    ></i>
                    <h3></h3>
                    <h4>Address not validated</h4>
                    <h5>View Detail</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card action-card">
                <div class="card-body">
                  <h2>Address</h2>
                  <hr />
                  <div class="text-center">
                    <i
                      class="fas fa-exclamation-triangle fa-fw fa-15x text-danger"
                    ></i>
                    <h3></h3>
                    <h4>Address not validated</h4>
                    <h5>View Detail</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight2"
        aria-labelledby="offcanvasRightLabel"
        aria-hidden="true"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Demand #132543 Alerts</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div class="row">
            <div class="col-12 text-center mt-5 pt-5">
              <i class="fas fa-5x fa-cocktail pb-5 text-success"></i>
              <h1>Great work</h1>
              <h2>Nothing to see here!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import pageMixin from "../../../common/pageMixin.js";
import { mapGetters } from "vuex";
import { FilterService, FilterMatchMode } from "primevue/api";
import DemandDataGrid from "../../../components/demand/DemandDataGrid";
import Menu from "primevue/menu";
import Dropdown from "primevue/dropdown";
import DemandTopMenu from "../../../components/demand/DemandTopMenu";

export default {
  page: {
    title: "Demand",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  mixins: [pageMixin],
  components: {
    Layout,
    DemandDataGrid,
    Menu,
    Dropdown,
    DemandTopMenu,
  },
  computed: {
    ...mapGetters({
      getPageView: "user/getPageView",
    }),
  },
  methods: {
    async changeView(selectedView) {
      this.$store.commit("user/setPageView", selectedView);
    },

    searchCountry(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.filteredCountries = [...this.countries];
        } else {
          this.filteredCountries = this.countries.filter((country) => {
            return country.name
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          });
        }
      }, 250);
    },
    searchCity(event) {
      let query = event.query;
      let filteredCities = [];

      for (let country of this.groupedCities) {
        let filteredItems = FilterService.filter(
          country.items,
          ["label"],
          query,
          FilterMatchMode.CONTAINS
        );
        if (filteredItems && filteredItems.length) {
          filteredCities.push({ ...country, ...{ items: filteredItems } });
        }
      }

      this.filteredCities = filteredCities;
    },
    searchItems(event) {
      //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
      let query = event.query;
      let filteredItems = [];

      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
          filteredItems.push(item);
        }
      }

      this.filteredItems = filteredItems;
    },
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },

  data() {
    return {
      countries: null,
      selectedCountry1: null,
      selectedCountry2: 123,
      selectedCity: null,
      filteredCities: null,
      filteredCountries: null,
      selectedCountries: [],
      selectedItem: null,
      filteredItems: null,

      items: Array.from({ length: 1000 }, (_, i) => ({
        label: `Item #${i}`,
        value: i,
      })),

      status: [
        {
          name: "Active <i class='fas fa-circle fa-15x pe-2 text-success'></i>",
        },
        { name: "Cancelled" },
      ],

      menuItems: [
        {
          label: "Options",
          items: [
            {
              label: "Update",
              icon: "pi pi-refresh",
              command: () => {
                this.$toast.add({
                  severity: "success",
                  summary: "Updated",
                  detail: "Data Updated",
                  life: 3000,
                });
              },
            },
            {
              label: "Delete",
              icon: "pi pi-times",
              command: () => {
                this.$toast.add({
                  severity: "warn",
                  summary: "Delete",
                  detail: "Data Deleted",
                  life: 3000,
                });
              },
            },
          ],
        },
        {
          label: "Navigate",
          items: [
            {
              label: "Vue Website",
              icon: "pi pi-external-link",
              url: "https://vuejs.org/",
            },
            {
              label: "Router",
              icon: "pi pi-upload",
              command: () => {
                window.location.hash = "/fileupload";
              },
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
