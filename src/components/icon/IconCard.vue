<template>
  <div class="container">
    <div class="row">
      <div class="col-7">
        <span class="label">Icon SVG</span>
        <label class="inp">
          <textarea
            cols="56"
            rows="10"
            class="form-control"
            v-model="currentRecord.icondata"
            :class="{ 'is-invalid': errors?.icondata }"
            :on-changed="tagChanged"
          ></textarea>
          
          <div class="invalid-feedback" v-if="errors?.icondata">
            {{ errors?.icondata }}
          </div>
        </label>
      </div>
      <div class="col">
      <div class="card-title">Icon Preview</div>
        <div class="card">
          <div class="" v-html="currentRecord.icondata">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-7">
        <span class="label">Tags</span>
        <SmartTagz
          ref="iconTags"
          editable
          :theme="{
            primary: '#545454',
            background: '#fff',
            tagTextColor: '#fff',
          }"
          :default-tags="splitTags(currentRecord.icontags)"
          :on-changed="tagChanged"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { SmartTagz } from "smart-tagz"
import "smart-tagz/dist/smart-tagz.css"

export default {
  name: "IconCard",
  components: {
    SmartTagz,
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["icon/getCurrentRecord"]
      },
      set(value) {
        this.$store.commit("icon/setCurrentRecord", value)
      },
    },
    errors: {
      get() {
        return this.$store.getters["icon/getErrors"]
      }
    },
  },
  methods: {
    splitTags(tags) {
      let tagArray = tags.split(",")
      let filtered = tagArray.filter(function (el) {
        return el != null && el != ""
      })

      return filtered
    },
    tagChanged() {
      let tagString = ""
      let tags = this.$refs?.iconTags.tagsData
      tags.forEach(function (tag) {
        tagString = tagString + `${tag.value},`
      })

      tagString = tagString.replace(/,\s*$/, "")

      let currentRecord = this.$store.getters["icon/getCurrentRecord"]
      currentRecord.icontags = tagString
      this.$store.commit("icon/setCurrentRecord", currentRecord)
    },
  },
}
</script>
