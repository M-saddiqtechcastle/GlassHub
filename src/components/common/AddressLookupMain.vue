<template>
  <div class="row">
    <div class="col-6">
      <div class="row">
        <div class="col-6">
          <!-- Dont User TextInput for this as it breaks the ref -->
          <label class="inp">
            <input
              type="input"
              placeholder="&nbsp;"
              v-model="postcode"
              :class="{ 'is-invalid': errors?.postcode }"
              required
              @keydown.enter="searchPostCode"
              ref="postcode"
            />
            <span class="label">Post Code</span>
            <div class="invalid-feedback" v-if="errors?.postcode">
              {{ errors?.postcode }}
            </div>
          </label>
        </div>
        <div class="col-6">
          <button
            class="btn btn-primary mt-4"
            @click="searchPostCode"
            @keydown.enter="searchPostCode"
          >
            Search
          </button>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12">
          <Listbox
            v-model="selectedAddress"
            :options="lookupAddressList"
            :optionLabel="displayAddress"
            :filter="true"
            listStyle="max-height:250px"
          />
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="row">
        <div class="col-12">
          <TextInput
            v-model="selectedAddress.addressline1"
            label="Line 1"
            :error="errors?.addressline1"
          />
          <TextInput
            v-model="selectedAddress.addressline2"
            label="Line 2"
            :error="errors?.addressline2"
          />
          <TextInput
            v-model="selectedAddress.addresstown"
            label="Town"
            :error="errors?.addresstown"
          />
          <TextInput
            v-model="selectedAddress.addresscounty"
            label="County"
            :error="errors?.addresscounty"
          />
          <TextInput
            v-model="selectedAddress.addresscountry"
            label="Country"
            :error="errors?.addresscountry"
          />
          <TextInput
            v-model="selectedAddress.addresspostcode"
            label="Post Code"
            :error="errors?.addresspostcode"
          />
          <TextInput
            v-model="selectedAddress.addresslong"
            label="Longitude"
            :error="errors?.addresslong"
          />
          <TextInput
            v-model="selectedAddress.addresslat"
            label="Latitude"
            :error="errors?.addresslat"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <GoogleMap
            :api-key="mapAPIKey"
            style="width: 100%; height: 300px"
            :center="{
              lat: selectedAddress.addresslat,
              lng: selectedAddress.addresslong,
            }"
            :zoom="16"
            v-if="true"
          >
            <Marker
              :options="{
                position: {
                  lat: selectedAddress.addresslat,
                  lng: selectedAddress.addresslong,
                },
              }"
            />
          </GoogleMap>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Listbox from "primevue/listbox"
import { GoogleMap, Marker } from "vue3-google-map"

export default {
  name: "AddressLookupMain",
  components: {
    Listbox,
    GoogleMap,
    Marker,
  },
  mounted() {
    this.$refs.postcode.focus()
  },
  data() {
    return {
      postcode: "",
      showResultAddresses: false,
    }
  },
  watch: {
    selectedAddress() {
      //console.log("change address")
    },
  },
  computed: {
    errors: {
      get() {
        return this.$store.getters["addresslookup/getLookupError"]
      },
      set(error) {
        this.$store.commit("addresslookup/setLookupError", error)
      },
    },
    lookupAddressList: {
      get() {
        return this.$store.getters["addresslookup/getLookupAddressList"]
      },
    },
    selectedAddress: {
      get() {
        return this.$store.getters["addresslookup/getSelectedAddress"]
      },
      set(address) {
        this.$store.commit("addresslookup/setSelectedAddress", address)
      },
    },
    mapAPIKey: {
      get() {
        return this.$store.getters["addresslookup/getMapsAPIKey"]
      },
    },
  },
  methods: {
    showMap() {
      console.log(this.selectedAddress?.addresslat > 0)
      if (
        this.selectedAddress?.addresslat > 0 &&
        this.selectedAddress?.addresslong > 0
      ) {
        return true
      }

      return false
    },
    displayAddress(address) {
      return address.formatted_address.join()
    },
    async searchPostCode() {
      if (!this.postcode) {
        this.errors = { postcode: "Please Enter Postcode" }
      }

      if (this.postcode) {
        this.$store.dispatch("addresslookup/lookupAddresses", {
          postcode: this.postcode,
        })
      }
    },
  },
}
</script>
