<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6 searchbar">
        <div class="input-group">
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search..."
            class="form-control"
            v-on:keyup.enter="searchUsers"
            v-model="searchValue"
          />
          <button
            type="button"
            @click="searchUsers"
            v-on:keyup.enter="searchUsers"
            class="btn btn-primary w-md "
          >
            Search
          </button>
        </div>

    </div>
    <div class="col-3"></div>
  </div>

  <div class="row">
    <div class="col-lg-12">
      data grid needs dropping in
    </div>
  </div>
</template>

<script>
import queryObject from "../../common/queryObject";
import { operatorType } from "../../common/queryObject";

export default {
  name: "TrailersGrid",
  components: {
  },

  methods: {
    stringToColor(str) {
      if (!str){
        str = "textforcolor";
      }
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = "#";
      for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 0xff;
        color += ("00" + value.toString(16)).substr(-2);
      }
      return color;
    },
    async searchUsers() {
      if (this.searchValue) {
        let queryobject = await new queryObject();
        queryobject.addCriteria({
          field: "email",
          value: this.searchValue,
          operator: operatorType.like,
        });

        queryobject.addCriteria({
          field: "username",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        queryobject.addCriteria({
          field: "userlastname",
          value: this.searchValue,
          operator: operatorType.like,
          group: queryobject.addCriteriaGroup(),
        });

        this.$refs.userGrid.setQueryParams(queryobject.getQueryParams());
      } else {
        this.$refs.userGrid.setQueryParams();
      }
    },
    async onRowDoubleClick(event) {
      this.$router.push(`/user/${event.userid}`);
    },
    async postDeleteRow(event) {
      event;
    },
    async editRow(event) {
      this.$router.push(`/user/${event.userid}`);
    },
  },
  data() {
    return {
      searchValue: null,
    };
  },
};
</script>

<style scoped>

.searchbar {
  margin: 0 auto;
}

.input-group {
  justify-content: center;
  align-items: center;
}

.input-group input{
  border-radius: 0.75em 0 0 0.75em;
}

::v-deep(.input-group .btn) {
  border-radius: 0 0.75em 0.75em 0 !important;
}

</style>
