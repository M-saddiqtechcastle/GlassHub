<template>
  <Layout :pagetitle="'Bay Planning'">
    <div class="bayGanttContainer pt-4" ref="ganttContainer">
      <div class="row" ref="ganttControls">
        <div class="col-md-6">
          <i
            class="fas fa-search-minus fa-fw mx-2"
            v-tooltip.top="'Zoom Out Visible Days'"
          ></i>
          <i
            class="fas fa-search-plus fa-fw mx-2"
            @click="addDate()"
            v-tooltip.top="'Zoom In Visible Days'"
          ></i>
          <i
            class="fas fa-angle-double-left fa-fw mx-2"
            v-tooltip.top="'Move Back 1 Week'"
          ></i>
          <i
            class="fas fa-angle-left fa-fw mx-2"
            v-tooltip.top="'Move Back 1 Day'"
          ></i>
          <Calendar
            inputId="range"
            v-model="dateRange"
            selectionMode="range"
            :manualInput="false"
            v-tooltip.top="'Set Date Range'"
          />
          <i
            class="fas fa-angle-right fa-fw mx-2"
            v-tooltip.top="'Move Forward 1 Day'"
          ></i>
          <i
            class="fas fa-angle-double-right fa-fw mx-2"
            v-tooltip.top="'Move Forward 1 Week'"
          ></i>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <NavigationButtons
              @add="add"
              @save="save"
              @cancel="cancel"
              @setPageMode="setPageMode"
              :store="store"
              :pageMode="pageMode"
            />
          </div>
        </div>
      </div>
      <!-- content-->
      <div class="container-fluid">
        <div class="card">
          <div class="card-body">
            <Splitter layout="vertical" class="splitter ganttChartContainer">
              <SplitterPanel class="splitterPanel" :size="65" :minSize="10">
                <BayGantt />
              </SplitterPanel>
              <SplitterPanel class="splitterPanel" :size="35" :minSize="10">
                <TopMenu
                  :pageView="pageView"
                  @changeView="changeView"
                  addPage=""
                />
                <BayTrailersCardGrid />
              </SplitterPanel>
            </Splitter>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { ref } from "vue";
import pageMixin from "../../../common/pageMixin.js";
import Calendar from "primevue/calendar";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import NavigationButtons from "../../../components/page/NavigationButtons";
import BayGantt from "../../../components/bay/BayGantt";

import TopMenu from "../../../components/page/TopMenu";
import BayTrailersCardGrid from "../../../components/bay/BayTrailersCardGrid";

export default {
  name: "bayplanning",
  mixins: [pageMixin],
  components: {
    Calendar,
    Splitter,
    SplitterPanel,
    NavigationButtons,
    BayGantt,
    TopMenu,
    BayTrailersCardGrid,
  },

  setup() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    const minDate = ref(new Date());
    const maxDate = ref(new Date());
    const invalidDates = ref();

    const dateRange = ref();

    minDate.value.setMonth(prevMonth);
    minDate.value.setFullYear(prevYear);
    maxDate.value.setMonth(nextMonth);
    maxDate.value.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    invalidDates.value = [today, invalidDate];

    return { invalidDates, dateRange };
  },

  data() {
    return {
      store: "bay",
      dataGridRef: "BayDataGrid",
      ganttControlsHeight: 0,
      ganttContainerHeight: 0,

      defaultRecord: {
        trailerid: 0,
      },
      addPage: "bay",
    };
  },

  mounted() {
    this.ganttControlsHeight = this.$refs.ganttControls.clientHeight + "px";
    this.ganttContainerHeight = this.$refs.ganttContainer.clientHeight + "px";
  },

  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["bay/getCurrentRecord"];
      },
      set(value) {
        this.$store.commit("bay/setCurrentRecord", value);
      },
    },
    errors: {
      get() {
        return this.$store.getters["bay/getErrors"];
      },
    },
    pageMode: {
      get() {
        return this.$store.getters["bay/getPageMode"];
      },
    },
  },
};
</script>

<style scoped>
/* bayGanttContainer sizing is fixed in themeOverrides.scss as it uses variables*/

/*.gantContainer {
  max-height: 24em;
}

.trailerContainer {
  max-height: 10em;
}*/

i:hover {
  cursor: pointer;
}

.bayGanttContainer {
  align-content: flex-start;
  outline: 0px solid #000;
}

.ganttChartContainer {
  height: calc(
    v-bind(ganttContainerHeight) - v-bind(ganttControlsHeight) - 40px
  );
}

.splitter {
  border: 0px;
}

.splitterPanel {
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>

<style>
.p-splitter-gutter {
  background: #eaeaea !important;
  margin-top: 2em;
}

.p-splitter-gutter-handle {
  background-color: rgb(84, 89, 101) !important;
}
</style>
