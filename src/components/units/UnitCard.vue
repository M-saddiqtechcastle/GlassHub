<template>
  <div class="row m-2 h-75">
    <div class="m-1 d-block align-items-center d-md-flex">
      <TextInput
        v-model="currentRecord.unit"
        label="Unit Name"
        :error="errors?.unit"
      />
    </div>
    <div class="m-1 d-block align-items-center d-md-flex">
      <UnitTypeSelect :type="currentRecord.type" @setType="setType" />
    </div>
    <div class="m-1 d-block align-items-center d-md-flex">
      Metric
      <InputSwitch
        v-model="currentRecord.metric"
        :class="{ 'is-invalid': errors?.metric }"
        :trueValue="1"
      />
      <div class="invalid-feedback" v-if="errors?.metric">
        {{ errors?.metric }}
      </div>
    </div>
    <div class="m-1 d-block align-items-center d-md-flex">
      Base Unit
      <InputSwitch
        v-model="currentRecord.baseunit"
        :class="{ 'is-invalid': errors?.metric }"
      />
      <div class="invalid-feedback" v-if="errors?.baseunit" :trueValue="1">
        {{ errors?.baseunit }}
      </div>
    </div>
    <div class="m-1 d-block align-items-center d-md-flex">
      <TextInput
        v-model="currentRecord.baseconversion"
        label="Base Conversion"
        :error="errors?.baseconversion"
        type="number"
        step="0.000001"
      />
    </div>
    <div class="m-1 d-block align-items-center d-md-flex">
      <TextInput
        v-model="currentRecord.linkcode"
        label="Link Code"
        :error="errors?.linkcode"
      />
    </div>
  </div>
</template>

<script>
import UnitTypeSelect from "../../components/units/UnitTypeSelect"
import InputSwitch from "primevue/inputswitch"

export default {
  name: "UnitCard",
  components: {
    UnitTypeSelect,
    InputSwitch,
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["unit/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("unit/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["unit/getErrors"]
      },
    },
  },
  methods: {
    setType(type) {
      this.currentRecord.type = type
    },
  },
}
</script>
