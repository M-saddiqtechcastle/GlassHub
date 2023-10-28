
<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-start">
        <div class="flex-grow-1">
          <h5 class="card-title mb-4">Quick Create</h5>
        </div>
        <div class="flex-shrink-0">
          <div class="dropdown">
            <a
              class="dropdown-toggle text-reset"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="mdi mdi-wallet me-1"></i>
              <span class="d-none d-sm-inline-block"
                >Todays Shipments<i class="mdi mdi-chevron-down"></i
              ></span>
            </a>
            <div class="dropdown-menu dropdown-menu-end dropdown-menu-md">
              <div class="dropdown-item-text">
                <div>
                  <p class="text-muted mb-2">Expected</p>
                  <h5 class="mb-0">12 Shipments</h5>
                </div>
              </div>

              <div class="dropdown-divider"></div>

              <a class="dropdown-item" href="#">
                In : <span class="float-end">4</span>
              </a>
              <a class="dropdown-item" href="#">
                Out : <span class="float-end">7</span>
              </a>
              <a class="dropdown-item" href="#">
                Late : <span class="float-end">1</span>
              </a>

              <div class="dropdown-divider"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-content mt-4" style="min-height: 340px">
        <div class="tab-pane active" id="buy-tab" role="tabpanel">
          <form>
            <div class="mb-2">
              <div class="row">
              <label>Type:</label>
                <div class="col-xl-4 col-sm-4">
                  <div class="mb-3">
                    <label class="card-radio-label mb-2">
                      <input
                        type="radio"
                        name="currency"
                        id="buycurrencyoption1"
                        class="card-radio-input"
                        checked
                      />
                      <span class="card-radio">
                        <i
                          class="mdi mdi-consolidate font-size-24 text-warning align-middle me-2"
                        ></i>
                        <span>Production</span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-4">
                  <div class="mb-3">
                    <label class="card-radio-label mb-2">
                      <input
                        type="radio"
                        name="currency"
                        id="buycurrencyoption2"
                        class="card-radio-input"
                      />
                      <span class="card-radio">
                        <i
                          class="mdi mdi-note-plus font-size-24 text-primary align-middle me-2"
                        ></i>
                        <span>Purchase</span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-4">
                  <div class="mb-3">
                    <label class="card-radio-label mb-2">
                      <input
                        type="radio"
                        name="currency"
                        id="buycurrencyoption3"
                        class="card-radio-input"
                      />

                      <span class="card-radio">
                        <i
                          class="mdi mdi-layers-triple-outline font-size-24 text-info align-middle me-2"
                        ></i>
                        <span>Demand</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-2">
              <label>Select Party:</label>

              <div class="row">
                <div class="col-xl-6 col-sm-4">
                  <label class="card-radio-label mb-3">
                    <input
                      type="radio"
                      name="pay-method"
                      id="pay-methodoption1"
                      class="card-radio-input"
                    />

                    <span class="card-radio">
                      <i
                        class="mdi mdi-badge-account-outline font-size-20 text-primary align-middle me-2"
                      ></i>
                      <span>Customer / Supplier</span>
                    </span>
                  </label>
                </div>

                <div class="col-xl-6 col-sm-4">
                  <label class="card-radio-label mb-3">
                    <input
                      type="radio"
                      name="pay-method"
                      id="pay-methodoption3"
                      class="card-radio-input"
                      checked
                    />

                    <span class="card-radio">
                      <i
                        class="mdi mdi-map-marker font-size-20 text-primary align-middle me-2"
                      ></i>
                      <span>Address</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label>Item:</label>

              <div class="row">
                <div class="col-sm-6">
                  <div class="input-group mb-2 ">
                    <span class="input-group-text">Item</span>

                    <input
                      type="text"
                      class="form-control"
                      placeholder="Item Name"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="input-group mb-2">
                    <input
                      type="text"
                      class="form-control text-sm"
                      placeholder="Quantity"
                    />

                    <span class="input-group-text">Each</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-4">
              <button type="button" class="btn btn-success bg-gradient">
                Confirm
              </button>
            </div>
          </form>
        </div>

        <div class="tab-pane" id="sell-tab" role="tabpanel">
          <form>
            <div class="mb-2">
              <label>Currency :</label>

              <div class="row">
                <div class="col-xl-4 col-sm-4">
                  <div class="mb-3">
                    <label class="card-radio-label mb-2">
                      <input
                        type="radio"
                        name="currency"
                        id="sellcurrencyoption1"
                        class="card-radio-input"
                        checked
                      />

                      <span class="card-radio">
                        <i
                          class="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2"
                        ></i>
                        <span>Bitcoin</span>
                      </span>
                    </label>
                    <div>
                      <p class="text-muted font-size-13 mb-1">
                        Current price :
                      </p>
                      <h5 class="font-size-14">0.00016 BTC</h5>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-4">
                  <div class="mb-3">
                    <label class="card-radio-label mb-2">
                      <input
                        type="radio"
                        name="currency"
                        id="sellcurrencyoption2"
                        class="card-radio-input"
                      />

                      <span class="card-radio">
                        <i
                          class="mdi mdi-ethereum font-size-24 text-primary align-middle me-2"
                        ></i>
                        <span>Ethereum</span>
                      </span>
                    </label>
                    <div>
                      <p class="text-muted font-size-13 mb-1">
                        Current price :
                      </p>
                      <h5 class="font-size-14">0.0073 ETH</h5>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-sm-4">
                  <div class="mb-3">
                    <label class="card-radio-label mb-2">
                      <input
                        type="radio"
                        name="currency"
                        id="sellcurrencyoption3"
                        class="card-radio-input"
                      />

                      <span class="card-radio">
                        <i
                          class="mdi mdi-litecoin font-size-24 text-info align-middle me-2"
                        ></i>
                        <span>litecoin</span>
                      </span>
                    </label>

                    <div>
                      <p class="text-muted font-size-13 mb-1">
                        Current price :
                      </p>
                      <h5 class="font-size-14">0.025 LTC</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <label>Email :</label>
              <input
                type="email"
                placeholder="Enter Email"
                class="form-control"
              />
            </div>

            <div class="mb-3">
              <label>Add value :</label>

              <div class="row">
                <div class="col-sm-6">
                  <div class="input-group mb-2 currency-value">
                    <span class="input-group-text">Crypto value</span>
                    <input
                      type="text"
                      placeholder="Crypto Value"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="input-group mb-2">
                    <input
                      type="text"
                      placeholder="USD Amount"
                      class="form-control text-sm-end"
                    />
                    <span class="input-group-text">USD Amount</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-4">
              <button type="button" class="btn btn-danger bg-gradient">
                Sell Crypto currency
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quickAdd",
};
</script>
