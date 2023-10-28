<template>
  Metric
  <InputSwitch
    v-model="currentRecord.metric"
    :class="{ 'is-invalid': errors?.metric }"
    :trueValue="1"
  />
  <div class="invalid-feedback" v-if="errors?.metric">
    {{ errors?.metric }}
  </div>
</template>

<!-- todo finish me -->
