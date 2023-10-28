<template>
  <div class="row align-items-center mt-2 pb-3 TopMenu">
    <div class="col-md-7">
      <div class="headmenu">
        <button class="btn d-inline" v-if="displayAddButton" @click="addButton">
          <i class="bx bx-plus me-1"></i> Add New
        </button>

        <div class="d-inline-block mt-3 mt-xl-0 ms-xl-3">
          <ul class="list-group list-group-horizontal">
            <li
              v-if="options.includes('list')"
              class="list-group-item"
              @click="$emit('changeView', 'list')"
              :class="{ active: pageView === 'list' }"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="List"
              aria-label="List"
            >
              List
            </li>
            <li
              v-if="options.includes('grid')"
              class="list-group-item"
              @click="$emit('changeView', 'grid')"
              :class="{ active: pageView === 'grid' }"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title=""
              data-bs-original-title="Grid"
              aria-label="Grid"
            >
              Card
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-5 mt-3 mt-md-0 headcontrols">
      <ul
        class="list-group list-group-horizontal align-items-center justify-content-end"
      >
        <!--
        <li class="list-group-item"><i class="fas fa-sort"></i> Sort</li>
        <li class="list-group-item"><i class="fas fa-filter"></i> Filter</li>
        <li class="list-group-item"><i class="fas fa-ellipsis-h"></i></li>
        -->
        <!--
        <li class="list-group-item">
          <button
            @click="$emit('changeView','list')"
            class="btn btn-primary me-2"
            :class="{ active: pageView === 'list' }"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="List"
            aria-label="List"
          >
            <i class="bx bx-list-ul"></i>
          </button>
          <button
            @click="$emit('changeView','grid')"
            :class="{ active: pageView === 'grid' }"
            class="btn btn-primary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="Grid"
            aria-label="Grid"
          >
            <i class="bx bx-grid-alt"></i>
          </button>
        </li>

        -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserRoleTopMenu",
  props: {
    pageView: {
      default: "",
    },
    addPage: {
      default: "",
    },
    options: {
      default: ["list", "grid"],
    },
    displayAddButton: {
      default: true,
    },
  },
  methods: {
    addButton() {
      if (this.addPage !== "") {
        this.$router.push(`/${this.addPage}/0`)
      }

      this.$emit("add")
    },
  },
}
</script>

<style></style>
