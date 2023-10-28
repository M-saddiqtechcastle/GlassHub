<template>
  <div class="row" v-if="pageMode === 'view'">
    <div class="col-md-6">
      <div class="row">
        <div class="col-12">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-city fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">{{ currentRecord.companyname }}</h5>
                </div>

                <div class="col-1 my-auto"></div>
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
                  <div class="col-6">
                    <div class="row">
                      <div class="col-12">
                        <label class="inp">
                          <input
                            type="text"
                            value="01234"
                            placeholder="&nbsp;"
                            disabled
                          />
                          <span class="label">Company Name</span>
                        </label>
                        <label class="inp">
                          <input
                            type="text"
                            value="01234"
                            placeholder="&nbsp;"
                            disabled
                          />
                          <span class="label">Address</span>
                        </label>
                        <label class="inp">
                          <input
                            type="text"
                            value="01234"
                            placeholder="&nbsp;"
                            disabled
                          />
                          <span class="label">Phone Number</span>
                        </label>
                        <label class="inp">
                          <input
                            type="text"
                            value="01234"
                            placeholder="&nbsp;"
                            disabled
                          />
                          <span class="label">Email Address</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">Logo <br /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-building fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">Sites</h5>
                </div>

                <div class="col-1 my-auto"></div>
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
                  <div class="col-6 text-start">
                    <div class="btn addBtn" @click="add">
                      <i class="bx bx-plus me-1"></i> Add New
                    </div>
                  </div>

                  <div class="col-6 text-end">
                    <ViewTypeButtons store="site" />
                  </div>
                </div>
                <div class="row" v-if="sitePageView === 'list'">
                  <SiteDataGrid
                    ref="SiteDataGrid"
                    :companyid="currentRecord.companyid"
                    @edit="edit"
                    @onRowDoubleClick="edit"
                  />
                </div>
                <div class="row" v-if="sitePageView === 'grid'">
                  <div class="col">
                    <SiteCardGrid
                      :companyid="currentRecord.companyid"
                      @edit="edit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="row">
        <div class="col-6">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-pencil-ruler fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">Units</h5>
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
                  <div class="col-6">Small Length:</div>
                  <div class="col-6">{{ currentRecord.smalllengthunit }}</div>
                  <div class="col-6">Large Length:</div>
                  <div class="col-6">{{ currentRecord.largelengthunit }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6">Small Weight:</div>
                  <div class="col-6">{{ currentRecord.smallweightunit }}</div>
                  <div class="col-6">Large Weight:</div>
                  <div class="col-6">{{ currentRecord.largeweightunit }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6">Volume:</div>
                  <div class="col-6">{{ currentRecord.volumeunit }}</div>
                  <div class="col-6">Area:</div>
                  <div class="col-6">{{ currentRecord.areaunit }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6">Qty:</div>
                  <div class="col-6">{{ currentRecord.qtyunit }}</div>
                  <div class="col-6">Time:</div>
                  <div class="col-6">{{ currentRecord.timeunit }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row" v-if="pageMode === 'edit' || pageMode === 'add'">
    <div class="col-md-6">
      <div class="row">
        <div class="col-12">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-city fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">{{ currentRecord.companyname }}</h5>
                </div>

                <div class="col-1 my-auto"></div>
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
                  <div class="col-6">
                    <div class="row">
                      <div class="col-12">
                        <TextInput
                          v-model="currentRecord.companyname"
                          label="Company Name"
                          :error="errors?.companyname"
                        />
                        <TextInput
                          v-model="currentRecord.linkcode"
                          label="Link Code"
                          :error="errors?.linkcode"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-6">Logo <br /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-building fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">Sites</h5>
                </div>

                <div class="col-1 my-auto"></div>
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
                  <div class="col-6 text-start">
                    <div class="btn addBtn" @click="add">
                      <i class="bx bx-plus me-1"></i> Add New
                    </div>
                  </div>

                  <div class="col-6 text-end">
                    <ViewTypeButtons store="site" />
                  </div>
                </div>
                <div class="row" v-if="sitePageView === 'list'">
                  <SiteDataGrid
                    ref="SiteDataGrid"
                    :companyid="currentRecord.companyid"
                    @edit="edit"
                    @onRowDoubleClick="edit"
                  />
                </div>
                <div class="row" v-if="sitePageView === 'grid'">
                  <div class="col">
                    <SiteCardGrid :companyid="currentRecord.companyid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="row">
        <div class="col-12">
          <div class="card accordion" id="accordionExample">
            <div class="card-header text-start">
              <div class="row">
                <div class="col-10 headericon">
                  <i class="fas fa-pencil-ruler fa-fw fa-2x me-3"></i>
                  <h5 class="d-inline">Units</h5>
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
                  <div class="col-6">Small Length:</div>
                  <div class="col-3">
                    {{ currentRecord.smalllengthunit }}
                  </div>
                  <div class="col-3">
                    <RecordFinder
                      :limitDisplayCols="[
                        'unitid',
                        'unit',
                        'typename',
                        'metric',
                      ]"
                      :limitQuery="getQueryForType(1)"
                      title="Unit Select"
                      store="unit"
                      gridid="unitrecordfinder"
                      dataKey="unitid"
                      label="Change"
                      @handleSelection="handleUnitSelection"
                      passThoughToHandleSelection="smalllength"
                    />
                  </div>
                  <div class="col-6">Large Length:</div>
                  <div class="col-3">
                    {{ currentRecord.largelengthunit }}
                  </div>
                  <div class="col-3">
                    <RecordFinder
                      :limitDisplayCols="[
                        'unitid',
                        'unit',
                        'typename',
                        'metric',
                      ]"
                      :limitQuery="getQueryForType(1)"
                      title="Unit Select"
                      store="unit"
                      gridid="unitrecordfinder"
                      dataKey="unitid"
                      label="Change"
                      @handleSelection="handleUnitSelection"
                      passThoughToHandleSelection="largelength"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6">Small Weight:</div>
                  <div class="col-3">
                    {{ currentRecord.smallweightunit }}
                  </div>
                  <div class="col-3">
                    <RecordFinder
                      :limitDisplayCols="[
                        'unitid',
                        'unit',
                        'typename',
                        'metric',
                      ]"
                      :limitQuery="getQueryForType(4)"
                      title="Unit Select"
                      store="unit"
                      gridid="unitrecordfinder"
                      dataKey="unitid"
                      label="Change"
                      @handleSelection="handleUnitSelection"
                      passThoughToHandleSelection="smallweight"
                    />
                  </div>
                  <div class="col-6">Large Weight:</div>
                  <div class="col-3">
                    {{ currentRecord.largeweightunit }}
                  </div>
                  <div class="col-3">
                    <RecordFinder
                      :limitDisplayCols="[
                        'unitid',
                        'unit',
                        'typename',
                        'metric',
                      ]"
                      :limitQuery="getQueryForType(4)"
                      title="Unit Select"
                      store="unit"
                      gridid="unitrecordfinder"
                      dataKey="unitid"
                      label="Change"
                      @handleSelection="handleUnitSelection"
                      passThoughToHandleSelection="largeweight"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6">Volume:</div>
                  <div class="col-3">
                    {{ currentRecord.volumeunit }}
                  </div>
                  <div class="col-3">
                    <RecordFinder
                      :limitDisplayCols="[
                        'unitid',
                        'unit',
                        'typename',
                        'metric',
                      ]"
                      :limitQuery="getQueryForType(3)"
                      title="Unit Select"
                      store="unit"
                      gridid="unitrecordfinder"
                      dataKey="unitid"
                      label="Change"
                      @handleSelection="handleUnitSelection"
                      passThoughToHandleSelection="volume"
                    />
                  </div>
                  <div class="col-6">Area:</div>
                  <div class="col-3">
                    {{ currentRecord.areaunit }}
                  </div>
                  <div class="col-3">
                    <RecordFinder
                      :limitDisplayCols="[
                        'unitid',
                        'unit',
                        'typename',
                        'metric',
                      ]"
                      :limitQuery="getQueryForType(2)"
                      title="Unit Select"
                      store="unit"
                      gridid="unitrecordfinder"
                      dataKey="unitid"
                      label="Change"
                      @handleSelection="handleUnitSelection"
                      passThoughToHandleSelection="area"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-6">Qty:</div>
                  <div class="col-3">
                    {{ currentRecord.qtyunit }}
                  </div>
                  <div class="col-3">
                    <RecordFinder
                      :limitDisplayCols="[
                        'unitid',
                        'unit',
                        'typename',
                        'metric',
                      ]"
                      :limitQuery="getQueryForType(6)"
                      title="Unit Select"
                      store="unit"
                      gridid="unitrecordfinder"
                      dataKey="unitid"
                      label="Change"
                      @handleSelection="handleUnitSelection"
                      passThoughToHandleSelection="qty"
                    />
                  </div>
                  <div class="col-6">Time:</div>
                  <div class="col-3">
                    {{ currentRecord.timeunit }}
                  </div>
                  <div class="col-3">
                    <RecordFinder
                      :limitDisplayCols="[
                        'unitid',
                        'unit',
                        'typename',
                        'metric',
                      ]"
                      :limitQuery="getQueryForType(5)"
                      title="Unit Select"
                      store="unit"
                      gridid="unitrecordfinder"
                      dataKey="unitid"
                      label="Change"
                      @handleSelection="handleUnitSelection"
                      passThoughToHandleSelection="time"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Dialog
    header="Site"
    v-model:visible="modalVisible"
    :modal="true"
    :draggable="false"
    :dismissableMask="true"
  >
    <SiteCard />
    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        class="p-button-danger"
        @click="modalVisible = false"
      />
      <Button label="Save" icon="pi pi-check" @click="save" />
    </template>
  </Dialog>
</template>

<script>
import RecordFinder from "../recordfinder/RecordFinder"
import queryObject from "../../common/queryObject"
import { operatorType } from "../../common/queryObject"
import ViewTypeButtons from "../page/ViewTypeButtons"
import DialogCrudMixin from "../../common/DialogCrudMixin.js"
import SiteCard from "./SiteCard"
import SiteDataGrid from "./SiteDataGrid"
import SiteCardGrid from "./SiteCardGrid"

export default {
  name: "CompanyCard",
  mixins: [DialogCrudMixin],
  data() {
    return {
      modalVisible: false,
      store: "site",
      dataGridRef: "SiteDataGrid",
      defaultRecord: {
        siteid: 0,
        companyid: 0,
      },
    }
  },
  components: {
    RecordFinder,
    SiteCardGrid,
    ViewTypeButtons,
    SiteDataGrid,
    SiteCard,
  },
  props: {
    pageMode: {
      default: "view",
    },
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["company/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("company/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["company/getErrors"]
      },
    },
    sitePageView: {
      get() {
        return this.$store.getters["site/getPageView"]
      },
    },
  },
  watch: {
    currentRecord() {
      this.defaultRecord.companyid = this.currentRecord.companyid
    },
  },
  methods: {
    getQueryForType(type) {
      let queryobject = new queryObject()
      queryobject.addCriteria({
        field: "type",
        value: type,
        operator: operatorType.equals,
      })

      return queryobject.getQueryParams()
    },
    handleUnitSelection(selection) {
      this.currentRecord[selection.passThrough + "unitid"] =
        selection.event.unitid
      this.currentRecord[selection.passThrough + "unit"] = selection.event.unit
    },
  },
}
</script>

<style scoped></style>
