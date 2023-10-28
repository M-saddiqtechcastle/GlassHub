<template>
  <div class="row align-items-center pt-2 pb-3 TopMenu">
    <div class="col-md-7">
      <div class="headmenu">
        <button class="btn">Add demand</button>
        <div class="d-inline-block mt-3 mt-xl-0 ms-xl-3">
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item active">Cards</li>
            <li class="list-group-item">Groups</li>
            <li class="list-group-item">Timeline</li>
            <li class="list-group-item">Calendar</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-5 mt-3 mt-md-0 headcontrols">
      <ul
        class="list-group list-group-horizontal align-items-center justify-content-end"
      >
        <li class="list-group-item"><i class="fas fa-sort"></i> Sort</li>
        <li class="list-group-item"><i class="fas fa-filter"></i> Filter</li>
        <li class="list-group-item"><i class="fas fa-ellipsis-h"></i></li>

        <li class="list-group-item">
          <button
            @click="changeView('list')"
            class="btn btn-primary me-2"
            :class="{ active: getPageView === 'list' }"
            to="/contacts/list"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="List"
            aria-label="List"
          >
            <i class="bx bx-list-ul"></i>
          </button>
          <button
            @click="changeView('grid')"
            :class="{ active: getPageView === 'grid' }"
            class="btn btn-primary"
            to="/contacts/grid"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title=""
            data-bs-original-title="Grid"
            aria-label="Grid"
          >
            <i class="bx bx-grid-alt"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style></style>
