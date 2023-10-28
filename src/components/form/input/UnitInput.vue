<template>
  <div class="input-group">
    <label class="inp" v-if="!readonly">
      <input
        ref="input"
        type="text"
        v-model="displayValue"
        v-bind="$attrs"
        placeholder="&nbsp;"
        required
        :class="{ 'is-invalid': error }"
      />

      <span class="label">{{ label }}</span>
      <span class="input-group-text">{{ symbol }}</span>
      <div class="invalid-feedback" v-if="error !== ''">
        {{ error }}
      </div>
    </label>
  </div>

  <div v-if="readonly">
    {{ displayValue }} <span class="">{{ symbol }}</span>
  </div>
</template>

<script>
// todo
// v-maska="[`# ${symbol}`, `#.# ${symbol}`, `#.## ${symbol}`]" softcode this based on presion of decimal ie 3 place or 2?

// {label: "Length", value:1},
//             {label: "Area", value:2},
//             {label: "Volume", value:3},
//             {label: "Weight", value:4},
//             {label: "Time", value:5},
//             {label: "Qty Factor", value:6},

export default {
  name: "UnitInput",
  inheritAttrs: false,
  props: {
    readonly: {
      defaut: false,
    },
    displayUnitType: {
      default: "qtyunit",
      validator(value) {
        // The value must match one of these strings
        return [
          "smalllengthunit",
          "smallweightunit",
          "timeunit",
          "volumeunit",
          "qtyunit",
          "largelengthunit",
          "largeweightunit",
          "areaunit",
        ].includes(value);
      },
    },
    error: {
      default: "",
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: "",
    },
  },
  model: {
    event: "update",
  },
  data() {
    return {
      displayValue: 0,
      symbol: "",
    };
  },
  watch: {
    async displayValue() {
      this.$emit(
        "update:modelValue",
        await this.convertDisplayToModelValue(
          this.displayValue,
          this.displayUnitType
        )
      );
    },
  },
  async mounted() {
    this.displayValue = await this.convertModelToDisplayValue(
      this.modelValue,
      this.displayUnitType
    );
    this.symbol = await this.getUnitSymbol(this.displayUnitType);
  },
  emits: ["update:modelValue"],
  methods: {
    async convertModelToDisplayValue(modelValue, unitType) {
      return await this.$store.dispatch("unit/convertModelToDisplayValue", {
        value: modelValue,
        unitType: unitType,
      });
    },
    async convertDisplayToModelValue(modelValue, unitType) {
      return await this.$store.dispatch("unit/convertDisplayToModelValue", {
        value: modelValue,
        unitType: unitType,
      });
    },
    async getUnitSymbol(unitType) {
      return await this.$store.dispatch("unit/getUnitSymbol", {
        unitType: unitType,
      });
    },
  },
};
</script>

<style scoped>
.input-group {
  display: unset;
}
.input-group input {
  border-radius: 0%;
}

.input-group-text {
  display: unset;
  position: relative;
  top: -2.1em;
  left: 17.5em;
  border-radius: 0%;
}
</style>