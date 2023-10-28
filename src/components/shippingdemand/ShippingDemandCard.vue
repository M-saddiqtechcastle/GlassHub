<template>
  <div>
    <div class="container-fluid" v-if="pageMode === 'view'">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="demandCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-pallet fa-fw fa-2x"></i>

                  <div class="d-block head-title">
                    <h5>Demand</h5>
                    <h6>#{{ currentRecord?.shippingdemandid }}</h6>
                  </div>
                </div>
                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseDemand"
                    aria-expanded="true"
                    aria-controls="collapseDemand"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseDemand"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#demandCard"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-4">
                  <div class="col-12 mb-3 text-center">
                    <ShippingDemandStatusSelect
                      :propStatus="currentRecord.demandstatus"
                      :error="errors?.demandstatus"
                      :disabled="pageMode === 'view'"
                      @setDemandStatus="setDemandStatus"
                    />
                  </div>

                  <div class="col-12 my-auto mb-3">
                    <DateInput
                      v-model="currentRecord.requiredshipdate"
                      label="Required Date Time"
                      :error="errors?.requiredshipdate"
                      disabled
                    />
                  </div>
                  <div class="col-12 my-auto">
                    <DateInput
                      v-model="currentRecord.plannedshipdate"
                      label="Planned Date Time"
                      :error="errors?.plannedshipdate"
                      disabled
                    />
                  </div>
                  {{ currentRecord.linkcode }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="customerCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-user-friends fa-fw fa-2x"></i>
                  <div class="d-block head-title">
                    <h5>Customer</h5>
                  </div>
                </div>
                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseCustomer"
                    aria-expanded="true"
                    aria-controls="collapseCustomer"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseCustomer"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#customerCard"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-4 text-center">
                  <div class="col-12">
                    <h5>{{ currentRecord?.customername }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="transportmethodCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-subway fa-fw fa-2x"></i>
                  <div class="d-block head-title">
                    <h5>Transport Method</h5>
                  </div>
                </div>
                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTransportMethod"
                    aria-expanded="true"
                    aria-controls="collapseTransportMethod"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseTransportMethod"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#transportmethodCard"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-4 text-center">
                  <div class="col-12">
                    <h5>{{ currentRecord?.transportmethodcode }}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="insightsCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-magic fa-fw fa-2x"></i>
                  <div class="d-block head-title">
                    <h5>Insights</h5>
                  </div>
                </div>
                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseInsights"
                    aria-expanded="true"
                    aria-controls="collapseInsights"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseInsights"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#insightsCard"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-4 text-center">
                  <div class="col-12 mb-2">Insights coming soon...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card accordion" id="addressCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-map-marker-alt fa-fw fa-2x"></i>
                  <div class="d-block head-title">
                    <h5>Address</h5>
                  </div>
                </div>
                <div class="col-2 p-0 justify-content-top">
                  <span
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseAddress"
                    aria-expanded="true"
                    aria-controls="collapseAddress"
                    >&nbsp;</span
                  >
                </div>
              </div>
            </div>
            <div
              id="collapseAddress"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#addressCard"
            >
              <div class="card-body hrTop">
                <hr />
                <div class="row mb-4 text-start">
                  <div class="col-12 col-sm-4 col-lg-4 col-xl-3">
                    <p>
                      {{ currentRecord.addressline1
                      }}<br v-if="currentRecord?.addressline1" />
                      {{ currentRecord.addressline2
                      }}<br v-if="currentRecord?.addressline2" />
                      {{ currentRecord.addresstown
                      }}<br v-if="currentRecord?.addresstown" />
                      {{ currentRecord.addresscounty
                      }}<br v-if="currentRecord?.addresscounty" />
                      {{ currentRecord.addresscountry
                      }}<br v-if="currentRecord?.addresscountry" />
                      {{ currentRecord.addresspostcode }}
                    </p>
                  </div>
                  <div class="col-12 col-sm-8 col-lg-8 col-xl-9">
                    <Map
                      :addresslong="currentRecord.addresslong"
                      :addresslat="currentRecord.addresslat"
                      width="100%"
                      height="250px"
                      zoom="14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container-fluid"
      v-if="pageMode === 'edit' || pageMode === 'add'"
    >
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="demandCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-12 headericon">
                  <i class="fas fa-pallet fa-fw fa-2x"></i>
                  <h5 class="d-inline">
                    Demand #{{ currentRecord?.shippingdemandid }}
                  </h5>
                </div>
              </div>
            </div>

            <div class="card-body hrTop">
              <hr />
              <div class="row mb-4 text-center">
                <div class="col-12 mb-3">
                  <ShippingDemandStatusSelect
                    :propStatus="currentRecord.demandstatus"
                    :error="errors?.demandstatus"
                    :disabled="pageMode === 'view'"
                    @setDemandStatus="setDemandStatus"
                  />
                </div>

                <div class="col-12 my-auto mb-3">
                  <DateInput
                    v-model="currentRecord.requiredshipdate"
                    label="Required Date Time"
                    :error="errors?.requiredshipdate"
                  />
                </div>
                <div class="col-12 my-auto">
                  <DateInput
                    v-model="currentRecord.plannedshipdate"
                    label="Planned Date Time"
                    :error="errors?.requiredshipdate"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="demandCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-12 headericon">
                  <i class="fas fa-user-friends fa-fw fa-2x"></i>
                  <h5 class="d-inline">Customer</h5>
                </div>
              </div>
            </div>

            <div class="card-body hrTop">
              <hr />
              <div class="row mb-4 text-center">
                <div class="col-12 mb-2">
                  <RecordFinder
                    :limitDisplayCols="['name', 'phone', 'email']"
                    title="Customer Select"
                    store="customer"
                    gridid="customerRecordFinder"
                    dataKey="customerid"
                    label="Select Customer"
                    @handleSelection="selectCustomer"
                  />
                </div>
                <div class="col-12">
                  <h5>{{ currentRecord?.customername }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="demandCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-12 headericon">
                  <i class="fas fa-subway fa-fw fa-2x"></i>
                  <h5 class="d-inline">Transport Method</h5>
                </div>
              </div>
            </div>

            <div class="card-body hrTop">
              <hr />
              <div class="row mb-4 text-center">
                <div class="col-12 mb-2">
                  <RecordFinder
                    :limitDisplayCols="[
                      'transportmethodcode',
                      'transportmethoddesc',
                      'linkcode',
                    ]"
                    title="Transport Method Select"
                    store="transportmethod"
                    gridid="transportMethodRecordFinder"
                    dataKey="transportmethodid"
                    label="Select Method"
                    @handleSelection="selectMethod"
                  />
                </div>
                <div class="col-12">
                  <h5>{{ currentRecord?.transportmethodcode }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
          <div class="card accordion" id="demandCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-12 headericon">
                  <i class="fas fa-link fa-fw fa-2x"></i>
                  <h5 class="d-inline">Link Code</h5>
                </div>
              </div>
            </div>

            <div class="card-body hrTop">
              <hr />
              <div class="row mb-4 text-center">
                <div class="col-12 mb-2">
                  <TextInput
                    v-model="currentRecord.linkcode"
                    label="Link Code"
                    :error="errors?.linkcode"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card accordion" id="demandCard">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-12 headericon">
                  <i class="fas fa-map-marker-alt fa-fw fa-2x"></i>
                  <h5 class="d-inline">Address</h5>
                </div>
              </div>
            </div>

            <div class="card-body hrTop">
              <hr />
              <div class="row mb-4 text-center">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                  <RecordFinder
                    :limitDisplayCols="[
                      'addressname',
                      'addressline1',
                      'addressline2',
                      'addresstown',
                      'addresscounty',
                      'addresspostcode',
                      'addresscountry',
                    ]"
                    title="Customer Address Select"
                    store="customeraddress"
                    gridid="customerAddressRecordFinder"
                    dataKey="customeraddressid"
                    label="Select Customer Address"
                    :limitQuery="getCustomerQuery()"
                    @handleSelection="selectAddress"
                  />
                </div>
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                  <AddressLookup
                    @handleSelection="selectAddress"
                    buttonLabel="Manual Address Lookup"
                  />
                </div>
              </div>
              <div class="row mb-4 text-center">
                <div class="col-12">
                  <AddressCard store="shippingdemand" view="horizontal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container-fluid"
      v-if="pageMode === 'edit' || pageMode === 'view'"
    >
      <div class="card card-rounded-header accordion" id="demandlinescard">
        <div class="card-header text-start">
          <div class="row">
            <div class="col-10 headericon">
              <i class="fas fa-list fa-fw fa-2x"></i>
              <div class="d-inline-block">
                <h5 class="d-inline">Demand Lines</h5>
              </div>
            </div>
            <div class="col-2 p-0 justify-content-top">
              <span
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseDemandLines"
                aria-expanded="true"
                aria-controls="collapseDemandLines"
                >&nbsp;</span
              >
            </div>
          </div>
        </div>
        <div
          id="collapseDemandLines"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#demandlinescard"
        >
          <div class="card-body">
            <div class="row">
              <div class="col-6 text-start">
                <div class="btn addBtn" @click="add">
                  <i class="bx bx-plus me-1"></i> Add New
                </div>
              </div>

              <div class="col-6 text-end">
                <ViewTypeButtons store="shippingdemandline" />
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <ShippingDemandLineDataGrid
                  v-if="linePageView === 'list'"
                  ref="ShippingDemandLineDataGrid"
                  :shippingdemandid="currentRecord.shippingdemandid"
                />
                <ShippingDemandLineCardGrid
                  v-if="linePageView === 'grid'"
                  ref="ShippingDemandLineCardGrid"
                  :shippingdemandid="currentRecord.shippingdemandid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import Button from "primevue/button";
import RecordFinder from "../recordfinder/RecordFinder";
import queryObject from "../../common/queryObject";
import { operatorType } from "../../common/queryObject";
import AddressCard from "../common/AddressCard";
import AddressLookup from "../common/AddressLookup";
import ShippingDemandLineDataGrid from "./ShippingDemandLineDataGrid";
import ShippingDemandLineCardGrid from "./ShippingDemandLineCardGrid";
import ViewTypeButtons from "../page/ViewTypeButtons";
import DialogCrudMixin from "../../common/DialogCrudMixin.js";
import Map from "../common/Map";
import ShippingDemandStatusSelect from "./ShippingDemandStatusSelect";

export default {
  name: "ShippingDemandCard",
  mixins: [DialogCrudMixin],
  components: {
    RecordFinder,
    AddressCard,
    AddressLookup,
    ShippingDemandLineDataGrid,
    ShippingDemandLineCardGrid,
    ViewTypeButtons,
    Map,
    ShippingDemandStatusSelect,
  },
  props: {
    pageMode: {
      default: "view",
    },
  },
  data() {
    return {
      modalVisible: false,
      store: "shippingdemandline",
      dataGridRef: "ShippingDemandLineGrid",
      defaultRecord: {
        shippingdemandid: 0,
        shippingdemandlineid: 0,
      },
    };
  },
  created() {
    this.defaultRecord.shippingdemandid = this.currentRecord.shippingdemandid;
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["shippingdemand/getCurrentRecord"];
      },
      set(value) {
        this.$store.commit("shippingdemand/setCurrentRecord", value);
      },
    },
    errors: {
      get() {
        return this.$store.getters["shippingdemand/getErrors"];
      },
    },
    linePageView: {
      get() {
        return this.$store.getters["shippingdemandline/getPageView"];
      },
    },
  },
  methods: {
    add() {
      if (this.linePageView === "grid") {
        this.$refs.ShippingDemandLineCardGrid.add();
      } else {
        this.$refs.ShippingDemandLineDataGrid.add();
      }
    },
    setDemandStatus(status) {
      this.currentRecord.demandstatus = status;
    },
    getCustomerQuery() {
      let queryobject = new queryObject();

      if (this.currentRecord?.customerid)
        queryobject.addCriteria({
          field: "customerid",
          value: this.currentRecord.customerid,
          operator: operatorType.equals,
        });

      return queryobject.getQueryParams();
    },
    selectMethod(method) {
      this.currentRecord.transportmethodid = method.transportmethodid;
      this.currentRecord.transportmethodcode = method.transportmethodcode;
    },
    selectCustomer(customer) {
      this.currentRecord.customerid = customer.customerid;
      this.currentRecord.customername = customer.name;
    },
    selectAddress(address) {
      this.currentRecord.addressline1 = address.addressline1;
      this.currentRecord.addressline2 = address.addressline2;
      this.currentRecord.addresstown = address.addresstown;
      this.currentRecord.addresscounty = address.addresscounty;
      this.currentRecord.addresscountry = address.addresscountry;
      this.currentRecord.addresspostcode = address.addresspostcode;
      this.currentRecord.addresslat = address.addresslat;
      this.currentRecord.addresslong = address.addresslong;

      // if customeraddress set customer id
      if (address?.customerid) {
        if (parseInt(address.customerid) > 0) {
          this.currentRecord.customerid = address.customerid;
        }
      }
    },
    async copyRecord(copyrolename) {
      this.$store.dispatch("application/setLoading", true);
      let response = await this.$store.dispatch("shippingdemand/copyUserRole", {
        userroleid: this.userroleid,
        userrolename: copyrolename,
      });

      if (response.errors.length === 0) {
        this.$toast.add({
          severity: "success",
          summary: "Updated",
          detail: "User Updated",
          life: 3000,
        });
        this.$store.commit("shippingdemand/setPageMode", "view");
        this.$store.commit("shippingdemand/setCurrentRecord", response.dataset);
        this.$store.commit("shippingdemand/setErrors", response.errors);
        this.$router.push(`/shippingdemands`);
      } else {
        this.$store.commit("shippingdemand/setCopyErrors", response.errors);
      }

      this.$store.dispatch("application/setLoading", false);
    },
    duplicate() {
      let thisObject = this;
      this.$store.commit("shippingdemand/setCopyErrors", {});
      const dialogRef = this.$dialog.open(
        {},
        {
          props: {
            header: `Copy Demand`,
            style: {
              width: "50vw",
            },
            breakpoints: {
              "960px": "75vw",
              "640px": "90vw",
            },
            errors: thisObject.copyErrors,
          },
          modal: true,
          templates: {
            footer: () => {
              return [
                h(Button, {
                  label: "Cancel",
                  icon: "pi pi-times",
                  class: "p-button-danger",
                  onClick: () => dialogRef.close(),
                  autofocus: false,
                }),
                h(Button, {
                  label: "Save",
                  icon: "pi pi-check",
                  onClick: () => {
                    this.copyRecord(
                      this.$store.getters["shippingdemand/getCopy"]
                    );
                  },
                  autofocus: true,
                }),
              ];
            },
          },
          onClose: (options) => {
            options;
          },
          handleSelection(event) {
            thisObject.$emit("handleSelection", event);
            this.close;
          },
        }
      );
    },
  },
};
</script>

<style scoped>
</style>