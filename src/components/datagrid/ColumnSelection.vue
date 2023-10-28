
<template>
  <div>
    <div class="">
      <div class="row mb-4">
        <div class="col-10">
          <button
            type="button"
            @click="restoreDefaults"
            class="btn btn-outline-primary d-inline me-3"
          >
            <i class="bx bx-reset"></i>
            Restore Default
          </button>
       
          <button type="button" @click="saveAsDefault" class="btn btn-primary d-inline">
            <i class="mdi mdi-content-save-cog-outline"></i>
            Save As Default
          </button>
        </div>
        <div class="col-2 text-end">
          <div class="dropdown">
            <i
              class="mdi mdi-information-outline h4 dropdown-toggle show"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <ul
              class="dropdown-menu dropdown-menu-end"
              data-popper-placement="bottom-end"
              style="
                position: absolute;
                inset: 0px 0px auto auto;
                margin: 0px;
                transform: translate(0px, 31px);
              "
            >
              <li><div class="dropdown-item" >Grid ID: {{gridid}}</div></li>
              <li><div class="dropdown-item" >Instance ID: {{instanceid}}</div></li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h6 class="text-muted text-uppercase mb-3">Columns</h6>
        <columnSelectionCard
          :col="col"
          v-for="col in columns"
          :key="col.jsgriduserfieldsid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import columnSelectionCard from "./ColumnSelectionCard";
export default {
  name: "ColumnSelection",
  components: {
    columnSelectionCard,
  },
  data() {
    return {
      columns: null,
      gridid: "",
      instanceid: 0,
    };
  },
  inject: ["dialogRef"],
  mounted() {
    this.columns = this.dialogRef.data.columns;
    this.gridid = this.dialogRef.data.gridid;
    this.instanceid = this.dialogRef.data.instanceid;
  },
  methods: {
    async restoreDefaults() {
      let APICall = {
        data: {
          callmethod: "restoredefaults",
          gridid: this.gridid,
          instance: this.instanceid,
          token: this.$store.getters['userSession/getUserSessionToken'],
        },
        url: `${window.$ApiURL}/jsgriduserfields.php`,
      };

      let response = await this.$store.dispatch("callOutboundAPI", {
        online: true,
        APICall: APICall,
        successAction: "logAction",
        errorAction: "logAction",
      }); 
      
      this.columns = response.data;

      this.saveColumns();


    },
    async saveAsDefault() {
       let APICall = {
        data: {
          callmethod: "setdefaultfields",
          fields: this.columns,
          gridid: this.gridid,
          instance: this.instanceid,
          token: this.$store.getters['userSession/getUserSessionToken'],
        },
        url: `${window.$ApiURL}/jsgriduserfields.php`,
      };

      this.$store.dispatch("callOutboundAPI", {
        online: true,
        APICall: APICall,
        successAction: "logAction",
        errorAction: "logAction",
      });
      this.saveColumns();
    },
    saveColumns() {
      // close modal
      this.dialogRef.close({ columns: this.columns });
    },
  },
};
</script>

<style></style>
