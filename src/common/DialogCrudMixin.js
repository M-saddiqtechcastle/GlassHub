import Button from "primevue/button"
import Dialog from "primevue/dialog"

export default {
  components: {
    Button,
    Dialog,
  },
  data() {
    return {
      modalVisible: false,
      store: {
        default: "",
      },
      dataGridRef: {
        default: "",
      },
      defaultRecord: {
        someid: 0,
      },
    }
  },
  methods: {
    async postSaveRow() {},
    add() {
      this.$store.commit(this.store + "/setCurrentRecord", this.defaultRecord)
      this.$store.commit(this.store + "/setErrors", {})
      this.modalVisible = true
    },
    async edit(id) {
      console.log(id, this)
      this.$store.dispatch("application/setLoading", true)
      await this.$store.dispatch(this.store + "/FetchById", id)
      this.$store.commit(this.store + "/setErrors", {})
      this.modalVisible = true
      this.$store.dispatch("application/setLoading", false)
    },
    async save() {
      if (
        await this.saveCurrentRecord(
          this.$store.getters[this.store + "/getCurrentRecord"]
        )
      ) {
        this.modalVisible = false
      }
      this.postSaveRow()
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
        return true
      } else {
        this.$store.dispatch("application/setLoading", false)
        return false
      }
    },
    async deleteRow(event) {
      this.loading = true
      this.$confirm.require({
        message: this.deleteText,
        header: "Delete",
        icon: "pi pi-exclamation-triangle",
        accept: async () => {
          let complete = await this.deleteRecord(event[this.dataKey])

          if (complete) {
            this.$toast.add({
              severity: "success",
              summary: "Confirmed",
              detail: "Deleted",
              life: 3000,
            })
            this.$emit("postDeleteRow", event) // push to parent to handle
          }
          this.loading = false
        },
        reject: () => {
          // do nothing
        },
      })
      this.loading = false
    },
  },
}
