<template>
  <Layout :pagetitle="'Users'">
    <TopMenu :pageView="pageView" @changeView="changeView" addPage="user"/>
    <UserDataGrid v-if="pageView === 'list'" />
    <UserCardGrid v-if="pageView === 'grid'" />
  </Layout>
</template>

<script>
import Layout from "../../layouts/main"
import appConfig from "@/app.config"
import UserDataGrid from "../../../components/user/UserDataGrid"
import UserCardGrid from "../../../components/user/UserCardGrid"
import pageMixin from "../../../common/pageMixin.js"
import TopMenu from "../../../components/page/TopMenu";

export default {
  page: {
    title: "User",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  mixins: [pageMixin],
  components: {
    Layout,
    UserDataGrid,
    UserCardGrid,
    TopMenu,
  },
}
</script>
