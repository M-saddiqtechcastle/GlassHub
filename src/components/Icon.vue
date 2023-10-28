<template>
  <div :class="wrapperclass">
    <div v-html="icon?.icondata" :class="iconclass"></div>
  </div>
</template>

<script>
export default {
  name: "icon",
  components: {},
  props: {
    iconid: Number,
    displaybadge: {
      default: false,
    },
    badgenumber: {
      default: 0,
    },
    iconclass: {
      default: "",
    },
    wrapperclass: {
      default: "fa-customicon icon",
    },
  },
  mounted() {},
  watch: {
    iconid: function () {
      this.getIcon()
    },
  },
  data() {
    return {
      icon: {},
    }
  },
  async created() {
    await this.getIcon()
  },
  computed: {},
  methods: {
    async getIcon() {
      let icon = {}
      icon.icondata = ``
      if (this.iconid !== null && parseInt(this.iconid) !== 0) {
        icon = await this.$store.dispatch("icon/findiconByid", this.iconid)
      }

      this.icon = icon
    },
  },
}
</script>

<style scoped>
/* make icon while */
.mm-collapse .submenuicon {
  margin-right: 0.6em;
}

.p-badge {
  position: absolute;
  top: 0px;
  left: 150px;
  background: #f00 !important;
}
</style>
