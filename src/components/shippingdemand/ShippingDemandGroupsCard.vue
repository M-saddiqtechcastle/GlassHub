<template>
  <div>
    <div class="container-fluid" v-if="pageMode === 'view'">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <Carousel
                :value="demandGroups"
                :numVisible="3"
                :numScroll="1"
                :responsiveOptions="responsiveOptions"
              >
                <template #header>
                  <h4>Demand Groups</h4>
                </template>
                <template #item="slotProps">
                  <div class="row">
                    <div class="col-12">
                      <div class="card mx-2">
                        <div class="card-header">
                          <h5>Group title</h5>
                        </div>
                        <div class="card-body">

                          <div class="row">
                    <div class="col-12">
                      <ScrollPanel
                        style=" max-height: 57em" 
                        class="custom"
                      ><!-- height needs to be calculated from: number of cards x top padding in Global + height of cards-->
                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                          </div>
                        </div>

                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                          </div>
                        </div>

                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                          </div>
                        </div>

                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                          </div>
                        </div>

                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                          </div>
                        </div>

                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                          </div>
                        </div>
                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                          </div>
                        </div>
                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                          </div>
                        </div>
                        <div class="card stackingcard mx-2">
                          <div class="card-header">
                            <h5>Demand</h5>
                          </div>
                          <div class="card-body">
                            content <br />
                            content <br />
                            content <br />
                            content <br />
                            {{ slotProps.data.code }}<br />
                          </div>
                        </div>
                      </ScrollPanel>
                    </div>
                  </div>


                        </div>
                      </div>
                    </div>
                  </div>
                
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
import ScrollPanel from "primevue/scrollpanel";

export default {
  name: "ShippingDemandCard",
  components: {
    Carousel,
    ScrollPanel,
  },
  props: {
    pageMode: {
      default: "view",
    },
  },
  data() {
    return {
      demandGroups: [
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
        {
          id: "1000",
          code: "f230fh0g3",
          name: "Bamboo Watch",
          description: "Product Description",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          quantity: 24,
          inventoryStatus: "INSTOCK",
          rating: 5,
        },
      ],

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
    };
  },
};
</script>

<style scoped>
:deep(.custom .p-scrollpanel-wrapper) {
  outline: 0px solid #000;
  margin: 0 -10px 0 -10px;
  padding-left: 10px;
}

:deep(.custom .p-scrollpanel-bar) {
    background-color: var(--neutral-color1);
    opacity: 1;
    transition: background-color .3s;
}

:deep(.custom .p-scrollpanel-bar:hover) {
  background-color: #135ba1;
}

.stackingcard {
  position: sticky;
  top: 0em;
  height: 30em;
}



</style>
