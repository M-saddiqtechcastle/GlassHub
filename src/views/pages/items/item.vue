<template>
  <Layout :pagetitle="'Item'">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="mb-3">
          <h5 class="card-title">
            Item<span class="text-muted fw-normal ms-2"></span>
          </h5>
        </div>
      </div>
      <!-- content-->
    </div>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js";
export default {
    name:"item",
    mixins:[pageMixin],
}
</script>

<style scoped>

</style>