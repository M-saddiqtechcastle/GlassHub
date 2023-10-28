<template>
  <div class="row m-2">
    <div class="col-6">
      <div class="row">
        <div class="col-12">
          <TextInput
            v-model="currentRecord.sitename"
            label="Site Name"
            :error="errors?.sitename"
          />
          <br />
          <TextInput
            v-model="currentRecord.connectorurl"
            label="Conenctor URL"
            :error="errors?.connectorurl"
          />
          <br />
           <TextInput
            v-model="currentRecord.connectorport"
            label="Conenctor Port"
            :error="errors?.connectorport"
          />
          <br />
          <TextInput
            v-model="currentRecord.linkcode"
            label="Link Code"
            :error="errors?.linkcode"
          />
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-12">Styling Override / image</div> -->
      </div>
    </div>
    <div class="col-6">
      <div class="row">
        <div class="col-12">
          <h5>Address</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AddressLookup @handleSelection="selectAddress" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AddressCard store="site" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddressLookup from "../common/AddressLookup"
import AddressCard from "../common/AddressCard"

export default {
  name: "SiteCard",
  components: {
    AddressLookup,
    AddressCard,
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["site/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("site/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["site/getErrors"]
      },
    },
  },
  methods: {
    setType(type) {
      this.currentRecord.type = type
    },
    selectAddress(address) {
      this.currentRecord.addressline1 = address.addressline1
      this.currentRecord.addressline2 = address.addressline2
      this.currentRecord.addresstown = address.addresstown
      this.currentRecord.addresscounty = address.addresscounty
      this.currentRecord.addresscountry = address.addresscountry
      this.currentRecord.addresspostcode = address.addresspostcode
      this.currentRecord.addresslat = address.addresslat
      this.currentRecord.addresslong = address.addresslong
    },
  },
}
</script>
