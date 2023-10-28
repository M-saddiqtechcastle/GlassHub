<template>
  <Layout :pagetitle="'User Roles'">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="mb-3">
          <h5 class="card-title">
            Users Roles<span class="text-muted fw-normal ms-2">(834)</span>
          </h5>
        </div>
      </div>
      <!-- content-->
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main";
export default {
    name:"userroles",
    components: {
      Layout,
    }
}
</script>

<style scoped>

</style>