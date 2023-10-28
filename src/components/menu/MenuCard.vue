<template>
  <div class="row text-center">
    <div class="col-12">
      <TextInput
        v-model="currentRecord.description"
        label="Description"
        :error="errors?.description"
      />
    </div>
    <div class="col-12 mt-4">
      <RecordFinder
        :limitDisplayCols="['iconid', 'icondata', 'icontags']"
        title="Select Icon"
        store="icon"
        gridid="iconrecordfinder"
        dataKey="iconid"
        label="Select Icon"
        @handleSelection="selectIcon"
      />
      <br />
      <Icon
        :iconid="currentRecord.iconid"
        :iconclass="darkbackground"
        wrapperclass="mt-1 DataModalIcon"
      />
    </div>
  </div>
</template>

<script>
import RecordFinder from "../recordfinder/RecordFinder";
import Icon from "../Icon";

export default {
  name: "MenuCard",
  components: {
    RecordFinder,
    Icon,
  },
  methods: {
    selectIcon(icon) {
      this.currentRecord.iconid = icon.iconid;
    },
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["menu/getCurrentRecord"];
      },
      set(value) {
        this.$store.commit("menu/setCurrentRecord", value);
      },
    },
    errors: {
      get() {
        return this.$store.getters["menu/getErrors"];
      },
    },
  },
};
</script>
