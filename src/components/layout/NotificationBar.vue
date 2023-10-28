<template>
  <div class="dropdown d-inline-block">
    <button
      type="button"
      class="btn header-item noti-icon"
      id="page-header-notifications-dropdown-v"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <eva-icon class="icon-sm" name="bell-outline"></eva-icon>
      <span class="noti-dot bg-danger rounded-pill">4</span>
    </button>

    <div
      class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
      aria-labelledby="page-header-notifications-dropdown-v"
    >
      <div class="p-3">
        <div class="row align-items-center">
          <div class="col">
            <h5 class="m-0 font-size-15">Notifications</h5>
          </div>
          <div class="col-auto">
            <a href="#!" class="small fw-semibold text-decoration-underline">
              Mark all as read</a
            >
          </div>
        </div>
      </div>
      <SimpleBar data-simplebar style="max-height: 250px">
        <a href="#!" class="text-reset notification-item">
          <div class="d-flex">
            <div class="flex-shrink-0 me-3">
              <img
                src="@/assets/images/users/avatar-3.jpg"
                class="rounded-circle avatar-sm"
                alt="user-pic"
              />
            </div>
            <div class="flex-grow-1">
              <h6 class="mb-1">James Lemire</h6>
              <div class="font-size-13 text-muted">
                <p class="mb-1">It will seem like simplified English.</p>
                <p class="mb-0">
                  <i class="mdi mdi-clock-outline"></i>
                  <span>1 hour ago</span>
                </p>
              </div>
            </div>
          </div>
        </a>
        <a href="#!" class="text-reset notification-item">
          <div class="d-flex">
            <div class="flex-shrink-0 avatar-sm me-3">
              <span class="avatar-title bg-primary rounded-circle font-size-16">
                <i class="bx bx-cart"></i>
              </span>
            </div>
            <div class="flex-grow-1">
              <h6 class="mb-1">Your order is placed</h6>
              <div class="font-size-13 text-muted">
                <p class="mb-1">If several languages coalesce the grammar</p>
                <p class="mb-0">
                  <i class="mdi mdi-clock-outline"></i>
                  <span>3 min ago</span>
                </p>
              </div>
            </div>
          </div>
        </a>
        <a href="#!" class="text-reset notification-item">
          <div class="d-flex">
            <div class="flex-shrink-0 avatar-sm me-3">
              <span class="avatar-title bg-success rounded-circle font-size-16">
                <i class="bx bx-badge-check"></i>
              </span>
            </div>
            <div class="flex-grow-1">
              <h6 class="mb-1">Your item is shipped</h6>
              <div class="font-size-13 text-muted">
                <p class="mb-1">If several languages coalesce the grammar</p>
                <p class="mb-0">
                  <i class="mdi mdi-clock-outline"></i>
                  <span>3 min ago</span>
                </p>
              </div>
            </div>
          </div>
        </a>

        <a href="#!" class="text-reset notification-item">
          <div class="d-flex">
            <div class="flex-shrink-0 me-3">
              <img
                src="@/assets/images/users/avatar-6.jpg"
                class="rounded-circle avatar-sm"
                alt="user-pic"
              />
            </div>
            <div class="flex-grow-1">
              <h6 class="mb-1">Salena Layfield</h6>
              <div class="font-size-13 text-muted">
                <p class="mb-1">
                  As a skeptical Cambridge friend of mine occidental.
                </p>
                <p class="mb-0">
                  <i class="mdi mdi-clock-outline"></i>
                  <span>1 hour ago</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </SimpleBar>
      <div class="p-2 border-top d-grid">
        <a
          class="btn btn-sm btn-link font-size-14 btn-block text-center"
          href="javascript:void(0)"
        >
          <i class="uil-arrow-circle-right me-1"></i>
          <span>View More..</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { SimpleBar } from "simplebar-vue3";
export default {
  name: "notification-bar",
  components: {
    SimpleBar,
  },
};
</script>

<style scoped></style>
