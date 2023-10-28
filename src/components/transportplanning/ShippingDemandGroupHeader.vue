<template>
  <div class="row">
    <div class="col-12">
      <div
        class="card accordion"
        :id="'demandGroupCard' + shippingDemandGroup.groupid"
      >
        <div class="card-header text-start">
          <div class="row">
            <div class="col-10 headericon">
              <i class="fas fa-pallet fa-fw fa-2x me-3"></i>
              <div class="d-inline-block">
                <h5 class="d-inline">Cluster</h5>
                <br />
                <h6>#{{ shippingDemandGroup?.groupid + 1 }}</h6>
              </div>
            </div>
            <div class="col-2 p-0 justify-content-top text-end">
              <span
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="
                  '#collapseDemandGroup' + shippingDemandGroup.groupid
                "
                aria-expanded="true"
                :aria-controls="
                  '#collapseDemandGroup' + shippingDemandGroup.groupid
                "
                >&nbsp;</span
              >
              <!-- <div class="dropdown">
                <a
                  class="text-muted dropdown-toggle font-size-16"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  ><i class="fas fa-ellipsis-h fa-fw fa-125x black"></i
                ></a>
                <div class="dropdown-menu dropdown-menu-end">
                  <a class="dropdown-item">Edit</a
                  ><a class="dropdown-item">Delete</a>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div
          :id="'collapseDemandGroup' + shippingDemandGroup.groupid"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          :data-bs-parent="'#demandGroupCard' + shippingDemandGroup.groupid"
          style=""
        >
          <div class="card-body hrTop">
            <hr class="text-success hrStatus" />
            <div class="row mb-3">
              <div class="col-3">
                <i
                  class="fas fa-pencil-ruler fa-fw me-2 align-middle text-primary"
                ></i
                ><i
                  class="fas fa-list fa-fw pe-2 align-middle text-primary"
                ></i>
              </div>
              <div class="col-3">{{ NumberOfLines }}</div>
              <div class="col-3">
                <i
                  class="fas fa-pencil-ruler fa-fw me-2 align-middle text-primary"
                ></i
                ><i
                  class="fas fa-truck fa-fw pe-2 align-middle text-primary"
                ></i>
              </div>
              <div class="col-3">
                {{ shippingDemandGroup.transportmethodcode }}
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-2">
                volume
                <i class="fas fa-fw pe-2 align-middle text-primary"></i>
              </div>
              <div class="col-4">{{ shippingDemandGroup?.totalvolume }} cm</div>

              <div class="col-2">
                weight
                <i class="fas fa-fw pe-2 align-middle text-primary"></i>
              </div>
              <div class="col-4">
                {{ shippingDemandGroup?.totalweight }} tonnes
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-2">
                distance
                <i class="fas fa-fw pe-2 align-middle text-primary"></i>
              </div>
              <div class="col-4">
                {{ shippingDemandGroup?.totalvolume }} m/km
              </div>

              <div class="col-2">
                Co2
                <i class="fas fa-fw pe-2 align-middle text-primary"></i>
              </div>
              <div class="col-4">
                {{ shippingDemandGroup?.totalweight }} tonnes
              </div>
            </div>
            <hr />
            <div class="row mb-3">
              <div class="col-3">Suggested Container</div>
              <div class="col-3">Big Red One</div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-soft-primary btn-sm w-50 mx-auto"
                >
                  <i class="fa fa-map-marker-alt me-1"></i> View Map
                </button>
              </div>
            </div>
            <hr />
            <div class="row mb-3 text-center">
              <SlotButton
                class="col-4"
                @click="addToSlot(0)"
                slotNumberLabel="1"
              />
              <SlotButton
                class="col-4"
                @click="addToSlot(1)"
                slotNumberLabel="2"
              />
              <SlotButton
                class="col-4"
                @click="addToSlot(2)"
                slotNumberLabel="3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlotButton from "./SlotButton.vue"
export default {
  name: "ShippingDemandGroupHeader",
  components: {
    SlotButton,
  },
  props: {
    shippingDemandGroup: {
      default: {},
    },
  },
  methods: {
    async addToSlot(slotnumber) {
      let response = await this.$store.dispatch(
        "transportplanning/addDemandGroupToSlot",
        {
          demandgroup: this.shippingDemandGroup,
          slotnumber: slotnumber,
        }
      )

      if (response?.error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: response.error,
          life: 3000,
        })
        return
      }

      if (response?.success) {
        this.$toast.add({
          severity: "success",
          summary: "Group Add To Slot",
          detail: `Group Added To Slot ${slotnumber + 1}`,
          life: 3000,
        })
        console.log(this.shippingDemandGroup)
        return
      }
    },
  },
  computed: {
    NumberOfLines: {
      get() {
        if (this.shippingDemandGroup?.lines.length > 0) {
          return this.shippingDemandGroup.lines.length
        }
        return 0
      },
    },
  },
}
</script>
