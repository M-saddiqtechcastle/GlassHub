<template>
  <!-- ========== Left Sidebar Start ========== -->
  <div class="vertical-menu">
    <NavbarBrand />
    <button
      type="button"
      class="btn btn-sm px-3 header-item vertical-menu-btn topnav-hamburger"
      @click="toggleMenu"
    >
      <span class="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

    <SimpleBar data-simplebar class="sidebar-menu-scroll" ref="isSimplebar">
      <div id="sidebar-menu">
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="bg-">
            <router-link to="/" data-key="t-cockpit">
              <a class="p-1">
                <div class="fa-customicon icon">
                  <div class="fas fa-tachometer-alt"></div>
                </div>
                <span data-key="t-cockpit">Cockpit</span>
              </a>
            </router-link>
          </li>

          <li class="menu-title" data-key="t-menu">Menu</li>
          <MainMenu />

          <Menuv
            :menuOptions="menuOption"
            :menuTitle="index"
            v-for="(menuOption, index) in menuOptions"
            :key="`${index}`"
          />
          <hr />

          <li class="bg-" data-key="">
            <a
              href="javascript: void(0);"
              aria-expanded="false"
              @click="reloadMenu()"
            >
              <div class="fa-customicon icon">
                <i class="mdi mdi-reload"></i>
              </div>
              <span data-key="t-Master Data" class="ms-2">Reload Menu</span>

            </a>
          </li>
        </ul>
      </div>

      <div class="p-3 px-4 sidebar-footer">
        <p class="mb-1 main-title">
          {{ new Date().getFullYear() }} &copy; DC-Tech
        </p>
        <p class="mb-0">DCI Version x</p>
      </div>
    </SimpleBar>
  </div>
</template>

<script>
import { layoutComputed } from "@/store/helpers";
import { SimpleBar } from "simplebar-vue3";
import NavbarBrand from "./NavbarBrand";
import Menuv from "../menu/Menuv";
import MainMenu from "../menu/MainMenu";

/**
 * Sidebar component
 */
export default {
  components: {
    SimpleBar,
    Menuv,
    NavbarBrand,
    MainMenu,
  },
  props: {
    isCondensed: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...layoutComputed,
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
      menuOptions: null,
    };
  },
  watch: {
    $route: {
      handler: "onRoutechange",
      immediate: true,
      deep: true,
    },
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "default":
              document.body.setAttribute("data-sidebar-size", "lg");
              break;
            case "compact":
              document.body.setAttribute("data-sidebar-size", "md");
              document.body.classList.remove("vertical-collpsed");
              break;
            case "icon":
              document.body.setAttribute("data-sidebar-size", "sm");
              break;
            default:
              document.body.setAttribute("data-sidebar-size", "lg");
              break;
          }
        }
      },
    },
    width: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "boxed":
              document.body.setAttribute("data-layout-size", "boxed");
              break;
            case "fluid":
              document.body.setAttribute("data-layout-size", "fluid");
              break;
            default:
              document.body.setAttribute("data-layout-size", "fluid");
              break;
          }
        }
      },
    },
    color: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "light":
              document.body.setAttribute("data-sidebar", "light");
              break;
            case "dark":
              document.body.setAttribute("data-sidebar", "dark");
              break;
            case "brand":
              document.body.setAttribute("data-sidebar", "brand");
              break;
            default:
              document.body.setAttribute("data-sidebar", "dark");
              break;
          }
        }
      },
    },
  },
  methods: {
    onRoutechange() {
      setTimeout(() => {
        if (document.getElementsByClassName("mm-active").length > 0) {
          const currentPosition =
            document.getElementsByClassName("mm-active")[0].offsetTop;
          if (currentPosition > 500)
            if (this.$refs.isSimplebar)
              this.$refs.isSimplebar.value.getScrollElement().scrollTop =
                currentPosition + 300;
        }
      }, 300);
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    async reloadMenu() {
      //todo add loading start
      await this.$store.dispatch("application/resetSyncData");
      // todo add loading end
    },
  },
  async created() {
    this.menuOptions = await this.$store.dispatch("user/getUserMenuList");
  },
};
</script>

<style scoped>
::v-deep(.pointer) {
  cursor: pointer;
}
</style>
