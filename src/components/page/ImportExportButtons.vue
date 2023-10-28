<template>
  <div class="text-center text-lg-end">
    <Toast />
    <button type="buttton" class="btn btn-primary me-3" @click="this.import()">
      <i class="fas fa-file-import me-2"></i>Import {{ text }}
    </button>

    <button type="buttton" class="btn btn-primary" @click="this.export()">
      <i class="fas fa-file-export me-2"></i>Export {{ text }}
    </button>
  </div>
</template>

<script>
import Toast from "primevue/toast"

export default {
  name: "ImportExportButtons",
  components: {
    Toast,
  },
  props: {
    text: {
      default: "Roles / Features",
    },
    store: {
      default: "",
    },
  },
  methods: {
    async import() {
      this.$store.dispatch("application/setLoading")
      let res = await this.$store.dispatch(`${this.store}/importjson`)
      if (res?.success) {
        this.$toast.add({
          severity: "success",
          summary: "Confirmed",
          detail: "Import Complete",
          life: 2000,
        })
      }
      this.$store.dispatch("application/setLoading", false)
    },
    async export() {
      this.$store.dispatch("application/setLoading", true)
      let res = await this.$store.dispatch(`${this.store}/exportjson`)
      if (res?.success) {
        this.$toast.add({
          severity: "success",
          summary: "Confirmed",
          detail: "Export Complete",
          life: 2000,
        })
      }
      this.$store.dispatch("application/setLoading", false)
    },
  },
}
</script>
