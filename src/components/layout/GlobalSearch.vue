<template>
<div class="dropdown">
          <button
            type="button"
            class="btn header-item"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
         <eva-icon class="icon-sm" name="search-outline"></eva-icon>
          </button>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-md p-0">
            <form class="p-2">
              <div class="search-box">
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control bg-light border-0"
                    placeholder="Search..."
                  />
                  <eva-icon
                    class="search-icon"
                    name="search-outline"
                  ></eva-icon>
                </div>
              </div>
            </form>
          </div>
        </div>
</template>

<script>
export default{
    name: "global-search",
}
</script>

<style scoped>

</style>