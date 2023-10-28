<template>
    <div>
    <div>
        <slot name="search"></slot>
    </div>
    <dataGrid
        ref="recordFinderGrid"
        @onRowDoubleClick="onRowDoubleClick"
        @postDeleteRow="postDeleteRow"
        @editRow="editRow"
        :gridid="this.dialogRef.options.props.gridid"
        :instanceid="1"
        deleteText= "?"
        :dataKey="this.dialogRef.options.props.dataKey"
        :store="this.dialogRef.options.props.store"
        :showEditColumns="false"
        :limitDisplayCols="this.dialogRef.options.props.limitDisplayCols"
        :limitQuery="this.dialogRef.options.props.limitQuery"
        :showGridExport="false"
      >
      
      </dataGrid>
    </div>
</template>

<script>
import dataGrid from "../datagrid/DataGridWrapper"

export default {
    inject: ['dialogRef'],
    name:"recordfindermain",
    components:{
        dataGrid,
    },
    props:{
        limitDisplayCols:[],
        limitQuery: {},
        searchSlot: {},
        store: String,
        gridid:String,
        dataKey:String,
    },
    methods:{
        onRowDoubleClick(event){
            this.dialogRef.options.handleSelection(event) // push to parent to handle
            this.dialogRef.close();
        }
    },
    mounted(){
        //console.log(this.dialogRef)
    }
}
</script>