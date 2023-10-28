<template>
  <div class="statusDropdown">
    <Dropdown
      v-model="Status"
      :options="statusOptions"
      optionLabel="label"
      @change="statusChanged"
      optionValue="value"
      :disabled="disabled"
    >
    
      <template #option="slotProps">
        <div class="">
          <span
            class="dot"
            :style="`background-color:${slotProps.option.color};`"
          ></span>
          {{ slotProps.option.label }}
        </div>
      </template>
    </Dropdown>
    <div class="invalid-feedback" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown"
export default {
  name: "ShippingDemandStatusSelect",
  components: {
    Dropdown,
  },
  data() {
    return {
      statusOptions: [
        { value: 0, label: "Open", color: "blue" },
        { value: 10, label: "Planned", color: "green" },
        { value: 20, label: "Picked", color: "yellow" },
        { value: 30, label: "Shipped", color: "grey" },
        { value: 90, label: "Cancelled", color: "red" },
      ],
      Status: 0,
    }
  },
  props: {
    propStatus: {
      default: 1,
    },
    error: {
      default: "",
    },
    disabled: {
      default: false,
    },
  },
  created() {
    this.Status = parseInt(this.propStatus)
  },
  watch: {
    propStatus() {
      this.Status = parseInt(this.propStatus)
    },
  },
  methods: {
    statusChanged(event) {
      this.$emit("setDemandStatus", event.value) // push to parent to handle
    },
  },
}
</script>

<style scoped>
.dot {
  height: 1em;
  width: 1em;
  border-radius: 50%;
  display: inline-block;
}
</style>
