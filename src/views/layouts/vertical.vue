<script>
import router from "@/router";
import Topbar from "@/components/layout/TopBar";
import SideBar from "@/components/layout/SideBar";
import Rightsidebar from "@/components/layout/RightSideBar";
import Footer from "@/components/layout/Footer";
import { layoutComputed } from "@/store/helpers";

/**
 * Vertical component
 */
export default {
  props: {
    pagetitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: false,
    },
  },
  data() {
    return {};
  },
  components: {
    Topbar,
    SideBar,
    Rightsidebar,
    Footer,
  },
  created: () => {
    document.body.removeAttribute("data-layout");
  },
  computed: {
    ...layoutComputed,
  },
  methods: {
    toggleMenu() {
      var currentSIdebarSize = document.body.getAttribute("data-sidebar-size");
      document.body.classList.toggle("sidebar-enable");
      if (window.screen.width >= 992) {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        if (currentSIdebarSize == null) {
          document.body.getAttribute("data-sidebar-size") == null ||
          document.body.getAttribute("data-sidebar-size") == "lg"
            ? document.body.setAttribute("data-sidebar-size", "sm")
            : document.body.setAttribute("data-sidebar-size", "lg");
        } else if (currentSIdebarSize == "md") {
          document.body.getAttribute("data-sidebar-size") == "md"
            ? document.body.setAttribute("data-sidebar-size", "sm")
            : document.body.setAttribute("data-sidebar-size", "md");
        } else {
          document.body.getAttribute("data-sidebar-size") == "sm"
            ? document.body.setAttribute("data-sidebar-size", "lg")
            : document.body.setAttribute("data-sidebar-size", "sm");
        }
      } else {
        // eslint-disable-next-line no-unused-vars
        router.afterEach((routeTo, routeFrom) => {
          document.body.classList.remove("sidebar-enable");
        });
        document.body.classList.remove("vertical-collpsed");
      }
      this.isMenuCondensed = !this.isMenuCondensed;
    },
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
  },
};
</script>

<template>
  <div>
    <!-- Begin page -->
    <div id="layout-wrapper">
      <Topbar
        :pagetitle="pagetitle"
        :type="topbar"
        :layoutscroll="layoutScrollable"
        :pageDescription="pageDescription"
      />
      <SideBar
        :type="leftSidebarType"
        :width="layoutWidth"
        :color="sidebarColor"
      />
      <XyzTransition appear xyz="fade right ease-out-back">
      <div class="main-content ">
        <div class="page-content ">
          <div class="container-fluid pb-4">
            <slot />
          </div>
        </div>
        <Footer />
      </div>
      </XyzTransition>
    </div>
    <Rightsidebar />
  </div>
</template>


<style scoped>

</style>

