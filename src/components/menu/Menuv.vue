
<template>
  <li class="bg-">
    <a href="javascript: void(0);" class="has-arrow">
      <icon :iconid="iconid" :displaybadge="false" />
      <span :data-key="`t-${menuTitle}`">{{ menuTitle }}</span>
    </a>
    <ul class="sub-menu" aria-expanded="false">
      <MenuItem
        :menuItem="menuItem"
        v-for="menuItem in menuOptions"
        :key="menuItem.featureid"
        :id="menuItem.featureid"
      />
    </ul>
  </li>
</template>

<script>
import icon from "../Icon";
import MenuItem from "./MenuItem";

export default {
  name: "menuv",
  components: {
    MenuItem,
    icon,
  },
  props: {
    menuOptions: {},
    menuTitle: String,
  },
  data() {
    return {
      iconid: {},
    };
  },
  async created() {
    this.iconid = this.menuOptions[0]["menuiconid"];
  },
};
</script>

<style scoped>

.icon {
  margin-right: 0.5em;
  display: inline-block;
}

ul.sub-menu.mm-collapse {
    min-width: 230px;
}

body[data-sidebar=dark][data-sidebar-size=sm] .vertical-menu #sidebar-menu > ul ul{
  border-left: 1px solid var(--bs-body-bg);
}





/*set fill colors for light and dark mode when settings menu working*/


</style>
