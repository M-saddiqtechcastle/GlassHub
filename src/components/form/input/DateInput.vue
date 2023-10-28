<template>
  <label class="inp">
    <input
      type="datetime-local"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="&nbsp;"
      required
      :class="{ 'is-invalid': error }"
    />
    <span class="label">{{ label }}</span>
    <div class="invalid-feedback" v-if="error !== ''">
      {{ error }}
    </div>
  </label>
</template>

<script>
import DateTimeMixin from "../../../common/DateTimeMixin.js"

export default {
  name: "DateInput",
  mixins: [DateTimeMixin],
  inheritAttrs: false,
  components: {},
  model: {
    event: "update",
  },
  data() {
    return {
      value: 0,
    }
  },
  watch: {
    modelValue: function () {
      this.value = this.convertToDisplay(this.modelValue)
    },
    value: function () {
      this.$emit("update:modelValue", this.convertToModel(this.value))
    },
  },
  created() {
    this.value = this.convertToDisplay(this.modelValue)
  },
  props: {
    error: {
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
}
</script>
