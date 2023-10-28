<template>
  <div>
    <h4 class="card-title mb-2">Type</h4>
    <Dropdown
      v-model="UnitType"
      :options="UnitTypes"
      optionLabel="label"
      @change="typeChanged"
      optionValue="value"
    />
    <div class="invalid-feedback" v-if="errors?.type">
      {{ errors?.type }}
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown"
export default {
  name: "UnitTypeSelect",
  components: {
    Dropdown,
  },
  data() {
    return {
      UnitTypes: [
        { label: "Length", value: 1 },
        { label: "Area", value: 2 },
        { label: "Volume", value: 3 },
        { label: "Weight", value: 4 },
        { label: "Time", value: 5 },
        { label: "Qty Factor", value: 6 },
      ],
      UnitType: 1,
    }
  },
  methods: {
    typeChanged(event) {
      this.$emit("setType", event.value) // push to parent to handle
    },
  },
  props: {
    type: {
      default: 1,
    },
    errors: {
      default: {},
    },
  },
  watch: {
    type() {
      this.UnitType = this.type
    },
  },
  created() {
    this.UnitType = this.type
  },
}
</script>
