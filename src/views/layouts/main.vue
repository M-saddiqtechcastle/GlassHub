<script>
import { layoutComputed } from "@/store/helpers";
import Vertical from "./vertical";
import Horizontal from "./horizontal";

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
  components: {
    Vertical,
    Horizontal,
  },
  data() {
    return {};
  },
  computed: {
    ...layoutComputed,
  },
  methods: {},
  mounted() {
  },
};
</script>

<template>
  <div>
    <Vertical
      :pagetitle="pagetitle"
      v-if="layoutType === 'vertical'"
      :layout="layoutType"
      :pageDescription="pageDescription"
    >
     <slot />
    </Vertical>

    <Horizontal
      :pagetitle="pagetitle"
      v-if="layoutType === 'horizontal'"
      :layout="layoutType"
    >
      <slot />
    </Horizontal> 
  </div>
</template>
