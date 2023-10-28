<template>
  <Layout :pagetitle="'Units'">
    <TopMenu :pageView="pageView" @changeView="changeView" :displayAddButton="true" @add="add"/>
      <UnitDataGrid
        ref="UnitDataGrid"
        @onRowDoubleClick="edit"
        @editRow="edit"
        v-if="pageView === 'list'"
      />

      <UnitCardGrid
        ref="UnitDataGrid"
        @onRowDoubleClick="edit"
        @editRow="edit"
        v-if="pageView === 'grid'"
      />

      <Dialog
        header="Unit"
        v-model:visible="modalVisible"
        :modal="true"
        :draggable="false"
        :dismissableMask="true"
      >
        <UnitCard />
        <template #footer>
          <Button
            label="Cancel"
            icon="pi pi-times"
            class="p-button-danger"
            @click="modalVisible = false"
          />
          <Button label="Save" icon="pi pi-check" @click="save" />
        </template>
      </Dialog>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js"
import DialogMixin from "../../../common/DialogCrudMixin.js"
import TopMenu from "../../../components/page/TopMenu"
import UnitDataGrid from "../../../components/units/UnitDataGrid"
import UnitCardGrid from "../../../components/units/UnitCardGrid"
import UnitCard from "../../../components/units/UnitCard"
//import ImportExportButtons from "../../../components/page/ImportExportButtons"

export default {
  name: "units",
  mixins: [pageMixin, DialogMixin],
  components: {
    UnitDataGrid,
    UnitCardGrid,
    UnitCard,
    TopMenu,
    //ImportExportButtons,
  },
  data() {
    return {
      store: "unit",
      dataGridRef: "UnitDataGrid",
      defaultRecord: {
        unitid: 0,
        unit: "",
        type: 1,
        baseunit: false,
        metric: false,
      },
    }
  },
}
</script>

<style scoped></style>
