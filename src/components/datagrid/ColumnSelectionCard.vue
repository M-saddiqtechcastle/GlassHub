<template>
  <div class="card ml-4 mb-2 mr-4">
    <div class="message-list mb-0 p-1">
      <div class="list">
        <div class="row p-2 align-items-center">
          <div class="col-1 pe-0">
            <div class="d-inline-block m-0 p-0 pb-1 me-1">
              <Checkbox
                v-model="column.visible"
                :binary="true"
                trueValue="1"
                falseValue=""
              />
            </div>
            <div class="d-inline-block m-0 p-0">
              <span
                class="mdi mdi-eye-outline text-muted toggle"
                v-if="column.visible === '1'"
              ></span>
              <span
                class="mdi mdi-eye-off-outline text-muted"
                v-if="column.visible !== '1'"
              ></span>
            </div>
          </div>
          <div class="col-5">
            <h5 class="font-size-14 mb-0">
              <input type="text" class="form-control" v-model="column.title" />
            </h5>
          </div>
          <div class="col-3">
            <span class="text-muted text-uppercase font-size-12">
              {{ column.name }}</span
            >
          </div>

          <div class="col-1">
            <span
              class="mdi mdi-sort-ascending"
              :class="{
                'text-success': column.sorting === '1',
                'text-danger': column.sorting !== '1',
              }"
            ></span>
          </div>
          <div class="col-2">
            <span class="text-muted text-uppercase font-size-12">
              Width: {{ column.width }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "primevue/checkbox";
export default {
  name: "columnselectioncard",
  props: {
    col: {},
  },
  data() {
    return {
      column: {},
    };
  },
  components: {
    Checkbox,
  },
  mounted() {
    this.column = this.col;
  },
  methods: {},
};
</script>

<style >

.p-checkbox .p-checkbox-box {
  width: 16px;
  height: 16px;
}

.p-checkbox .p-checkbox-box .p-checkbox-icon {
  font-size: 10px;
}
</style>