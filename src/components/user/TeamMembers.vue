<template>
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        <div class="row">
        <div class="col-12 headericon">
          <i class="fas fa-users fa-fw fa-2x"></i>
        
        <div class="d-block head-title">
          {{ userid }}
        <h5>Team Members</h5>
      </div>
    </div>
        </div>
      </div>
      <div class="card-body hrTop">
        <hr />
        <div class="table-responsive">
          <table class="table align-middle table-nowrap mb-0">
            <tbody>
              <tr
                v-for="teamMember in teamMembers"
                :key="teamMember.userid"
                :id="teamMember.userid"
              >
                <td style="width: 50px">
                  <Avatar
                    :label="
                      teamMember.username?.charAt(0).toUpperCase() +
                      teamMember.userlastname?.charAt(0).toUpperCase()
                    "
                    shape="circle"
                    class="text-white"
                    :style="{
                      'background-color': '#' + teamMember?.avatarcolor,
                      opacity: 0.6,
                    }"
                  />
                </td>
                <td>
                  <h5 class="font-size-14 m-0">
                    <a href="javascript: void(0);" class="text-dark"
                      >{{ teamMember.username }}
                      {{ teamMember.userlastname }}</a
                    >
                  </h5>
                </td>
                <td>
                  <div>
                    <a
                      href="javascript: void(0);"
                      class="badge bg-soft-primary text-primary font-size-11"
                      >{{ teamMember.userrolename }}</a
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import queryObject from "../../common/queryObject";
import { operatorType } from "../../common/queryObject";
import Avatar from "primevue/avatar";

export default {
  name: "TeamMembers",
  components: {
    Avatar,
  },
  data() {
    return {
      teamMembers: {
        default: [],
      },
    };
  },
  props: {
    userid: {
      default: 0,
    },
    userroleid: {
      default: 0,
    },
  },
  watch: {
    async userid() {
      this.$store.dispatch("application/setLoading", true);
      let queryobject = await new queryObject();
      queryobject.addCriteria({
        group: 1,
        field: "userroleid",
        value: this.userroleid,
        operator: operatorType.equals,
      });

      queryobject.addCriteria({
        group: 1,
        field: "userid",
        value: this.userid,
        operator: operatorType.notEqual,
      });
      let res = await this.$store.dispatch(`user/fetch`, {
        page: 1,
        rp: 999,
        sortname: "",
        sortorder: "",
        queryparams: queryobject.getQueryParams(),
      });

      this.teamMembers = res.data.rows;
      this.$store.dispatch("application/setLoading", false);
    },
  },
};
</script>
