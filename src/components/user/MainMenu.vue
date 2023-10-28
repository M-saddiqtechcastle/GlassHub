<template>
  <div class="col-12 col-xl-6 col-xxl-4">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 headericon">
            <i class="fas fa-bars fa-fw fa-2x"></i>
            <div class="d-block head-title">
              <h5>Main Menu</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body hrTop" v-if="pageMode === 'view'">
        <hr />
        <div class="row">          
          <div class="col text-center">
            <span class="badge bg-soft-success text-dark mt-2 mb-3 px-4 py-2">{{
              currentRecord.mainmenudesc
            }}</span>
          </div>
        </div>
      </div>

      <div class="card-body hrTop" v-if="pageMode === 'add' || pageMode === 'edit'">
        <hr />
        <div class="row text-center">
          <div class="col-12">
            <span class="badge bg-soft-success text-dark mt-2 mb-3 px-4 py-2">{{
              currentRecord.mainmenudesc
            }}</span>
          </div>
          <div class="col-12">
            <RecordFinder
              :limitDisplayCols="['menuid', 'description']"
              title="Select Menu"
              store="menu"
              gridid="menurecordfinder"
              dataKey="menuid"
              label="Change Default Menu"
              @handleSelection="selectMenu"
            />
            <div class="invalid-feedback" v-if="errors?.menuid">
              {{ errors?.menuid }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecordFinder from "../recordfinder/RecordFinder"

export default {
  name: "UserCompany",
  components: {
    RecordFinder,
  },
  props: {
    pageMode: {
      default: "view",
    },
  },
  methods: {
    selectMenu(menuRecord) {
      this.currentRecord.mainmenuid = menuRecord.menuid
      this.currentRecord.mainmenudesc = menuRecord.description
    },
  },
  computed: {
    currentRecord: {
      get() {
        return this.$store.getters["user/getCurrentRecord"]
      },
      set(value) {
        console.log("set", value)
        this.$store.commit("user/setCurrentRecord", value)
      },
      errors: {
        get() {
          return this.$store.getters["user/getErrors"]
        },
      },
    },
  },
}
</script>

<style scoped></style>
