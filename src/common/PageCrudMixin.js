export default {
  data() {
    return {
      store: "company",
      dataGridRef: {
        default: "",
      },
      defaultRecord: {
        companyid: 0,
      },
      addPage: {
        default: "",
      },
    }
  },
  methods: {
    setPageMode(mode) {
      this.$store.commit(this.store + "/setPageMode", mode)
    },
    add() {
      this.$store.commit(this.store + "/setCurrentRecord", this.defaultRecord)
      this.$store.commit(this.store + "/setErrors", {})
      this.$store.commit(this.store + "/setPageMode", "add")
      this.$router.push(`/${this.addPage}/0`)
    },
    async edit(id) {
      this.$router.push(`/${this.addPage}/${id}`)
      this.$store.commit(this.store + "/setPageMode", "view")
      this.$store.commit(this.store + "/setErrors", {})
    },
    async save() {
      if (
        await this.saveCurrentRecord(
          this.$store.getters[this.store + "/getCurrentRecord"]
        )
      ) {
        this.$router.push(
          `/${this.addPage}/${this.currentRecord[this.store + "id"]}`
        )
      }
    },
    async saveCurrentRecord(currentRecord) {
      this.$store.dispatch("application/setLoading", true)
      let response
      if (parseInt(currentRecord[this.store + "id"]) === 0) {
        response = await this.$store.dispatch(
          this.store + "/add",
          currentRecord
        )
      } else {
        response = await this.$store.dispatch(
          this.store + "/update",
          currentRecord
        )
      }

      if (typeof response === "string") {
        console.log("Error Returned From Server", response)
        this.$store.dispatch("application/setLoading", false)
        return false
      }

      if (response.errors.length === 0) {
        this.$toast.add({
          severity: "success",
          summary: "Updated",
          detail: "Updated",
          life: 3000,
        })
        this.$store.dispatch("application/setLoading", false)
        this.$store.commit(this.store + "/setPageMode", "view")
        return true
      } else {
        this.$store.dispatch("application/setLoading", false)
        return false
      }
    },
  },
}
