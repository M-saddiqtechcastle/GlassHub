<template>
  <Sidebar
    v-model:visible="plannedSidePanelVisible"
    position="right"
    class="plannedTruckBorder p-sidebar-md"
    :modal="false"
  >
    <h3 class="text-center">Planned Trucks</h3>
    <p class="text-center">
      <!--
          should be within the horizon range
            <Calendar
            inputId="range"
            v-model="dates2"
            selectionMode="range"
            :manualInput="false"
            dateFormat="dd/mm/yy"
            :showButtonBar="true"
          /> -->
    </p>
    <TransportDropPlannedSideBarCard
      v-for="transportDrop in PlannedTransportDrops"
      :key="transportDrop.transportdropid"
      :id="transportDrop.transportdropid"
      :transportDrop="transportDrop"
    />
  </Sidebar>
</template>

<script>
import Sidebar from "primevue/sidebar"
import TransportDropPlannedSideBarCard from "./TransportDropPlannedSideBarCard"
export default {
  name: "plannedSideBar",
  components: {
    Sidebar,
    TransportDropPlannedSideBarCard,
  },
  computed: {
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
    PlannedTransportDrops: {
      cache: false,
      get() {
        return this.$store.getters["transportplanning/getPlannedTransportDrops"]
      },
    },
  },
  async mounted() {
    await this.$store.dispatch("transportplanning/getPlannedTransportDrops")
  },
}
</script>
