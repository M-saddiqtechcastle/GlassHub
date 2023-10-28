<template>
  <Layout :pagetitle="'Icons'" :pageDescription="'Manage Icons'">
    <TopMenu :pageView="pageView" @changeView="changeView" :displayAddButton="true" @add="add"/>
    <ImportExportButtons text="Icons" store="icon" />
    <IconDataGrid
      ref="IconDataGrid"
      @onRowDoubleClick="editIcon"
      @editRow="editIcon"
    />

    <Dialog
      header="Add a new icon"
      v-model:visible="isModalVisible"
      :modal="true"
      :draggable="false"
      :dismissableMask="true"
    >
      <IconCard />
      <template #footer>
        <Button
          label="Cancel"
          icon="pi pi-times"
          class="p-button-danger"
          @click="isModalVisible = false"
        />
        <Button label="Save" icon="pi pi-check" @click="saveIcon" />
      </template>
    </Dialog>
  </Layout>
</template>

<script>
import pageMixin from "../../../common/pageMixin.js"
import IconDataGrid from "../../../components/icon/IconDataGrid"
import Dialog from "primevue/dialog"
import IconCard from "../../../components/icon/IconCard"
import Button from "primevue/button"
import ImportExportButtons from "../../../components/page/ImportExportButtons"
import TopMenu from "../../../components/page/TopMenu"

export default {
  name: "icons",
  mixins: [pageMixin],
  components: {
    IconDataGrid,
    Dialog,
    IconCard,
    Button,
    ImportExportButtons,
    TopMenu,
  },
  data() {
    return {
      isModalVisible: false,
      iconInfo: "",
      iconTags: "",
    }
  },
  methods: {
    async editIcon(iconid) {
      this.$store.dispatch("application/setLoading", true)
      await this.$store.dispatch("icon/FetchById", iconid)
      this.isModalVisible = true
      this.$store.dispatch("application/setLoading", false)
    },
    add() {
      let defaultRecord = {
        iconid: 0,
        icondata: "",
        icontags: "",
      }
      this.$store.commit("icon/setCurrentRecord", defaultRecord)
      this.isModalVisible = true
    },
    async saveIcon() {
      if (
        await this.saveCurrentRecord(
          this.$store.getters["icon/getCurrentRecord"]
        )
      ) {
        this.isModalVisible = false
      }
    },
    async saveCurrentRecord(currentRecord) {
      this.$store.dispatch("application/setLoading", true)

      let response
      if (parseInt(currentRecord.iconid) === 0) {
        response = await this.$store.dispatch("icon/add", currentRecord)
      } else {
        response = await this.$store.dispatch("icon/update", currentRecord)
      }

      if (response.errors.length === 0) {
        this.$toast.add({
          severity: "success",
          summary: "Updated",
          detail: "Icon Updated",
          life: 3000,
        })
        this.$store.dispatch("application/setLoading", false)
        console.log(this)
        this.$refs.IconDataGrid.searchIcon()
        return true
      } else {
        this.$store.dispatch("application/setLoading", false)
        return false
      }
    },
  },
}
</script>

<style></style>
