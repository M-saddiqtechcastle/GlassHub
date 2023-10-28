<script>
import { h } from "vue"
import Button from "primevue/button"
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import columnSelection from "./ColumnSelection"
import Toast from "primevue/toast"
//import ColumnGroup from "primevue/columngroup"; //optional for column grouping
//import Row from "primevue/row";

export default {
  data() {
    return {
      // showEditColumns: true,
      selectRows: [],
      loading: true,
      totalRecords: 0,
      lazyParams: {},
      // instanceid: 0,
      // gridid: "testgrid",
      dataset: null,
      columns: null,
    }
  },
  props: {
    gridid: String,
    instanceid: Number,
    deleteText: String,
    dataKey: String,
    store: {
      default: "",
    },
    showEditColumns: {
      default: true,
    },
    limitDisplayCols: [],
    limitQuery: {},
    showColumnEdit: {
      default: true,
    },
    showGridExport: {
      default: true,
    },
    showRefresh: {
      default: true,
    },
    rowsPerPage: {
      default: [12, 24, 40, 80],
    },
  },
  components: {
    DataTable,
    Column,
    Toast,
    //columnSelection,
    // ColumnGroup,
    //  Row
  },
  async mounted() {
    this.loading = true
    this.filters = null
    this.lazyParams = {
      first: 0,
      rows: this.$refs.dt.rows,
      sortField: null,
      sortOrder: null,
      filters: this.filters,
      query: null,
      queryparams: [],
      page: 0,
    }

    await this.$store.dispatch(`${this.store}/Fetchjsgriduserfields`, {
      gridid: this.gridid,
      instance: this.instance,
    })

    this.columns = this.$store.getters[`${this.store}/getColumns`]
    
    if (this.limitDisplayCols && this.limitDisplayCols.length > 0) {
      this.columns = this.columns.filter((filtercolumn) => {
        return this.limitDisplayCols.includes(filtercolumn.name)
      })
    }

    this.loadLazyData()
  },
  async created() {},
  methods: {
    setQuery(inputQuery) {
      this.loading = true
      this.lazyParams.query = inputQuery
      this.loadLazyData()
    },
    async setQueryParams(inputqueryparams) {
      this.loading = true
      this.lazyParams.queryparams = inputqueryparams
      this.loadLazyData()
    },
    async loadLazyData() {
      this.loading = true
      let sortOrder = "ASC"
      if (this.lazyParams?.sortOrder < 0) {
        sortOrder = "DESC"
      }

      let page = 1
      if (this.lazyParams?.page > 0) {
        page = parseInt(this.lazyParams.page + 1)
      }

      let queryparams = this.lazyParams.queryparams
      if (this.limitQuery) {
        // todo add loop through groups and append limit query
        queryparams = this.limitQuery
      }

      await this.$store.dispatch(`${this.store}/fetch`, {
        page: page,
        rp: parseInt(this.lazyParams.rows),
        sortname: this.lazyParams?.sortField ?? "",
        sortorder: sortOrder,
        query: this.lazyParams.query ?? "",
        queryparams: queryparams ?? [],
      })
      this.dataset = this.$store.getters[`${this.store}/getData`]
      this.page = this.$store.getters[`${this.store}/getPage`]
      this.totalRecords = this.$store.getters[`${this.store}/getTotal`]

      setTimeout(() => {
        // provide visual clue that load has happened
        this.loading = false
      }, 100)
    },
    onPage(event) {
      this.loading = true
      this.lazyParams = event
      this.loadLazyData()
    },
    onSort(event) {
      this.loading = true
      this.lazyParams = event
      this.loadLazyData()
    },
    onFilter() {
      this.loading = true
      this.lazyParams.filters = this.filters
      this.loadLazyData()
    },
    onSelectAllChange(event) {
      event
    },
    onRowSelect(event) {
      // to enable use @rowSelect="onRowSelect" on the datatable
      alert("click not double click")
      console.log("row select", event)
      // this.selectAll = this.selectedCustomers.length === this.totalRecords;
    },
    onRowDoubleClick(event) {
      this.$emit("onRowDoubleClick", event) // push to parent to handle
    },
    onRowUnselect() {
      console.log("onRowUnselect")
      this.selectAll = false
    },
    async editGridColumns() {
      this.loading = true
      let thisObject = this
      let gridOptionsDialog = this.$dialog.open(columnSelection, {
        props: {
          header: "Grid Options",
          style: {
            width: "50vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
          modal: true,
        },
        templates: {
          footer: () => {
            return [
              h(Button, {
                label: "Save",
                icon: "bx bx-save",
                onClick: () =>
                  gridOptionsDialog.close({ columns: this.columns }),
                class: "btn btn-primary",
              }),
            ]
          },
        },
        data: {
          columns: this.columns,
          gridid: this.gridid,
          instanceid: this.instanceid,
        },
        async onClose(options) {
          const callbackParams = options.data
          if (callbackParams !== undefined && callbackParams !== null) {
            thisObject.loading = true

            await thisObject.$store.dispatch(`jsgriduserfields/setColumns`, {
              fields: callbackParams.columns,
            })

            thisObject.columns = callbackParams.columns
            await thisObject.loadLazyData()
            thisObject.loading = false
          }
        },
      })
      this.loading = false
    },
    exportGridData() {
      this.$refs.dt.exportCSV()
    },
    async refreshGrid() {
      this.loading = true
      await this.loadLazyData()
    },
    rowClass(data) {
      data
      //console.log(data);
      //return (data.status = "");
    },
    async columnResizeEnd(event) {
      this.loading = true
      let fieldKey = event.element.__vueParentComponent.props.column.key
      let updateColumns = []
      this.columns.forEach((colRecord) => {
        if (parseInt(colRecord.jsgriduserfieldsid) === parseInt(fieldKey)) {
          colRecord.width = `${parseInt(event.element.clientWidth)}px`
        }
        updateColumns.push(colRecord)
      })

      await this.$store.dispatch(`jsgriduserfields/setColumns`, {
        fields: updateColumns,
      })

      this.loading = false
    },
    async columnReorder() {
      this.loading = true
      let columnOrder = this.$refs.dt.columns

      columnOrder = columnOrder.filter((column) => {
        return column.key > 0
      })

      let columns = this.columns
      let updateColumn = []

      let i = 0
      columnOrder.forEach((column) => {
        let col = columns.find((findCol) => {
          return parseInt(findCol.jsgriduserfieldsid) === parseInt(column.key)
        })
        col.displayorder = i
        updateColumn.push(col)
        i++
      })

      await this.$store.dispatch(`jsgriduserfields/setColumns`, {
        fields: updateColumn,
      })

      this.loading = false
    },
    async deleteRow(event) {
      console.log("delete")
      this.loading = true
      this.$confirm.require({
        message: this.deleteText,
        header: "Delete",
        icon: "pi pi-exclamation-triangle",
        accept: async () => {
          let complete = await this.deleteRecord(event[this.dataKey])

          if (complete) {
            this.$toast.add({
              severity: "success",
              summary: "Confirmed",
              detail: "Deleted",
              life: 3000,
            })
            this.refreshGrid()
            this.$emit("postDeleteRow", event) // push to parent to handle
          }
          this.loading = false
        },
        reject: () => {
          // do nothing
        },
      })
      this.loading = false
    },
    editRow(event) {
      // run edit trigger
      this.$emit("editRow", event) // push to parent to handle
    },
    async deleteRecord(id) {
      let response = await this.$store.dispatch(`${this.store}/delete`, {
        id: id,
      })

      if (response.success) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<template>
  <div class="gridContainer">
    
    <Toast />
    <div class="grid-options">
      <span
        class="mdi mdi-file-table-box-outline"
        @click="editGridColumns"
        v-if="showColumnEdit"
      ></span>
      <span
        class="mdi mdi-application-export"
        @click="exportGridData"
        v-if="showGridExport"
      ></span>
      <span
        class="mdi mdi-table-refresh"
        @click="refreshGrid"
        v-if="showRefresh"
      ></span>
    </div>
    <DataTable
      class="p-datatable-sm table project-list-table table-nowrap align-middle table-borderless"
      tableClass="table project-list-table table-nowrap align-middle table-borderless"
      :first="firstRecordIndex"
      :totalRecords="totalRecords"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :rowsPerPageOptions="rowsPerPage"
      @column-resize-end="columnResizeEnd"
      @column-reorder="columnReorder"
      :value="dataset"
      :lazy="true"
      :loading="loading"
      :paginator="true"
      :pageLinkSize="5"
      :exportFilename="controller"
      :rows="rowsPerPage[0]"
      removableSort
      @sort="onSort($event)"
      @page="onPage($event)"
      v-model:selection="selectRows"
      selectionMode="single"
      :dataKey="dataKey"
      @row-dblclick="onRowDoubleClick(selectRows)"
      @rowUnselect="onRowUnselect"
      ref="dt"
      :rowClass="rowClass"
      :resizableColumns="true"
      :reorderableColumns="true"
    >
      <Column
        v-for="col of columns"
        :field="col.name"
        :header="col.title"
        :key="col.jsgriduserfieldsid"
        :sortable="col.sorting"
        :hidden="!col.visible"
        :style="{ width: `${col.width}` }"
        bodyStyle="text-align: `${col.align}`"
        :columnKey="col.jsgriduserfieldsid"
        :data-id="col.jsgriduserfieldsid"
        bodyClass="bodyClass"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </Column>
      <Column
        v-if="showEditColumns"
        :exportable="false"
        style="min-width: 8rem"
        header="Action"
      >
        <template #body="slotProps">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Edit"
                class="px-2 text-primary"
                @click="editRow(slotProps.data)"
              >
                <i class="bx bx-pencil font-size-18"></i
              ></a>
            </li>
            <li class="list-inline-item">
              <a
                href="javascript:void(0);"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Delete"
                class="px-2 text-danger"
                @click="deleteRow(slotProps.data)"
                ><i class="bx bx-trash-alt font-size-18"></i
              ></a>
            </li>
            <!-- <li class="list-inline-item dropdown">
              <a
                class="text-muted dropdown-toggle font-size-18 px-2"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                ><i class="bx bx-dots-vertical-rounded"></i
              ></a>
            </li> -->
          </ul>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped>
::v-deep(.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td) {
  border-width: 0 0 2px 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  padding-left: 1.5rem !important;
}

::v-deep(.p-datatable .p-datatable-thead > tr > th) {
  background: white;
  border-width: 0 0 2px 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: 500;
  padding-left: 1.5rem !important;
}

::v-deep(.p-datatable .p-paginator-bottom) {
  border-radius: 0 0 0.75rem 0.75rem;
}

::v-deep(.p-paginator-rpp-options span) {
  padding: 0.35rem 0.75rem;
}

::v-deep(.table) {
  margin-bottom: 0px;
}

::v-deep(.p-sortable-column-icon) {
  font-size: 0.8em;
}

.grid-options {
  text-align: end;
}

.grid-options span {
  font-size: 1.6em;
  padding: 0 0.2em;
  margin: 0.2em 0;
  display: inline-block;
}
</style>
