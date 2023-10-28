<template>
  <div class="row">
    <div class="col-6">
      <div class="col-12">
        <RecordFinder
          title="Item Select"
          store="item"
          gridid="itemRecordfinder"
          dataKey="itemid"
          label="Select
        Item"
          @handleSelection="handleItemSelection"
        />
      </div>

      <div class="col-12 mb-2">
        <TextInput
          v-model="currentRecord.code"
          label="Item Code"
          :error="errors?.description"
          disabled
        />
      </div>

      <div class="col-12 mb-2">
        <TextInput
          v-model="currentRecord.description"
          label="Description"
          :error="errors?.description"
          disabled
        />
      </div>

      <div class="col-12 mb-2">
        <div class="error" v-if="errors.itemid !== ''">
          {{ errors?.itemid }}
        </div>
      </div>
    </div>



    <div class="col-6">
      <div class="col-12">
        <UnitInput
          v-model="currentRecord.shippingdemandqty"
          label="Demand Quantity"
          :error="errors?.shippingdemandqty"
          displayUnitType="qtyunit"
        />
      </div>
      <div class="col-12">
        <UnitInput
          v-model="currentRecord.plannedqty"
          label="Planned Quantity"
          :error="errors?.shippingdemandqty"
          displayUnitType="qtyunit"
        />
      </div>
      <div class="col-12">
        <TextInput
          v-model="currentRecord.linkcode"
          label="Link Code"
          :error="errors?.linkcode"
        />
      
      </div>
    </div>
  </div>
</template>

<script>
import RecordFinder from "../recordfinder/RecordFinder";
import UnitInput from "../form/input/UnitInput";

export default {
  name: "ShippingDemandLineCard",
  components: {
    RecordFinder,
    UnitInput,
  },
  methods: {
    handleItemSelection(item) {
      console.log(item);
      this.currentRecord.itemid = item.itemid;
      this.currentRecord.description = item.description;
    },
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["shippingdemandline/getCurrentRecord"];
      },
      set(value) {
        this.$store.commit("shippingdemandline/setCurrentRecord", value);
      },
    },
    errors: {
      get() {
        return this.$store.getters["shippingdemandline/getErrors"];
      },
    },
  },
};
</script>

<style scoped>
.error {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 87.5%;
  color: #f56e6e;
}
</style>
