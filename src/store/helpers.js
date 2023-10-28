import { mapState, mapActions } from "vuex"

export const layoutComputed = {
  ...mapState({
    layoutType: (state) => state.layout.layoutType,
    layoutScrollable: (state) => state.layout.layoutScrollable,
    layoutMode: (state) => state.layout.layoutMode,
    leftSidebarType: (state) => state.layout.leftSidebarType,
    sidebarColor: (state) => state.layout.sidebarColor,
    layoutWidth: (state) => state.layout.layoutWidth,
    topbar: (state) => state.layout.topbar,
  }),
}

export const layoutMethods = mapActions("layout", [
  "changeLayoutType",
  "changeLayoutMode",
  "changeLayoutWidth",
  "changeLeftSidebarType",
  "changeTopbar",
  "changeSidebarColor",
  "changeLayoutPosition",
])

export const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  )
