<template>
  <XyzTransition appear xyz="fade down-75% flip-up duration-10">
    <div
      class="shadow-lg dropareaEmpty col-4"
      v-if="Object.keys(transportDrop).length === 0"
      @click="showUnplanned"
    >
      Empty
    </div>
  </XyzTransition>
  <XyzTransition appear xyz="fade up-75% flip-up duration-10">
    <div
      class="shadow-lg droparea col-4"
      v-if="Object.keys(transportDrop).length !== 0"
      xyz="fade"
    >
      <div class="row" v-if="slotView === 'large'">
        <div class="col-12">
          <h5>
            {{ transportDrop.transportdropname }} -
            {{ transportDrop.transportdropid }} -
            {{ transportDrop.containername }}
          </h5>
        </div>
        <div class="col-6 px-3">
          3d render here
          <br />
          <div class="text-start mt-3">
            <i class="fas fa-calendar-alt fa-fw me-2"></i
            >{{ convertToDisplayDate(transportDrop.scheduleddatetime) }}<br />
            <i class="fas fa-clock fa-fw me-2"></i
            >{{ convertToDisplayTime(transportDrop.scheduleddatetime) }}
          </div>
        </div>
        <div class="col-6">
          <div class="row mt-1">
            <div class="col-6">Lines {{ numberOfLines }}</div>
            <div class="col-6">Qty TBC</div>
          </div>
          <div class="row mt-1">
            <div class="col-6">
              <div class="dial d-inline-block mb-2">
                <Knob readonly v-model="Utilised" :size="40" />
                Utilised
              </div>
            </div>
            <div class="col-6">
              <div class="dial d-inline-block">
                <Knob readonly v-model="Volume" :size="40" />
                Volume
              </div>
            </div>
          </div>
          <div class="row mt-1">
            <div class="col-6">
              <div class="dial d-inline-block mb-2">
                <Knob readonly v-model="Weight" :size="40" />
                Weight
              </div>
            </div>
            <div class="col-6">
              <div class="dial d-inline-block">
                <Knob readonly v-model="CO2" :size="40" />
                CO2
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 pt-2">
          <div class="row align-items-center">
            <div class="col-3 cursor">
              <i class="fas fa-parking fa-fw fa-15x text-success"></i><br />
              Bay 12
            </div>
            <div class="col-2 cursor">
              <i class="fas fa-people-carry fa-fw fa-15x text-success"></i
              ><br />
            </div>
            <div class="col-2 cursor">
              <i
                class="fas fa-edit fa-fw fa-15x black"
                @click="openTransportDrop"
              ></i>
            </div>
            <div class="col-2 cursor" @click="returnToUnplanned">
              <i class="fas fa-level-up-alt fa-fw fa-15x black"></i><br />
            </div>
            <div class="col-3 cursor" @click="approve">
              <i class="fas fa-check-circle fa-fw fa-15x text-success"></i>
              <br />Approve
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="slotView === 'small'">
        <div class="shadow-lg droparea">
          <div class="row align-items-center">
            <div class="col-10 text-start">
              <h5>Truck #35412 - Internal Fleet</h5>
            </div>
            <div class="col-2 cursor">
              <i
                class="fas fa-edit fa-fw fa-15x black"
                @click="openTransportDrop"
              ></i>
            </div>
            <div class="col-6 px-3">
              <div class="text-start mt-0">
                <i class="fas fa-parking fa-fw text-danger me-3"></i>
                <i class="fas fa-calendar-alt fa-fw pe-2"></i>25/10/2022<br />
                <i class="fas fa-people-carry fa-fw text-danger me-3"></i>
                <i class="fas fa-clock fa-fw pe-2"></i>15:30
              </div>
            </div>
            <div class="col-4 cursor text-end">
              <ProgressBar :value="progressValue" />
            </div>
            <div class="col-2 cursor text-end">
              <i class="fas fa-check-circle fa-fw fa-15x text-success"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </XyzTransition>
</template>

<script>
import DateTimeMixin from "../../common/DateTimeMixin.js"
import Knob from "primevue/knob"

export default {
  name: "TransportDropSlotInstance",
  mixins: [DateTimeMixin],
  component: {
    Knob,
  },
  created() {},
  data() {
    return {
      Utilised: 40,
      Volume: 50,
      Weight: 60,
      CO2: 70,
    }
  },
  props: {
    slotNumber: {
      default: 0,
    },
    transportDrop: {
      default: {
        transportdropid: 0,
      },
    },
    slotView: {
      default: "large",
    },
  },
  computed: {
    numberOfLines: {
      get() {
        if (this.transportDrop?.lines?.length > 0) {
          return this.transportDrop.lines.length
        }
        return 0
      },
    },
  },
  methods: {
    async openTransportDrop() {
      this.$router.push(`/transportdrop/${this.transportDrop.transportdropid}`)
    },
    async showUnplanned() {
      this.$store.commit(
        "transportplanning/setToBePlannedSidePanelVisible",
        true
      )
    },
    async approve() {
      let transportDrop = await this.$store.dispatch(
        "transportdrop/confirmTransportDrop",
        {
          transportdrop: this.transportDrop,
        }
      )

      if (
        transportDrop?.errors &&
        (transportDrop.errors.length > 0 ||
          Object.keys(transportDrop.errors).length > 0)
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: transportDrop.errors, // todo tidy error up
          life: 3000,
        })
        return
      }

      this.$toast.add({
        severity: "success",
        summary: "Approved",
        detail: `Pick ${transportDrop.pick.pick.dataset.pickid} Created`,
        life: 3000,
      })
      this.$store.dispatch("transportplanning/addTransportDropToPlanned", {
        transportdrop: this.transportDrop,
      })
      this.$store.dispatch("transportplanning/removeTransprortDropFromSlot", {
        transportdrop: this.transportDrop,
        slotnumber: this.slotNumber,
      })

      this.$store.dispatch(
        "transportplanning/removeTransprortDropFromUnplanned",
        {
          transportdrop: this.transportDrop,
        }
      )
      return
    },
    returnToUnplanned() {
      this.$store.dispatch("transportplanning/removeTransprortDropFromSlot", {
        transportdrop: this.transportDrop,
        slotnumber: this.slotNumber,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.dropareaEmpty {
  cursor: pointer;
}
</style>
