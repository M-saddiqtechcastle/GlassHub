
<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-start">
        <div class="flex-grow-1">
          <h5 class="card-title mb-3">Recent Activity</h5>
        </div>
        <div class="flex-shrink-0">
          <div class="dropdown">
            <a
              class="dropdown-toggle text-reset"
              href="#"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="text-muted"
                >Monthly<i class="mdi mdi-chevron-down ms-1"></i
              ></span>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#">Yearly</a>
              <a class="dropdown-item" href="#">Monthly</a>
              <a class="dropdown-item" href="#">Weekly</a>
              <a class="dropdown-item" href="#">Today</a>
            </div>
          </div>
        </div>
      </div>

      <div class="px-3 mx-n3" data-simplebar style="max-height: 456px">
        <ol class="activity-checkout mb-0 mt-2 ps-3">
          <li class="checkout-item crypto-activity">
            <div class="crypto-date">
              <h6 class="text-uppercase font-size-11 mb-0 text-muted">Nov</h6>
              <h5 class="font-size-15 mb-0 mt-1">02</h5>
            </div>
            <div class="avatar checkout-icon p-1">
              <div class="avatar-title rounded-circle bg-primary bg-gradient">
                <i class="mdi mdi-archive-arrow-up text-white font-size-20"></i>
              </div>
            </div>
            <div class="feed-item-list">
              <div class="d-flex">
                <div class="flex-grow-1 overflow-hidden me-4">
                  <h5 class="font-size-14 mb-1 text-truncate">
                    Picked Item ABC
                  </h5>
                  <p class="text-truncate text-muted mb-2">Forklift 123</p>
                </div>
                <div class="flex-shrink-0 text-end">
                  <h5 class="mb-1 font-size-14 text-success">400</h5>
                  <p class="text-muted mb-0">Job: 123</p>
                </div>
              </div>
            </div>
          </li>

          <li class="checkout-item crypto-activity">
            <div class="crypto-date">
              <h6 class="text-uppercase font-size-11 mb-0 text-muted">Nov</h6>
              <h5 class="font-size-15 mb-0 mt-1">04</h5>
            </div>
            <div class="avatar checkout-icon p-1">
              <div class="avatar-title rounded-circle bg-danger bg-gradient">
                <i
                  class="mdi mdi-archive-arrow-down-outline text-white font-size-20"
                ></i>
              </div>
            </div>
            <div class="feed-item-list">
              <div class="d-flex">
                <div class="flex-grow-1 overflow-hidden me-4">
                  <h5 class="font-size-14 mb-1 text-truncate">
                    Received Item 583
                  </h5>
                  <p class="text-truncate text-muted mb-2">Forklift 8567</p>
                </div>
                <div class="flex-shrink-0 text-end">
                  <h5 class="mb-1 font-size-14 text-danger">800</h5>
                  <p class="text-muted mb-0">PO: 83769</p>
                </div>
              </div>
            </div>
          </li>

          <li class="checkout-item crypto-activity">
            <div class="crypto-date">
              <h6 class="text-uppercase font-size-11 mb-0 text-muted">Nov</h6>
              <h5 class="font-size-15 mb-0 mt-1">08</h5>
            </div>
            <div class="avatar checkout-icon p-1">
              <div class="avatar-title rounded-circle bg-primary bg-gradient">
                <i class="mdi mdi-archive-arrow-up text-white font-size-20"></i>
              </div>
            </div>
            <div class="feed-item-list">
              <div class="d-flex">
                <div class="flex-grow-1 overflow-hidden me-4">
                  <h5 class="font-size-14 mb-1 text-truncate">
                    Picked Item 9387
                  </h5>
                  <p class="text-truncate text-muted mb-2">Forklift 1</p>
                </div>
                <div class="flex-shrink-0 text-end">
                  <h5 class="mb-1 font-size-14 text-success">80</h5>
                  <p class="text-muted mb-0">SO: 746</p>
                </div>
              </div>
            </div>
          </li>

          <li class="checkout-item crypto-activity">
            <div class="crypto-date">
              <h6 class="text-uppercase font-size-11 mb-0 text-muted">Nov</h6>
              <h5 class="font-size-15 mb-0 mt-1">20</h5>
            </div>
            <div class="avatar checkout-icon p-1">
              <div class="avatar-title rounded-circle bg-primary bg-gradient">
                <i class="mdi mdi-archive-arrow-up text-white font-size-20"></i>
              </div>
            </div>
            <div class="feed-item-list">
              <div class="d-flex">
                <div class="flex-grow-1 overflow-hidden me-4">
                  <h5 class="font-size-14 mb-1 text-truncate">
                    Picked Item 8460
                  </h5>
                  <p class="text-truncate text-muted mb-2">Forklift 5</p>
                </div>
                <div class="flex-shrink-0 text-end">
                  <h5 class="mb-1 font-size-14 text-success">9837</h5>
                  <p class="text-muted mb-0">SO: 78686</p>
                </div>
              </div>
            </div>
          </li>

          <li class="checkout-item crypto-activity">
            <div class="crypto-date">
              <h6 class="text-uppercase font-size-11 mb-0 text-muted">Nov</h6>
              <h5 class="font-size-15 mb-0 mt-1">13</h5>
            </div>
            <div class="avatar checkout-icon p-1">
              <div class="avatar-title rounded-circle bg-danger bg-gradient">
                <i
                  class="mdi mdi-archive-arrow-down-outline text-white font-size-20"
                ></i>
              </div>
            </div>
            <div class="feed-item-list">
              <div class="d-flex">
                <div class="flex-grow-1 overflow-hidden me-4">
                  <h5 class="font-size-14 mb-1 text-truncate">
                    Receive Item 9879
                  </h5>
                  <p class="text-truncate text-muted mb-2">Forklift: 4</p>
                </div>
                <div class="flex-shrink-0 text-end">
                  <h5 class="mb-1 font-size-14 text-danger">600</h5>
                  <p class="text-muted mb-0">Job 234</p>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recentActivity",
};
</script>
