<template>
  <div
    class="d-flex flex-wrap align-items-center justify-content-end gap-2 my-1"
  >
    <div v-if="pageMode === 'view' || pageMode === 'add'">
      <div class="btn btn-primary" @click="$router.go(-1)">
        <i class="bx bx-arrow-back me-1"></i> Back
      </div>
    </div>
    <div v-if="pageMode === 'view'">
      <div class="btn btn-success" @click="$emit('setPageMode', 'edit')">
        <i class="bx bx-edit me-1"></i> Edit
      </div>
    </div>

    <div v-if="pageMode === 'edit'">
      <div class="btn btn-danger" @click="$emit('setPageMode', 'view')">
        <i class="bx bx-x me-1"></i> Cancel
      </div>
    </div>
    <div>
      <div
        class="btn btn-success"
        @click="$emit('save')"
        v-if="pageMode === 'add' || pageMode === 'edit'"
      >
        <i class="bx bx-save me-1"></i> Save
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavigationButtons",
  props: {
    pageMode: {
      default: "view",
    },
  },
}
</script>
