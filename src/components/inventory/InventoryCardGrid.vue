<template>
  <div class="row mb-4">
    <div class="col-3"></div>
    <div class="col-6 searchbar">
      <div class="input-group">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search..."
          class="form-control"
          v-on:keyup.enter="searchUsers"
          v-model="searchValue"
        />
        <button
          type="button"
          @click="searchUsers"
          v-on:keyup.enter="searchUsers"
          class="btn btn-primary w-md"
        >
          Search
        </button>
      </div>
    </div>
    <div class="col-3"></div>
  </div>
  <div class="row">
    

    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="card accordion" :id="'demandCard'">
        <div class="card-header text-start">
          <div class="row mb-2">
            <div class="col-10 headericon">
              <i class="fas fa-box-open fa-fw fa-2x me-3"></i>

              <div class="d-inline-block">
                <h5 class="d-inline">KAJ0012522</h5>
              </div>
            </div>
            <div class="col-2 p-0 justify-content-top text-end">
              <span
                class="accordion-button withOptionsButton"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapseDemand'"
                aria-expanded="true"
                :aria-controls="'#collapseDemand'"
                >&nbsp;</span
              >

              <div class="dropdown">
                <a
                  class="text-muted dropdown-toggle font-size-16"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  ><i class="fas fa-ellipsis-h fa-fw fa-125x black"></i
                ></a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item" @click="editRow(slotProps.data)"
                    >Edit</a
                  >
                  <a class="dropdown-item" @click="deleteRow(slotProps.data)"
                    >Delete</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-body hrTop">
          <hr class="text-danger hrStatus" />

          <div class="row mb-3">
            <div class="col-2">
              <i
                class="fas fa-signature fa-fw pe-2 align-middle text-primary"
                v-tooltip.top="'Product Description'"
              ></i>
            </div>
            <div class="col-10">Printed POS Display Maccys</div>
          </div>
          <div
            :id="'collapseDemand'"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            :data-bs-parent="'#demandCard'"
          >
            <hr />

            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-map-marker-alt fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Location'"
                ></i>
              </div>
              <div class="col-8">D-32-2</div>
              <div class="col-2">
                <i
                  class="fas fa-exclamation-triangle fa-fw pe-2 align-middle text-danger"
                  v-tooltip.top="'In Quarantine'"
                ></i>
              </div>
            </div>

            <div class="row mb-3 inset">
              <div class="col-2">
                <i
                  class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Total In Stock'"
                ></i>
              </div>
              <div class="col-10 text-danger">1000</div>
            </div>

            <hr class="hrSpacer" />
            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-map-marker-alt fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Location'"
                ></i>
              </div>
              <div class="col-8">JKD-123-12</div>
              <div class="col-2">
                <i
                  class="fas fa-exclamation-triangle fa-fw pe-2 align-middle text-danger d-none"
                  v-tooltip.top="'In Quarantine'"
                ></i>
              </div>
            </div>

            <div class="row mb-3 inset">
              <div class="col-2">
                <i
                  class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Total In Stock'"
                ></i>
              </div>
              <div class="col-10">1000</div>
            </div>

            <hr />

            <h3>Total Stock On Hand</h3>

            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Total In Stock'"
                ></i>
              </div>
              <div class="col-8">2000</div>
              <div class="col-2 p-0 justify-content-top">
                <span
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#totalStock"
                  aria-expanded="false"
                  aria-controls="totalStock"
                  >&nbsp;</span
                >
              </div>
            </div>
            <div
              id="totalStock"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#totalStock"
            >
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-pallet fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Total of Pallets'"
                  ></i>
                </div>
                <div class="col-10">2</div>
              </div>
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-boxes fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Total of Outer Boxes'"
                  ></i>
                </div>
                <div class="col-10">50</div>
              </div>
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-box fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Total of Inner Boxes'"
                  ></i>
                </div>
                <div class="col-10">100</div>
              </div>
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-sticky-note fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Total of Products'"
                  ></i>
                </div>
                <div class="col-10">2000</div>
              </div>
            </div>

            <h3>Reserved Stock</h3>

            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Reserved Stock'"
                ></i>
              </div>
              <div class="col-8 text-danger">3200</div>
              <div class="col-2 p-0 justify-content-top">
                <span
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#reservedStock"
                  aria-expanded="false"
                  aria-controls="reservedStock"
                  >&nbsp;</span
                >
              </div>
            </div>
            <div
              id="reservedStock"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#reservedStock"
            >
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-pallet fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Total of Pallets'"
                  ></i>
                </div>
                <div class="col-10">2</div>
              </div>
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-boxes fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Total of Outer Boxes'"
                  ></i>
                </div>
                <div class="col-10">50</div>
              </div>
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-box fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Total of Inner Boxes'"
                  ></i>
                </div>
                <div class="col-10">100</div>
              </div>
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-sticky-note fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Total of Products'"
                  ></i>
                </div>
                <div class="col-10">2000</div>
              </div>
            </div>

            <h3>Inbound Stock</h3>

            <div class="row mb-3">
              <div class="col-2">
                <i
                  class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                  v-tooltip.top="'Inbound Stock'"
                ></i>
              </div>
              <div class="col-8 text-danger">1000</div>
              <div class="col-2 p-0 justify-content-top">
                <span
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#inboundStock"
                  aria-expanded="false"
                  aria-controls="inboundStock"
                  >&nbsp;</span
                >
              </div>
            </div>
            <div
              id="inboundStock"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#inboundStock"
            >
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-store fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Purchase Orders'"
                  ></i>
                </div>
                <div class="col-10">500</div>
              </div>
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-industry fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Production'"
                  ></i>
                </div>
                <div class="col-10">350</div>
              </div>
              <div class="row mb-3 inset">
                <div class="col-2">
                  <i
                    class="fas fa-exchange-alt fa-fw pe-2 align-middle text-primary"
                    v-tooltip.top="'Tranfers'"
                  ></i>
                </div>
                <div class="col-10">150</div>
              </div>
            </div>

            <div class="row mb-3 text-center">
              <div class="col-12">
                <button
                  type="button"
                  class="btn btn-soft-primary btn-sm w-50 mx-auto"
                >
                  <i class="fa fa-box-open me-1"></i> View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row align-items-center pb-4">
      <div class="col-12">
        <Paginator
          :rows="12"
          :totalRecords="getTotal"
          @page="onPage($event)"
          class="p-cardGridPaginator"
        ></Paginator>
      </div>
    </div>
  </div>
</template>

<script>
import appConfig from "@/app.config";
import pageMixin from "../../common/pageMixin.js";
import Paginator from "primevue/paginator";

export default {
  page: {
    title: "Transport Planning",
    meta: [
      {
        name: "Transport Planning",
        content: appConfig.description,
      },
    ],
  },
  mixins: [pageMixin],
  components: {
    Paginator,
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
