<template>
  <button class="btn addBtn" @click="showFinder" v-if="showButton">
    <div v-html="this.label"></div>
  </button>
</template>

<script>
import Button from "primevue/button"
//import DynamicDialog from "primevue/dynamicdialog";
import recordfindermain from "./RecordFinderMain"
import { h } from "vue"
//import queryObject from "../../common/queryObject";
//import { operatorType } from "../../common/queryObject";

export default {
  name: "RecordFinder",
  components: {
    //Button,
    // DynamicDialog,
  },
  props: {
    limitDisplayCols: {
      default: [],
    },
    limitQuery: {
      default: [],
    },
    title: {
      default: "Search",
    },
    label: {
      default: "Search",
    },
    showButton: {
      default: true,
    },
    store: {
      default: "userrole",
    },
    gridid: {
      default: "",
    },
    dataKey: {
      default: "",
    },
    cancelOnly: {
      default: false,
    },
    passThoughToHandleSelection: {
      default: null,
    },
  },
  methods: {
    showFinder() {
      let thisObject = this
      const dialogRef = this.$dialog.open(recordfindermain, {
        props: {
          header: `${this.title}`,
          style: {
            width: "50vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
          modal: true,
          limitDisplayCols: this.limitDisplayCols,
          limitQuery: this.limitQuery,
          store: thisObject.store,
          gridid: thisObject.gridid,
          dataKey: thisObject.dataKey,
          searchSlot: () => {
            return [
              h(Button, {
                label: "Cancel",
                icon: "pi pi-times",
                onClick: () => dialogRef.close({ buttonType: "Yes" }),
                autofocus: true,
              }),
            ]
          },
        },
        templates: {
          footer: () => {
            if (this.cancelOnly) {
              return [
                h(Button, {
                  label: "Cancel",
                  icon: "pi pi-times",
                  onClick: () => dialogRef.close({ buttonType: "Yes" }),
                  autofocus: true,
                }),
              ]
            }

            return [
              h(Button, {
                label: "Select",
                icon: "pi pi-save",
                onClick: () =>
                  alert("Not working at the moment (use double click)"),
                autofocus: true,
              }),
              h(Button, {
                label: "Cancel",
                icon: "pi pi-times",
                onClick: () => dialogRef.close({ buttonType: "Yes" }),
                autofocus: true,
              }),
            ]
          },
        },
        onClose: (options) => {
          options
        },
        handleSelection(event) {
          if (thisObject.passThoughToHandleSelection !== null) {
            thisObject.$emit("handleSelection", {
              event: event,
              passThrough: thisObject.passThoughToHandleSelection,
            })
          } else {
            thisObject.$emit("handleSelection", event)
          }
          this.close
        },
      })
    },
  },
}
</script>

<style scoped></style>
