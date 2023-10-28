<template>
  <Layout :pagetitle="'Customer'">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="mb-3">
          <h5 class="card-title">
            Customer<span class="text-muted fw-normal ms-2"></span>
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
    name:"customer",
    mixins:[pageMixin],
}
</script>

<style scoped>

</style>