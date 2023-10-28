<script>
import { layoutComputed } from "@/store/helpers";

import HorizontalNav from "../../components/layout/HorizontalNav";
import Footer from "../../components/layout/Footer";
import Rightsidebar from "@/components/layout/RightSideBar";

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
  components: { HorizontalNav, Footer, Rightsidebar },
  mounted() {
    document.body.setAttribute("data-layout", "horizontal");
  },
  computed: {
    ...layoutComputed,
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
  },
};
</script>

<template>
  <!-- Begin page -->
  <div id="layout-wrapper">
    {{topbar}}
    <HorizontalNav
      :pagetitle="pagetitle"
      :type="topbar"
      :layoutscroll="layoutScrollable"
      :width="layoutWidth"
    />
    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">
      <div class="page-content">
        <div class="container-fluid pb-4">
          <slot />
        </div>
      </div>
      <Footer />
    </div>
    <Rightsidebar />
  </div>
</template>