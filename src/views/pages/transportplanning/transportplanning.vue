<template>
  <Layout :pagetitle="'Transport Planning'">
    <div class="row align-items-center pt-2 pb-3 TopMenu">
      <div class="col-md-8">
        <TopBar />
      </div>
    </div>
    <TransportDropHeaderDialog ref="TransportDropHeaderDialog" />
    <ToBePlannedSideBar />
    <PlannedSideBar />
    <ShippingDemandGroups />
    <TransportDropSlots />
  </Layout>
</template>

<script>
import Layout from "../../layouts/main"
import appConfig from "@/app.config"
import pageMixin from "../../../common/pageMixin.js"

import TopBar from "../../../components/transportplanning/TransportPlanningTopBar"
import ShippingDemandGroups from "../../../components/transportplanning/ShippingDemandGroups"
import ToBePlannedSideBar from "../../../components/transportplanning/ToBePlannedSideBar"
import PlannedSideBar from "../../../components/transportplanning/PlannedSideBar"
import TransportDropHeaderDialog from "../../../components/transportdrop/TransportDropHeaderDialog"
import TransportDropSlots from "../../../components/transportplanning/TransportDropSlots"

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
    Layout,
    TopBar,
    ShippingDemandGroups,
    ToBePlannedSideBar,
    PlannedSideBar,
    TransportDropHeaderDialog,
    TransportDropSlots,
  },
  methods: {
  },
  computed: {
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
    data() {
      return {
        menuItems: [
          {
            label: "Trailer",
            items: [
              {
                label: "Split Load",
                icon: "fas fa-expand-arrows-alt fa-fw",
                command: () => {
                  this.$toast.add({
                    severity: "success",
                    summary: "Updated",
                    detail: "Data Updated",
                    life: 3000,
                  })
                },
              },
              {
                label: "Merge Trailers",
                icon: "fas fa-compress-arrows-alt fa-fw",
                command: () => {
                  this.$toast.add({
                    severity: "warn",
                    summary: "Delete",
                    detail: "Data Deleted",
                    life: 3000,
                  })
                },
              },
            ],
          },
          {
            label: "Shipment",
            items: [
              {
                label: "Move to Queue",
                icon: "pi pi-upload fa-fw",
                url: "https://vuejs.org/",
              },
              {
                label: "More Details",
                icon: "fas fa-info fa-fw",
                command: () => {
                  window.location.hash = "/fileupload"
                },
              },
            ],
          },
        ],
        demandMenuOptions: [
          {
            label: "View",
            icon: "mdi",
          },
          {
            label: "Add",
            icon: "mdi mdi-plus",
          },
          {
            label: "Trailer 36575",
            icon: "mdi mdi-truck",
          },
        ],
        divHeight: 0,
      }
    },
  },
}
</script>

<style scoped>
/*Shipping Demand Area*/
.mainWorkspace {
  padding-bottom: 18.5em;
}

.demandSpaceWrapper {
  border: 0px solid #000;
  margin-right: 2em;
  margin-bottom: 2em;
  padding: 2em;
  overflow-y: auto;
  box-shadow: 0 2px 3px #e4e8f0;
  background-color: #fff;
  border-radius: 1rem;
}
.demandSpace {
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: -2em;
  height: 100%;
}
</style>
