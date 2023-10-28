<template>
  <div>
    <g-gantt-chart
      :chart-start="startDate"
      :chart-end="endDate"
      precision="hour"
      bar-start="myBeginDate"
      bar-end="myEndDate"
      color-scheme="grove"
      push-on-overlap
      @contextmenu-bar="onContextmenuBar($event.bar, $event.e, $event.datetime)"
    >
      <g-gantt-row label="Bay 1" :bars="row1BarList" />
      <g-gantt-row label="Bay 2" :bars="row2BarList" />
    </g-gantt-chart>   
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDate: "2021-07-12 00:00",
      endDate: "2021-07-14 00:00",
    };
  },

  computed: {
    addDate() {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 1);
      return endDate;
    },
  },
};
</script>

<script setup>
import { ref } from "vue";

const row1BarList = ref([
  {
    myBeginDate: "2021-07-13 13:00",
    myEndDate: "2021-07-13 19:00",
    ganttBarConfig: {
      // each bar must have a nested ganttBarConfig object ...
      id: "unique-id-1", // ... and a unique "id" property
      label: "Lorem ipsum dolor",
    },
    
  },
]);
const row2BarList = ref([
  {
    myBeginDate: "2021-07-13 00:00",
    myEndDate: "2021-07-14 02:00",
    ganttBarConfig: {
      id: "another-unique-id-2",
      hasHandles: true,
      label: "Hey, look at me",
      style: {
        // arbitrary CSS styling for your bar
        background: "#e09b69",
        borderRadius: "20px",
        color: "black",
      },
    },
  },
  {
    myBeginDate: "2021-07-12 02:00",
    myEndDate: "2021-07-12 03:00",
    ganttBarConfig: {
      id: "another-unique-id-3",
      hasHandles: true,
      label: "Hey, look at me",
      style: {
        // arbitrary CSS styling for your bar
        background: "#e09b69",
        borderRadius: "20px",
        color: "black",
      },
    },
  },
]);
</script>
