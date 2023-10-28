<template>
  <div class="headmenu">
    <button class="btn d-inline" @click="calculateGroups">
      <i class="bx bx-plus me-1"></i> Calculate Groups
    </button>
    <div class="d-inline-block mt-3 mt-xl-0 ms-xl-3 align-items-center">
      <ul class="list-group list-group-horizontal">
        <li
          class="list-group-item"
          @click="changeView('6')"
          :class="{ active: pageView === '6' }"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="List"
          aria-label="List"
        >
          6hr
        </li>
        <li
          @click="changeView('12')"
          :class="{ active: pageView === '12' }"
          class="list-group-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="List"
          aria-label="List"
        >
          12hr
        </li>
        <li
          @click="changeView('24')"
          :class="{ active: pageView === '24' }"
          class="list-group-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="List"
          aria-label="List"
        >
          24hr
        </li>
        <li
          @click="changeView('48')"
          :class="{ active: pageView === '48' }"
          class="list-group-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="List"
          aria-label="List"
        >
          2days
        </li>
        <!--    <li
          class="list-group-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title=""
          data-bs-original-title="List"
          aria-label="List"
        >
          +
        </li> -->
        <li class="list-group-item">
          <button
            type="button"
            class="btn btn-outline-primary d-inline"
            @click="toBePlannedSidePanelVisible = true"
          >
            Unplanned
            <i class="fas fa-truck fa-fw fa-15x"></i>
            <span class="badge bg-primary ml">{{
              UnplannedTransportDropsCount
            }}</span>
          </button>
        </li>
        <li class="list-group-item">
          <button
            type="button"
            class="btn btn-outline-primary d-inline"
            @click="plannedSidePanelVisible = true"
          >
            Planned
            <i class="fas fa-truck-loading fa-fw fa-15x"></i>
            <span class="badge bg-primary ml">{{
              PlannedTransportDropsCount
            }}</span>
          </button>
        </li>
        <li class="list-group-item">Demand Lines: {{ TotalDemandLines }}</li>
      </ul>
    </div>
    <div>From {{ horizonTimeStart }} - To {{ horizonTimeEnd }}</div>
    <div>
      <i
        class="fas fa-ellipsis-h fa-fw fa-125x black"
        @click="modalVisible = true"
      ></i>
    </div>
    <Dialog
      header="Grouping Options"
      v-model:visible="modalVisible"
      :modal="true"
      :draggable="false"
      :dismissableMask="true"
    >
      <div class="row">
        <div class="col-6">Include Outstanding</div>
        <div class="col-6">
          <Checkbox v-model="searchOptions.includeOutstanding" :binary="true" />
        </div>
      </div>
      <div class="row">
        <div class="col-6">Group By Shipping Method</div>
        <div class="col-6">
          <Checkbox v-model="searchOptions.groupByMethod" :binary="true" />
        </div>
      </div>
      <div class="row">
        <div class="col-6">Group By City</div>
        <div class="col-6">
          <Checkbox v-model="searchOptions.groupByCity" :binary="true" />
        </div>
      </div>
      <div class="row">
        <div class="col-6">Group By Address</div>
        <div class="col-6">
          <Checkbox v-model="searchOptions.groupByAddress" :binary="true" />
        </div>
      </div>
      <template #footer>
        <Button
          label="Close"
          icon="pi pi-check"
          @click="modalVisible = false"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import Button from "primevue/button"
import Checkbox from "primevue/checkbox"

export default {
  name: "TransportPlanningTopBar",
  components: {
    Button,
    Checkbox,
  },
  methods: {
    async calculateGroups() {
      await this.$store.dispatch(`transportplanning/calculateGroups`)
    },
    changeView(view) {
      this.pageView = view
    },
    changeHorizon(value) {
      let includeOutstanding =
        this.$store.getters["transportplanning/getSearchOptions"]
          .includeOutstanding
      this.$store.dispatch("transportplanning/setHorizonValue", {
        horizonLength: value,
        includeOutstanding,
      })
    },
  },
  data() {
    return {
      modalVisible: false,
    }
  },
  computed: {
    pageView: {
      get() {
        return this.$store.getters["transportplanning/getPageView"]
      },
      set(value) {
        this.changeHorizon(value)
      },
    },
    horizonTimeStart: {
      get() {
        return this.$store.getters["transportplanning/getHorizonTimeStart"]
      },
    },
    horizonTimeEnd: {
      get() {
        return this.$store.getters["transportplanning/getHorizonTimeEnd"]
      },
    },
    toBePlannedSidePanelVisible: {
      get() {
        return this.$store.getters[
          "transportplanning/getToBePlannedSidePanelVisible"
        ]
      },
      set(value) {
        this.$store.commit(
          "transportplanning/setToBePlannedSidePanelVisible",
          value
        )
      },
    },
    plannedSidePanelVisible: {
      get() {
        return this.$store.getters[
          "transportplanning/getPlannedSidePanelVisible"
        ]
      },
      set(value) {
        this.$store.commit(
          "transportplanning/setPlannedSidePanelVisible",
          value
        )
      },
    },
    UnplannedTransportDropsCount: {
      cache: false,
      get() {
        if (
          this.$store?.getters["transportplanning/getUnplannedTransportDrops"]
        ) {
          return this.$store.getters[
            "transportplanning/getUnplannedTransportDrops"
          ].length
        }

        return 0
      },
    },
    PlannedTransportDropsCount: {
      cache: false,
      get() {
        return this.$store.getters["transportplanning/getPlannedTransportDrops"]
          .length
      },
    },
    searchOptions: {
      get() {
        return this.$store.getters["transportplanning/getSearchOptions"]
      },
      set(options) {
        this.$store.commit("transportplanning/setSearchOptions", options)
      },
    },
    TotalDemandLines: {
      get() {
        return this.$store.getters["transportplanning/getTotalDemandsFound"]
      },
    },
  },
  watch: {
    searchOptions: {
      handler() {
        this.changeHorizon(this.pageView)
      },
      deep: true,
    },
  },
  mounted() {
    this.changeView("6")
  },
}
</script>
