<template>
  <ul class="nav nav-pills justify-content-end">
    <li class="nav-item">
      <div
        v-if="options.includes('list')"
        @click="pageView = 'list'"
        class="nav-link"
        :class="{ active: pageView === 'list' }"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="List"
        aria-label="List"
      >
        <i class="bx bx-list-ul"></i>
      </div>
    </li>
    <li class="nav-item">
      <div
        v-if="options.includes('grid')"
        @click="pageView = 'grid'"
        :class="{ active: pageView === 'grid' }"
        class="nav-link"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="Grid"
        aria-label="Grid"
      >
        <i class="bx bx-grid-alt"></i>
      </div>
    </li>
    <li class="nav-item">
      <div
        v-if="options.includes('timeline')"
        @click="pageView = 'timeline'"
        :class="{ active: pageView === 'timeline' }"
        class="nav-link"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title=""
        data-bs-original-title="Grid"
        aria-label="Grid"
      >
        <i class="bx bx-grid-alt"></i>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "ViewTypeButtons",
  props: {
    store: {
      default: "",
    },
    options: {
      default: ["list", "grid"],
    },
  },
  computed: {
    pageView: {
      get() {
        return this.$store.getters[this.store + "/getPageView"]
      },
      set(selectedView) {
        return this.$store.commit(this.store + "/setPageView", selectedView)
      },
    },
  },
}
</script>
