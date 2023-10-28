<template>
  <div class="row mb-4">
    <div class="col-1 col-sm-2 col-md-3 d-lg-none"></div>
    <div class="col-10 col-sm-8 col-md-6 col-lg-5 align-content-end mb-3">
      <div class="input-group">
        <input
          type="search"
          placeholder="Search..."
          aria-label="Search..."
          class="form-control"
          v-on:keyup.enter="search"
          v-model="searchValue"
        />
        <div class="input-group-append">
          <button
            type="button"
            @click="search"
            v-on:keyup.enter="search"
            class="btn btn-primary"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-1 col-sm-2 col-md-3 d-lg-none">
      <slot name="additionalSearchOne"></slot>
    </div>
    <div class="col-12 col-lg-7 pb-1">
      <slot name="additionalSearchTwo"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  created() {},
  data() {
    return { searchValue: "" }
  },
  props: {},
  methods: {
    search() {
      this.$emit("search", this.searchValue)
    },
  },
}
</script>

<style lang="scss" scoped></style>
