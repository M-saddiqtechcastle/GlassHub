<script>
import Navbarbrand from "./NavbarBrand";
import GlobalSearch from "./GlobalSearch";
import LanguageSelect from "./LanguageSelect";
import AppSelect from "./AppSelect";
import NotifcationBar from "./NotificationBar";
import SettingBar from "./SettingBar";
import AccountBar from "./AccountBar";

/**
 * Topbar component
 */
export default {
  data() {
    return {
      languages: [
        {
          flag: require("@/assets/images/flags/gb.jpg"),
          language: "en-gb",
          title: "English",
        },
        {
          flag: require("@/assets/images/flags/us.jpg"),
          language: "en",
          title: "English US",
        },
        {
          flag: require("@/assets/images/flags/spain.jpg"),
          language: "es",
          title: "Spanish",
        },
        {
          flag: require("@/assets/images/flags/germany.jpg"),
          language: "de",
          title: "German",
        },
        {
          flag: require("@/assets/images/flags/italy.jpg"),
          language: "it",
          title: "Italian",
        },
        {
          flag: require("@/assets/images/flags/russia.jpg"),
          language: "ru",
          title: "Russian",
        },
      ],
      text: null,
      flag: null,
      value: null,
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    layoutscroll: {
      type: Boolean,
      required: true,
    },
    pagetitle: {
      type: String,
      required: true,
    },
    pageDescription: {
      type: String,
      required: false,
    },
  },
  mounted() {},
  methods: {
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    logout() {
      if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
        this.authLogout().then(() => {
          this.$router.push(
            this.$route.query.redirectFrom || {
              name: "login",
            }
          );
        });
      } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
        this.authFakeLogout().then(() => {
          this.$router.push(
            this.$route.query.redirectFrom || {
              name: "login",
            }
          );
        });
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
  },
  components: {
    Navbarbrand,
    GlobalSearch,
    LanguageSelect,
    AppSelect,
    NotifcationBar,
    SettingBar,
    AccountBar,
  },
  watch: {
    type: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case "dark":
              console.log("dark");
              document.body.setAttribute("data-topbar", "dark");
              break;
            case "light":
              document.body.setAttribute("data-topbar", "light");
              document.body.removeAttribute("data-layout-size", "boxed");
              break;
            default:
              document.body.setAttribute("data-topbar", "dark");
              break;
          }
        }
      },
    },
    layoutscroll: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          switch (newVal) {
            case false:
              document.body.setAttribute("data-layout-scrollable", "false");
              break;
            case true:
              document.body.setAttribute("data-layout-scrollable", "true");
              break;
            default:
              document.body.setAttribute("data-layout-scrollable", "false");
              break;
          }
        }
      },
    },
  },
};
</script>

<template>
  <header id="page-topbar" class="isvertical-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <Navbarbrand />
        <button
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item vertical-menu-btn topnav-hamburger"
          @click="toggleMenu"
        >
          <span class="hamburger-icon open">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div class="d-none d-sm-block ms-3 align-self-center">
          <h4 class="page-title">{{ pagetitle }}</h4>
          <p class="page-description">{{ pageDescription }}</p>
        </div>
      </div>

      <div class="d-flex">
        <GlobalSearch />
        <LanguageSelect />
        <AppSelect />
        <NotifcationBar />
        <SettingBar />
        <AccountBar />
      </div>
      
    </div>
  </header>
</template>
