<template>
  <Layout :pagetitle="'User Roles'">
    <TopMenu :pageView="pageView" @changeView="changeView" addPage="userrole"/>
    <UserRoleDataGrid v-if="pageView === 'list'" />
    <UserRoleCardGrid v-if="pageView === 'grid'" />
  </Layout>
</template>

<script>
import Layout from "../../layouts/main"
import appConfig from "@/app.config"
import pageMixin from "../../../common/pageMixin.js"
import UserRoleDataGrid from "../../../components/userrole/UserRoleDataGrid"
import UserRoleCardGrid from "../../../components/userrole/UserRoleCardGrid"
import TopMenu from "../../../components/page/TopMenu";


export default {
  page: {
    title: "uerroles",
    meta: [
      {
        name: "User Roles",
        content: appConfig.description,
      },
    ],
  },
  mixins: [pageMixin],
  components: {
    Layout,
    UserRoleDataGrid,
    UserRoleCardGrid,
    TopMenu,
  },
}
</script>

<style scoped></style>
