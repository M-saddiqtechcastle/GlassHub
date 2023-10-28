<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-box-open fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">Inventory</h5>
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
                  <div class="col-12 text-center">
                    <a type="button" class="btn btn-danger btn-sm px-4 mx-auto">
                      Insufficient Stock for Demand
                    </a>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-12 text-center">
                    <label class="inp">
                      <input
                        type="text"
                        value="KAJ0012522"
                        placeholder="&nbsp;"
                        disabled
                      />
                      <span class="label">Product Code</span>
                    </label>
                  </div>
                  <div class="col-12 text-center">
                    <label class="inp">
                      <input
                        type="text"
                        value="Printed POS Display Maccys"
                        placeholder="&nbsp;"
                        disabled
                      />
                      <span class="label">Product Description</span>
                    </label>
                  </div>
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
                      class="btn btn-success btn-sm px-4 mx-auto"
                    >
                      Current Stock Item
                    </a>
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
                  <i class="fa fa-search-location fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">Locations</h5>
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
                <SiteSelect :companyid="currentCompanyRecord.companyid" />
                <hr />
                <h3>Locations</h3>
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
                  <div class="col-8">1000</div>
                  <div class="col-2 p-0 justify-content-top">
                    <span
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#totalInLocation"
                      aria-expanded="false"
                      aria-controls="totalInLocation"
                      >&nbsp;</span
                    >
                  </div>
                </div>
                <div
                  id="totalInLocation"
                  class="accordion-collapse collapse inset"
                  aria-labelledby="headingOne"
                  data-bs-parent="#totalInLocation"
                >
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-pallet fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Total of Pallets'"
                      ></i>
                    </div>
                    <div class="col-10">1</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-boxes fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Total of Outer Boxes'"
                      ></i>
                    </div>
                    <div class="col-10">25</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-box fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Total of Inner Boxes'"
                      ></i>
                    </div>
                    <div class="col-10">50</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-sticky-note fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Total of Products'"
                      ></i>
                    </div>
                    <div class="col-10">1000</div>
                  </div>
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
                  <div class="col-8">1000</div>
                  <div class="col-2 p-0 justify-content-top">
                    <span
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#totalInLocation"
                      aria-expanded="false"
                      aria-controls="totalInLocation"
                      >&nbsp;</span
                    >
                  </div>
                </div>
                <div
                  id="totalInLocation"
                  class="accordion-collapse collapse inset"
                  aria-labelledby="headingOne"
                  data-bs-parent="#totalInLocation"
                >
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-pallet fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Total of Pallets'"
                      ></i>
                    </div>
                    <div class="col-10">1</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-boxes fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Total of Outer Boxes'"
                      ></i>
                    </div>
                    <div class="col-10">25</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-box fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Total of Inner Boxes'"
                      ></i>
                    </div>
                    <div class="col-10">50</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-sticky-note fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Total of Products'"
                      ></i>
                    </div>
                    <div class="col-10">1000</div>
                  </div>
                </div>

                <hr />

                <div class="row">
                  <div class="col-12">
                    <div class="text-center">
                      <button class="btn addBtn">Add Location</button>
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
                  <i class="fa fa-plane-arrival fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">Inbound Stock</h5>
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
                <h3>Purchase Orders</h3>
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-store fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Purchase Order'"
                    ></i>
                  </div>
                  <div class="col-8">#125424</div>
                  <div class="col-2">
                    <i
                      class="fas fa-exclamation-triangle fa-fw pe-2 align-middle text-warning"
                      v-tooltip.top="'Part Received'"
                    ></i>
                  </div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Total Received'"
                    ></i>
                  </div>
                  <div class="col-10">500 / 1000</div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calendar fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Date Due'"
                    ></i>
                  </div>
                  <div class="col-10">22/12/2022</div>
                </div>

                <hr class="hrSpacer" />
                <hr />

                <h3>Production</h3>
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-industry fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Production'"
                    ></i>
                  </div>
                  <div class="col-8">#8486512</div>
                  <div class="col-2">
                    <i
                      class="fas fa-exclamation-triangle fa-fw pe-2 align-middle text-warning d-none"
                      v-tooltip.top="'Part Received'"
                    ></i>
                  </div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Total Received'"
                    ></i>
                  </div>
                  <div class="col-10">0 / 350</div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calendar fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Date Due'"
                    ></i>
                  </div>
                  <div class="col-10">15/12/2022</div>
                </div>

                <hr class="hrSpacer" />
                <hr />

                <h3>Transfer</h3>
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-exchange-alt fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Transfer'"
                    ></i>
                  </div>
                  <div class="col-8">#2154</div>
                  <div class="col-2">
                    <i
                      class="fas fa-exclamation-triangle fa-fw pe-2 align-middle text-danger"
                      v-tooltip.top="'Overdue Delivery'"
                    ></i>
                  </div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Total Received'"
                    ></i>
                  </div>
                  <div class="col-10">0 / 150</div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calendar fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Date Due'"
                    ></i>
                  </div>
                  <div class="col-10 text-danger">1/12/2022</div>
                </div>

                <hr class="hrSpacer" />
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
                  <div class="d-inline-block">
                    <h5 class="d-inline">Quarantine</h5>
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
                  <div class="col-12 text-center">
                    <a
                      type="button"
                      class="btn btn-warning btn-sm mx-auto px-4"
                    >
                      Product Requires <br />
                      2 Weeks Quarantine
                    </a>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-12 text-center">
                    <a type="button" class="btn btn-danger btn-sm mx-auto px-4">
                      Items In Quarantine
                    </a>
                  </div>
                </div>
                <hr />

                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-map-marker-alt fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Location'"
                    ></i>
                  </div>
                  <div class="col-10">D-32-2</div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-clock fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Time Remaining in Quarantine'"
                    ></i>
                  </div>
                  <div class="col-10">3 days, 2 hours</div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Total In Quarantine'"
                    ></i>
                  </div>
                  <div class="col-8">1000</div>
                  <div class="col-2 p-0 justify-content-top">
                    <span
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#totalInQuarantine"
                      aria-expanded="false"
                      aria-controls="totalInQuarantine"
                      >&nbsp;</span
                    >
                  </div>
                </div>
                <div
                  id="totalInQuarantine"
                  class="accordion-collapse collapse inset"
                  aria-labelledby="headingOne"
                  data-bs-parent="#totalInQuarantine"
                >
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-calendar fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Date Entered Quarantine'"
                      ></i>
                    </div>
                    <div class="col-10">1/12/22</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-plane-arrival fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Product Source'"
                      ></i>
                    </div>
                    <div class="col-10">Production</div>
                  </div>
                </div>

                <hr class="hrSpacer" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fa fa-pallet fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">Units</h5>
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
                (ideally expanded by default)
                <Tree
                  :value="unitLevels"
                  selectionMode="single"
                  v-model:selectionKeys="selectedKey1"
                ></Tree>

                <hr />

                (data displayed when selected above)
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-box fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Unit Name'"
                    ></i>
                  </div>
                  <div class="col-10">Inner Box</div>
                </div>

                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-ruler fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Size Dimensions'"
                    ></i>
                  </div>
                  <div class="col-10">120cm x 120cm x 60cm</div>
                </div>

                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-weight-hanging fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Weight'"
                    ></i>
                  </div>
                  <div class="col-10">23kg</div>
                </div>

                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-list-ol fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Quantity'"
                    ></i>
                  </div>
                  <div class="col-10">32</div>
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
                  <i class="fa fa-shopping-cart fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">Reserved Stock</h5>
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
                  <div class="col-2">
                    <i
                      class="fas fa-receipt fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Order Number'"
                    ></i>
                  </div>
                  <div class="col-8">#2545213</div>
                  <div class="col-2">
                    <i
                      class="fas fa-exclamation-triangle fa-fw pe-2 align-middle text-warning"
                      v-tooltip.top="'Partially Fulfilled'"
                    ></i>
                  </div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calculator fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Total Reserved'"
                    ></i>
                  </div>
                  <div class="col-10">1200 / 2200</div>
                </div>
                <div class="row mb-3 inset">
                  <div class="col-2">
                    <i
                      class="fas fa-calendar fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Date Due'"
                    ></i>
                  </div>
                  <div class="col-10">15/12/2022</div>
                </div>

                <hr class="hrSpacer" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fa fa-store-alt fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">Supplier</h5>
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

                <h3>Preferred Supplier</h3>

                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-store fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Preferred Suppler'"
                    ></i>
                  </div>
                  <div class="col-8">Big Paper Rolls R Us</div>
                  <div class="col-2 p-0 justify-content-top">
                    <span
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#preferredSupplier"
                      aria-expanded="false"
                      aria-controls="preferredSupplier"
                      >&nbsp;</span
                    >
                  </div>
                </div>
                <div
                  id="preferredSupplier"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#preferredSupplier"
                >
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-map-marked-alt fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Address'"
                      ></i>
                    </div>
                    <div class="col-10">
                      Unit 1<br />
                      Industrial Estate<br />
                      Derby<br />
                      DE55 1KS
                    </div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-phone-alt fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Phone Number'"
                      ></i>
                    </div>
                    <div class="col-10">01223 4564545</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-at fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Email Address'"
                      ></i>
                    </div>
                    <div class="col-10">bigpaperrollsrus@bigbrownboxes.com</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-barcode fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Supplier Part Code'"
                      ></i>
                    </div>
                    <div class="col-10">BBR-1928</div>
                  </div>
                </div>

                <hr class="hrSpacer" />
                <hr />

                <h3>Alternative Suppliers</h3>

                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-store fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Preferred Suppler'"
                    ></i>
                  </div>
                  <div class="col-8">Paper.com</div>
                  <div class="col-2 p-0 justify-content-top">
                    <span
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#alternativeSupplier1"
                      aria-expanded="false"
                      aria-controls="alternativeSupplier1"
                      >&nbsp;</span
                    >
                  </div>
                </div>
                <div
                  id="alternativeSupplier1"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#alternativeSupplier1"
                >
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-map-marked-alt fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Address'"
                      ></i>
                    </div>
                    <div class="col-10">
                      Warehouse<br />
                      Small Industrial Estate<br />
                      Leeds<br />
                      LS12 2AS
                    </div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-phone-alt fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Phone Number'"
                      ></i>
                    </div>
                    <div class="col-10">01478 554742</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-at fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Email Address'"
                      ></i>
                    </div>
                    <div class="col-10">small@paper.com</div>
                  </div>
                  <div class="row mb-3 inset">
                    <div class="col-2">
                      <i
                        class="fas fa-barcode fa-fw pe-2 align-middle text-primary"
                        v-tooltip.top="'Supplier Part Code'"
                      ></i>
                    </div>
                    <div class="col-10">PR128</div>
                  </div>
                </div>
                <hr class="hrSpacer" />
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fa fa-battery-half fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">Stock Holding</h5>
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
                  <div class="col-2">
                    <i
                      class="fas fa-plus fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Maximum Stock Limit'"
                    ></i>
                  </div>
                  <div class="col-10">No maximum set</div>
                </div>
                <div class="row mb-3">
                  <div class="col-2">
                    <i
                      class="fas fa-minus fa-fw pe-2 align-middle text-primary"
                      v-tooltip.top="'Minimum Stock Limit'"
                    ></i>
                  </div>
                  <div class="col-10">1500</div>
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
                  <i class="fa fa-camera fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">Image</h5>
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
                <img src="../../assets/images/paper-roll.jpg" class="w-100 pb-3" />
               
              </div>
            </div>
          </div>
        </div>


        <div class="col-12 ">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fa fa-history fa-fw fa-2x me-3"></i>
                  <div class="d-inline-block">
                    <h5 class="d-inline">History</h5>
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

                A GRID - to show stock movements
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Tree from "primevue/tree";
import SiteSelect from "../common/SiteSelect";

export default {
  name: "CompanyCard",

  components: {
    Tree,
    SiteSelect,
  },
  props: {
    pageMode: {
      default: "view",
    },
  },

  data() {
    return {
      selectedKey1: null,
      expandedKeys: {},

      unitLevels: [
        {
          key: "0",
          label: "Pallet",
          data: "Pallet",
          icon: "fas fa-fw fa-pallet",
          children: [
            {
              key: "0-0",
              label: "Outer Box",
              data: "Outer Box",
              icon: "fas fa-fw fa-boxes",
              children: [
                {
                  key: "0-0-0",
                  label: "Inner Box",
                  data: "Inner Box",
                  icon: "fas fa-fw fa-box",
                  children: [
                    {
                      key: "0-0-0-0",
                      label: "Product",
                      data: "Product",
                      icon: "fas fa-fw fa-sticky-note",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },

  watch: {
    async currentRecord() {
      let user = this.$store.getters["user/getCurrentRecord"];
      if (user.userid !== 0) {
        await this.$store.dispatch("company/FetchById", user.companyid);
      }
    },
  },
  methods: {
    setCompany(companySelected) {
      this.currentRecord.companyid = companySelected.companyid;
      this.currentCompanyRecord = companySelected;
    },
  },
  computed: {
    currentCompanyRecord: {
      get() {
        return this.$store.getters["company/getCurrentRecord"];
      },
      set(value) {
        console.log("set", value);
        this.$store.commit("company/setCurrentRecord", value);
      },
    },
    currentRecord: {
      get() {
        return this.$store.getters["user/getCurrentRecord"];
      },
      set(value) {
        console.log("set", value);
        this.$store.commit("user/setCurrentRecord", value);
      },
    },
    errors: {
      get() {
        return this.$store.getters["feature/getErrors"];
      },
    },
  },
};
</script>

<style scoped>
.p-tree {
  border: 0px;
  padding: 0px;
}
</style>
