<template>
  <div class="card action-card">
    <div class="card-body">
      <h2>{{ site.sitename }}</h2>
      <hr />
      <div class="text-start">
        <!--<i class="fas fa-exclamation-triangle fa-fw fa-2x text-danger"></i> -->
        <p>
          {{ site.addressline1 }}<br v-if="site?.addressline1" />
          {{ site.addressline2 }}<br v-if="site?.addressline2" />
          {{ site.addresstown }}<br v-if="site?.addresstown" />
          {{ site.addresscounty }}<br v-if="site?.addresscounty" />
          {{ site.addresscountry }}<br v-if="site?.addresscountry" />
          {{ site.addresspostcode }}
        </p>
      </div>
      <div class="text-center">
        <button
          type="button"
          class="btn btn-soft-primary btn-sm w-50 mx-auto"
          @click="editRow(site)"
        >
          <i class="fa fa-building me-1"></i> View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteSummaryCard",
  props: {
    site: {
      default: {},
    },
  },
  methods: {
    async editRow(event) {
      this.$emit("editRow", event) // push to parent to handle
    },
  },
}
</script>
