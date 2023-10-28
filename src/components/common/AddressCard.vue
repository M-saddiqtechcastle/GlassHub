<template>
  <div v-if="view === 'vertical'">
    <div class="row">
      <div class="col-6">
        <TextInput
          v-model="currentRecord.addressline1"
          label="Line 1"
          :error="errors?.addressline1"
        />
      </div>
      <div class="col-6">
        <TextInput
          v-model="currentRecord.addressline2"
          label="Line 2"
          :error="errors?.addressline2"
        />
      </div>
      <div class="col-6">
        <TextInput
          v-model="currentRecord.addresstown"
          label="Town"
          :error="errors?.addresstown"
        />
      </div>
      <div class="col-6">
        <TextInput
          v-model="currentRecord.addresscounty"
          label="County"
          :error="errors?.addresscounty"
        />
      </div>
      <div class="col-6">
        <TextInput
          v-model="currentRecord.addresscountry"
          label="Country"
          :error="errors?.addresscountry"
        />
      </div>
      <div class="col-6">
        <TextInput
          v-model="currentRecord.addresspostcode"
          label="Post Code"
          :error="errors?.addresspostcode"
        />
      </div>
      <div class="col-6">
        <TextInput
          v-model="currentRecord.addresslong"
          label="Longitude"
          :error="errors?.addresslong"
        />
      </div>
      <div class="col-6">
        <TextInput
          v-model="currentRecord.addresslat"
          label="Latitude"
          :error="errors?.addresslat"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 py-3">
        <GoogleMap
          ref="map"
          :api-key="mapAPIKey"
          style="width: 100%; height: 300px"
          :center="{
            lat: Number(
              currentRecord.addresslat ? currentRecord.addresslat : 0
            ),
            lng: Number(
              currentRecord.addresslong ? currentRecord.addresslong : 0
            ),
          }"
          :zoom="16"
        >
          <Marker
            :options="{
              position: {
                lat: Number(
                  currentRecord.addresslat ? currentRecord.addresslat : 0
                ),
                lng: Number(
                  currentRecord.addresslong ? currentRecord.addresslong : 0
                ),
              },
            }"
          />
        </GoogleMap>
      </div>
    </div>
  </div>

  <div v-if="view === 'horizontal'">
    <div class="row">
      <div class="col-6">
        <div class="row">
          <div class="col-6">
            <TextInput
              v-model="currentRecord.addressline1"
              label="Line 1"
              :error="errors?.addressline1"
            />
          </div>
          <div class="col-6">
            <TextInput
              v-model="currentRecord.addressline2"
              label="Line 2"
              :error="errors?.addressline2"
            />
          </div>
          <div class="col-6">
            <TextInput
              v-model="currentRecord.addresstown"
              label="Town"
              :error="errors?.addresstown"
            />
          </div>
          <div class="col-6">
            <TextInput
              v-model="currentRecord.addresscounty"
              label="County"
              :error="errors?.addresscounty"
            />
          </div>
          <div class="col-6">
            <TextInput
              v-model="currentRecord.addresscountry"
              label="Country"
              :error="errors?.addresscountry"
            />
          </div>
          <div class="col-6">
            <TextInput
              v-model="currentRecord.addresspostcode"
              label="Post Code"
              :error="errors?.addresspostcode"
            />
          </div>
          <div class="col-6">
            <TextInput
              v-model="currentRecord.addresslong"
              label="Longitude"
              :error="errors?.addresslong"
            />
          </div>
          <div class="col-6">
            <TextInput
              v-model="currentRecord.addresslat"
              label="Latitude"
              :error="errors?.addresslat"
            />
          </div>
        </div>
      </div>
      <div class="col-6">
        <GoogleMap
          ref="map"
          :api-key="mapAPIKey"
          style="width: 100%; height: 300px"
          :center="{
            lat: Number(
              currentRecord.addresslat ? currentRecord.addresslat : 0
            ),
            lng: Number(
              currentRecord.addresslong ? currentRecord.addresslong : 0
            ),
          }"
          :zoom="16"
        >
          <Marker
            :options="{
              position: {
                lat: Number(
                  currentRecord.addresslat ? currentRecord.addresslat : 0
                ),
                lng: Number(
                  currentRecord.addresslong ? currentRecord.addresslong : 0
                ),
              },
            }"
          />
        </GoogleMap>
      </div>
    </div>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
export default {
  name: "AddressCard",
  components: {
    GoogleMap,
    Marker,
  },
  props: {
    store: {
      default: "",
    },

    view: {
      default: "vertical",
    },
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters[this.store + "/getCurrentRecord"];
      },
      set(value) {
        this.$store.commit(this.store + "/setCurrentRecord", value);
      },
    },
    errors: {
      get() {
        return this.$store.getters[this.store + "/getErrors"];
      },
    },
    mapAPIKey: {
      get() {
        return this.$store.getters["addresslookup/getMapsAPIKey"];
      },
    },
  },
};
</script>
