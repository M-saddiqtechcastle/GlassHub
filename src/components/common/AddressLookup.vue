<template>
  <div>
    <div class="btn addBtn" @click="openAddressLookup">
      {{ buttonLabel }}
    </div>
  </div>
</template>

<script>
import AddressLookupMain from "./AddressLookupMain"
import Button from "primevue/button"
import { h } from "vue"

export default {
  name: "AddressLookup",
  props: {
    buttonLabel: {
      default: "Find Address",
    },
  },
  data() {
    return {}
  },
  methods: {
    openAddressLookup() {
      this.$store.commit("addresslookup/setLookupError", {})
      this.$store.commit("addresslookup/setSelectedAddress", {})
      this.$store.commit("addresslookup/setLookupAddressList", {})
      
      let thisObject = this
      const dialogRef = this.$dialog.open(AddressLookupMain, {
        props: {
          header: `Select Address`,
          style: {
            width: "50vw",
          },
          breakpoints: {
            "960px": "75vw",
            "640px": "90vw",
          },
        },
        templates: {
          footer: () => {
            return [
              h(Button, {
                label: "Cancel",

                icon: "pi pi-times",
                onClick: () => dialogRef.close({ buttonType: "Yes" }),
                autofocus: true,
                class: "p-button-danger"
              }),
              h(Button, {
                label: "Select",
                icon: "pi pi-check",
                onClick: () =>{
                  console.log(dialogRef)
                  thisObject.$emit("handleSelection", this.$store.getters["addresslookup/getSelectedAddress"])
                  dialogRef.close()
                },
                autofocus: true,
              }), 
            ]
          },
        },
        onClose: (options) => {
          options
        },
      })
    },
  },
}
</script>
