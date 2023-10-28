<template>
  <Layout :pagetitle="'Menus'" :pageDescription="'Create Menu Groups here'">
    <TopMenu
      :pageView="pageView"
      @changeView="changeView"
      :displayAddButton="true"
      @add="add"
    />
    <MenuDataGrid
      ref="MenuDataGrid"
      @onRowDoubleClick="edit"
      @editRow="edit"
      v-if="pageView === 'list'"
    />
    <MenuCardGrid
      ref="MenuCardGrid"
      @onRowDoubleClick="edit"
      @editRow="edit"
      v-if="pageView === 'grid'"
    />

    <Dialog
      header="Menu"
      v-model:visible="modalVisible"
      :modal="true"
      :draggable="false"
      :dismissableMask="true"
    >
      <MenuCard />
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
import DialogCrudMixin from "../../../common/DialogCrudMixin.js"
import Dialog from "primevue/dialog"
import MenuDataGrid from "../../../components/menu/MenuDataGrid"
import MenuCardGrid from "../../../components/menu/MenuCardGrid"
import Button from "primevue/button"
import MenuCard from "../../../components/menu/MenuCard"
import TopMenu from "../../../components/page/TopMenu"

export default {
  name: "menus",
  data() {
    return {
      store: "menu",
      dataGridRef: "MenuDataGrid",
      defaultRecord: {
        menuid: 0,
        description: "",
      },
    }
  },
  components: {
    Dialog,
    MenuDataGrid,
    Button,
    MenuCard,
    TopMenu,
    MenuCardGrid,
  },
  mixins: [pageMixin, DialogCrudMixin],
  methods: {
    postSaveRow() {
      if (this.pageView === "list") {
        this.$refs.MenuDataGrid.search()
      }

      if (this.pageView === "grid") {
        this.$refs.MenuCardGrid.search()
      }
    },
  },
}
</script>

<style></style>
