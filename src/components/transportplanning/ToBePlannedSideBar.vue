<template>
  <Sidebar
    v-model:visible="toBePlannedSidePanelVisible"
    position="left"
    class="truckSlotStoreBorder p-sidebar-md"
    :modal="false"
  >
    <div class="text-center">
      <button class="btn btn-primary" @click="createDropsFromTemplate">
        Create From Template
      </button>
      <button class="btn btn-primary" @click="createDrop">Create Run</button>
    </div>
    <hr />
    <h3 class="text-center">Unplanned Trucks</h3>
    <hr />
    <div
      v-for="transportDrop in UnplannedTransportDrops"
      :key="transportDrop.transportdropid"
      :id="transportDrop.transportdropid"
    >
      <TransportDropSideBarCard
        :transportDrop="transportDrop"
        @postDeleteRow="postDeleteTransportDrop"
      />
    </div>
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
  </Sidebar>
</template>

<script>
import Sidebar from "primevue/sidebar"
import TransportDropSideBarCard from "./TransportDropSideBarCard"

export default {
  name: "ToBePlannedSideBar",
  components: {
    Sidebar,
    TransportDropSideBarCard,
  },
  computed: {
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
    TransportDropHeaderDialogVisible: {
      get() {
        return this.$store.getters[
          "transportdrop/getTransportDropHeaderDialogVisible"
        ]
      },
      set(value) {
        this.$store.commit(
          "transportdrop/setTransportDropHeaderDialogVisible",
          value
        )
      },
    },
    UnplannedTransportDrops: {
      cache: false,
      get() {
        return this.$store.getters[
          "transportplanning/getUnplannedTransportDrops"
        ]
      },
    },
  },
  methods: {
    createDropsFromTemplate() {
      alert("create from template")
    },
    createDrop() {
      this.TransportDropHeaderDialogVisible = true
    },
    async postDeleteTransportDrop(event) {
      event
      await this.$store.dispatch("transportplanning/getUnplannedTransportDrops")
    },
  },
  async mounted() {
    await this.$store.dispatch("transportplanning/getUnplannedTransportDrops")
  },
}
</script>
