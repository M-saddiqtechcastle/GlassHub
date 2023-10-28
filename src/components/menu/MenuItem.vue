<template>
  <li>
    <router-link
      class="side-nav-link-ref my-0 p-0"
      :to="{ path: '/' + menuItem.filepath }"
      :data-key="`t-${menuItem.featurename}`"
    >
      <a class="ms-4 ps-2 my-1 submenu">
        <icon :iconid="menuItem.iconid" :displaybadge="false" class="submenuicon" />
        {{ menuItem.featurename }}
        <Badge value="999+"></Badge>
      </a>
    </router-link>
  </li>
</template>

<script>
import icon from "../Icon"
import { activateMenu } from "@/common/dom_functions.js"
import Badge from "primevue/badge";

export default {
  name: "MenuItem",
  props: {
    menuItem: {},
    id: {
      required: true,
    },
  },
  components: {
    icon,
    Badge,
  },
  async mounted() {
    const lastLink = this.$store.getters['user/getLastUserMenuLink']
    if (this.menuItem.featureid == lastLink.featureid) {
      activateMenu()
    }
  },
}
</script>

<style scoped></style>
