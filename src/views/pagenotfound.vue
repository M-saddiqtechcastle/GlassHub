<template>
  <Layout :pagetitle="'404 - Page Not Found'">
    <div class="row align-items-center">
      <div class="col-md-12">
        <div class="mb-3">
          <div class="row mt-4">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="row text-center">
                    <div class="col-8">
                      <h3>Here is everyone</h3>
                      <i class="fas fa-arrow-down fa-3x my-4"></i>
                      <Map :addresslong="site.addresslong" :addresslat="site.addresslat" />
                    </div>
                    <div class="col-4 pt-5">
                      <h4>This is you</h4>
                      <i class="fas fa-arrow-down fa-2x mt-4 mb-3"></i><br />
                      <i
                        class="fas fa-map-marker-alt fa-15x mb-4 text-danger"
                      ></i>
                      <p class="mb-5">(not even on the map!)</p>
                      <p class="mt-5">Use the menu to find your way back...</p>
                      <p>... But if you keep finding your way back here</p>
                      <p>let us know at how you got here by emailing</p>
                      <p>404support@dctech.software</p>
                      <p>so we can stop you getting lost!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content-->
    </div>
  </Layout>
</template>

<script>
import Layout from "./layouts/main"
import Map from "../components/common/Map.vue"

export default {
  name: "userroles",
  components: {
    Layout,
    Map,
  },
  data() {
    return {
      site: {},
    }
  },
  async mounted() {
    let siteid = this.$store.getters["userSession/getUserSessionSiteid"]
    this.site = await this.$store.dispatch("site/FetchById", siteid)
  },
}
</script>
