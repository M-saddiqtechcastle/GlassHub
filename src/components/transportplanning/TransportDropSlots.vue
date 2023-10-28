<template>
  <div>
    <div
      class="row text-center"
      ref="truckSlotLoader"
      :class="
        slotBarView === 'large' ? 'truckSlotLoader' : 'truckSlotLoaderMini'
      "
    >
      <div>
        <div class="row">
          <div
            class="col-1"
            @click="
              slotBarView === 'large'
                ? (slotBarView = 'small')
                : (slotBarView = 'large')
            "
          >
            <i
              v-if="slotBarView === 'large'"
              class="fas fa-angle-down fa-fw fa-15x"
            ></i>
            <i
              v-if="slotBarView !== 'large'"
              class="fas fa-angle-up fa-fw fa-15x"
            ></i>
          </div>
          <div class="col-11"></div>
        </div>
      </div>
      <TransportDropSlotInstance
        v-for="(transportDrop, index) in SelectTransportDrops"
        :key="transportDrop.transportdropid"
        :id="transportDrop.transportdropid"
        :transportDrop="transportDrop"
        :slotNumber="index"
        :slotView="slotBarView"
      />
    </div>
  </div>
</template>

<script>
import TransportDropSlotInstance from "./TransportDropSlotInstance"
export default {
  name: "TransportDropSlots",
  components: {
    TransportDropSlotInstance,
  },
  created() {},
  mounted() {
    this.divHeight = this.$refs.truckSlotLoader.clientHeight
  },
  computed: {
    cssVars() {
      return {
        "--truckSlotLoaderHeight": this.divHeight + "px",
      }
    },
    slotBarView: {
      get() {
        return this.$store.getters["transportplanning/getSlotBarView"]
      },
      set(value) {
        this.$store.commit("transportplanning/setSlotBarView", value)
      },
    },
    SelectTransportDrops: {
      get() {
        return this.$store.getters["transportplanning/getSelectTransportDrops"]
      },
    },
  },
  data() {
    return {}
  },
  props: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.loadTruckIcon:hover .truckNoHover,
.loadTruckIcon .truckHover {
  display: none;
}
.loadTruckIcon:hover .truckHover {
  display: inline-block;
  cursor: pointer;
}

body[data-sidebar-size="sm"] .truckSlotLoader,
body[data-sidebar-size="sm"] .truckSlotLoaderMini {
  left: 82px;
}

.truckSlotLoader {
  position: fixed;
  bottom: 0;
  left: 267px;
  right: 17px;
  height: 20.5em;
  z-index: 999;
  padding: 1em 2em;
  background-color: #fff;
  overflow-y: scroll;
  border-top: 1px solid var(--cardborder-rgb);
}

.truckSlotLoaderMini {
  position: fixed;
  bottom: 0;
  left: 267px;
  right: 17px;
  height: 8.5em;
  z-index: 999;
  padding: 1em 2em;
  background-color: #fff;
  overflow-y: scroll;
  border-top: 1px solid var(--cardborder-rgb);
}

.truckSlotLoaderMini h5 {
  font-size: 1.1em;
}

.dropareaEmpty {
  background: white;
  border-radius: 5px;
  border: 2px dashed var(--neutral-color1);
  border-image: none;
  width: 30%;
  height: 6em;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5em;
}

.droparea {
  padding: 0.5em;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  height: max-content;
  border-radius: 5px;
  border: 2px solid var(--neutral-color1);
}

.truckSlotLoader h4 {
  margin-bottom: 0px;
  padding-bottom: 0px;
}
</style>
