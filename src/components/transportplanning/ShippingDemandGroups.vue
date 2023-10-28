<template>
  <div class="row mainWorkspace" :style="cssVars">
    <div class="col-12 demandSpace">
      <div class="demandSpaceWrapper">
        <Carousel
          :value="demandGroups"
          :numVisible="3"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
        >
          <template #header>
            <h4>Clusters</h4>
          </template>
          <template #item="slotProps">
            <XyzTransition
              appear
              xyz="fade flip-up left-100% up-100% ease-out-back"
            >
              <div class="card mx-2">
                <div class="card-header">
                  <ShippingDemandGroupHeader
                    :shippingDemandGroup="slotProps.data"
                  />
                </div>
                <hr />
                <div
                  v-for="line in slotProps.data.lines"
                  :key="line.shippingdemandlineid"
                  :id="line.shippingdemandlineid"
                >
                  <ShippingDemandGroupLine :shippingDemandGroupLine="line" />
                </div>
              </div>
            </XyzTransition>
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "primevue/carousel"
import ShippingDemandGroupHeader from "./ShippingDemandGroupHeader"
import ShippingDemandGroupLine from "./ShippingDemandGroupLine"
export default {
  name: "ShippingDemandGroups",
  components: {
    Carousel,
    ShippingDemandGroupHeader,
    ShippingDemandGroupLine,
  },
  computed: {
    demandGroups: {
      get() {
        return this.$store.getters["transportplanning/getDemandGroups"]
      },
    },
  },
  data() {
    return {
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    }
  },
}
</script>

<style scoped>
.demandCard {
  width: 30%;
  display: inline-block;
  margin-right: 2em;
}
</style>
