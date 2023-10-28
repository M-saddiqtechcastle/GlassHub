<template>
  <div class="row m-2 h-75" v-if="pageMode === 'view'">
    <div class="col-6">
      {{ currentRecord.containername }} <br />
      {{ currentRecord.length }} x {{ currentRecord.width }} x
      {{ currentRecord.height }} <br />
      {{ currentRecord.weightlimit }} <br />
      {{ currentRecord.linkcode }}
    </div>

    <div class="col-6">
      <div class="row mb-4">3d render</div>
    </div>
  </div>

  <div class="row m-2 h-75" v-if="pageMode === 'edit' || pageMode === 'add'">
    <div class="col-6">
      <TextInput
        v-model="currentRecord.containername"
        label="Name"
        :error="errors?.containername"
      />
      <unitInput
        v-model="currentRecord.length"
        label="Length"
        :error="errors?.length"
        displayUnitType="largelengthunit"
      />
      <unitInput
        v-model="currentRecord.width"
        label="Width"
        :error="errors?.width"
        displayUnitType="largelengthunit"
      />
      <unitInput
        v-model="currentRecord.height"
        label="Height"
        :error="errors?.height"
        displayUnitType="largelengthunit"
      />
     <unitInput
        v-model="currentRecord.weightlimit"
        label="Weight Limit"
        :error="errors?.weightlimit"
        displayUnitType="largeweightunit"
      />
      <TextInput
        v-model="currentRecord.linkcode"
        label="Link Code"
        :error="errors?.linkcode"
      />
    </div>

    <div class="col-6">
      <div class="row">
        <div class="col">
          <h4 class="card-title mb-2">Container Type</h4>
          <Dropdown
            v-model="containertype"
            :options="containerTypes"
            optionLabel="label"
            @change="typeChanged"
            optionValue="value"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">3d render</div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown"
import unitInput from "../form/input/UnitInput"
//import TransportIllustrator from "../../../public/transportillustrator/transportillustrator.js"

export default {
  name: "TransportContainerCard",
  components: {
    Dropdown,
    unitInput,
  },
  props: {
    pageMode: {
      default: "view",
    },
  },
  data() {
    return {
      containerTypes: [
        { label: "Large", value: "large" },
        { label: "Medium", value: "medium" },
        { label: "Small", value: "small" },
      ],
      containertype: "large",
    }
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["transportcontainer/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("transportcontainer/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["transportcontainer/getErrors"]
      },
    },
  },
  methods: {
    typeChanged(event) {
      this.currentRecord.containertype = event.value
      // this.$emit("setType", event.value) // push to parent to handle
    },
  },
  watch: {
    type() {
      this.currentRecord.containertype = this.type
    },
  },
  created() {
    this.currentRecord.containertype = this.type
  },
}
</script>
