<template>
  <label class="inp">
    <input
      type="text"
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
export default {
  name: "TextInput",
  inheritAttrs: false,
  model: {
    event: "update",
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
