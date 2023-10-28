<template>
    <button type="button" class="btn btn-outline-primary" v-bind="$attrs">
      Slot {{slotNumberLabel}} <i class="fas fa-inbox fa-fw fa-15x"></i>
    </button>
</template>

<script>
export default {
    name: "SlotButton",
    inheritAttrs: false,
    props: {
        slotNumberLabel: {
            default:0
        }
    },
    emits: ["update:modelValue"],
}
</script>
