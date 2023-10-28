<template>
  <Dialog
    header="Transport Run"
    :visible="TransportDropHeaderDialogVisible"
    :modal="true"
    :draggable="false"
    :dismissableMask="true"
  >
    <div class="container">
      <div class="row">
        <div class="col-6">
          <TextInput
            v-model="currentRecord.transportdropname"
            label="Name"
            :error="errors?.transportdropname"
          />
          <DateInput
            v-model="currentRecord.scheduleddatetime"
            label="Scheduled Date Time"
            :error="errors?.scheduleddatetime"
          />

          status / notes
        </div>
        <div class="col-6">
          loading location / transport method / carrier / loading time /
          container
        </div>
      </div>
    </div>
    <template #footer>
      <Button
        label="Cancel"
        icon="pi pi-times"
        class="p-button-danger"
        @click="TransportDropHeaderDialogVisible = false"
      />
      <Button label="Save" icon="pi pi-check" @click="save" />
    </template>
  </Dialog>
</template>

<script>
import DialogMixin from "../../common/DialogCrudMixin.js"
export default {
  name: "TransportDropHeaderDialog",
  mixins: [DialogMixin],
  computed: {
    TransportDropHeaderDialogVisible: {
      get() {
        return this.$store.getters[
          "transportdrop/getTransportDropHeaderDialogVisible"
        ]
      },
      set(value) {
        this.$store.commit(
          "transportdrop/setTransportDropHeaderDialogVisible",
          value
        )
      },
    },
    currentRecord: {
      get() {
        return this.$store.getters["transportdrop/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("transportdrop/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["transportdrop/getErrors"]
      },
    },
  },
  created() {
    this.add()
  },
  data() {
    return {
      defaultRecord: {
        transportdropid: 0, // create
        scheduleddatetime: "",
        transportdropname: "",
        transportdropstatus: 0, // new
        siteid: this.$store.getters["userSession/getUserSessionSiteid"],
      },
      store: "transportdrop",
    }
  },
  methods: {
    async postSaveRow() {
      if (this.modalVisible) {
        this.TransportDropHeaderDialogVisible = true
      } else {
        this.TransportDropHeaderDialogVisible = false
        this.$store.dispatch("transportplanning/getUnplannedTransportDrops")
      }
    },
  },
}
</script>
