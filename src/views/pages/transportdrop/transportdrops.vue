<template>
  <Layout :pagetitle="'Trailers **STATIC ONLY**'">
    <div class="row align-items-center pt-5 pb-3 TopMenu">
      <div class="col-md-8">
        <div class="headmenu">
          <button class="btn d-inline">
            <i class="bx bx-plus me-1"></i> Calculate Groups
          </button>

          <div class="d-inline-block mt-3 mt-xl-0 ms-xl-3">
            <ul class="list-group list-group-horizontal">
              <li
                class="list-group-item"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="List"
                aria-label="List"
              >
                6hr
              </li>
              <li
                class="list-group-item"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="List"
                aria-label="List"
              >
                12hr
              </li>
              <li
                class="list-group-item"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="List"
                aria-label="List"
              >
                24hr
              </li>
              <li
                class="list-group-item"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="List"
                aria-label="List"
              >
                2days
              </li>
              <li
                class="list-group-item"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title=""
                data-bs-original-title="List"
                aria-label="List"
              >
                +
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <TransportDropCardGrid />

  </Layout>
</template>

<script>
import Layout from "../../layouts/main";
import appConfig from "@/app.config";
import pageMixin from "../../../common/pageMixin.js";
import TransportDropCardGrid from "../../../components/transportdrop/TransportDropCardGrid.vue";

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
    TransportDropCardGrid,
  },

  data() {
    return {
      
    };
  },
};
</script>

<style scoped>

.status {
  border-top: 2px solid;
  opacity: 100;
}

</style>
