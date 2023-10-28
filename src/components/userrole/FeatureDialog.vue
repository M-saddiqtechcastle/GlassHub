<template>
  <div class="row">
    <div class="col-6">
      <TextInput
        v-model="currentRecord.featurename"
        label="Feature Name"
        :error="errors?.featurename"
      />
      <br />
      <TextInput
        v-model="currentRecord.filepath"
        label="Path"
        :error="errors?.filepath"
      />
      <div class="select-group">
        <label class="selectLabel imp" for="selectTest">Feature Type</label>
        <select
          class="form-select text-muted mb-0"
          v-model="currentRecord.featuretype"
          :class="{ 'is-invalid': errors?.featuretype }"
          :value="currentRecord.featuretype"
          placeholder="Feature Type"
        >
          <option value="0">Core</option>
          <option value="1">External</option>
        </select>

        <div class="invalid-feedback" v-if="errors?.featuretype">
          {{ errors?.featuretype }}
        </div>
      </div>

      <div class="select-group">
        <label class="selectLabel" for="selectTest">Access Type</label>
        <select
          class="form-select text-muted mb-0"
          v-model="currentRecord.featureaccesstype"
          :class="{ 'is-invalid': errors?.featureaccesstype }"
          :value="currentRecord.featureaccesstype"
          placeholder="Access Type"
        >
          <option value="1">Scanner</option>
          <option value="2">Manager</option>
        </select>
      </div>
    </div>

    <div class="col-6">
      <RecordFinder
        :limitDisplayCols="['iconid', 'icondata', 'icontags']"
        title="Icon Select"
        store="icon"
        gridid="iconrecordfinder"
        dataKey="iconid"
        label="<i class='fas fa-crosshairs'></i> Select Icon"
        @handleSelection="selectIcon"
      >
      </RecordFinder>
      <Icon :iconid="currentRecord.iconid" wrapperclass="icon darkbackground" />
    </div>
  </div>
</template>

<script>
import RecordFinder from "../recordfinder/RecordFinder"
import Icon from "../../components/Icon"

export default {
  name: "FeatureDialog",
  inject: ["dialogRef"],
  components: {
    RecordFinder,
    Icon,
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["feature/getCurrentRecord"]
      },
      set(value) {
        console.log("set", value)
        this.$store.commit("feature/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["feature/getErrors"]
      },
    },
  },
  methods: {
    selectIcon(icon) {
      this.currentRecord.iconid = icon.iconid

    },
  },
}
</script>

<style scoped>
.select-group {
  max-width: 280px;
}

.select-group .selectLabel {
  margin-left: -2.4em;
}
</style>
