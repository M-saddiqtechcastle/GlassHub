<template>
  <li
    class="bg-"
    v-for="menuItem in mainMenu"
    :key="menuItem.featureid"
    :id="menuItem.featureid"
  >
    <router-link
      :to="{ path: '/' + menuItem.filepath }"
      :data-key="`t-${menuItem.featurename}`"
    >
      
        <icon :iconid="menuItem.iconid" :displaybadge="false" />
        &nbsp;
        <span :data-key="`t-${menuItem.featurename}`" class="my-1">{{
          menuItem.featurename
        }}</span>
        <Badge value="999+"></Badge>
      
    </router-link>
  </li>
</template>

<script>
import icon from "../Icon"
import Badge from "primevue/badge";

export default {
  name: "MainMenu",
  components: {
    icon,
    Badge,
  },
  computed: {
    mainMenu: {
      get() {
        return this.$store.getters["user/getUserMainMenu"]
      },
    },
  },
}
</script>
