
<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-center overflow-hidden">
        <div class="flex-shrink-0 me-3">
          <div class="avatar">
            <div class="avatar-title rounded bg-primary bg-gradient">
              <i class="mdi mdi-forklift font-size-24"></i>
            </div>
          </div>
        </div>
        <div class="flex-grow-1">
          <h5 class="font-size-15 mb-2">
            {{title}}<span class="text-muted">{{subTitle}}</span>
          </h5>
          <p class="text-muted mb-0">{{value}}</p>
        </div>
        <div class="flex-shrink-0 float-end">
          <apexchart
            height="40"
            width="100"
            type="area"
            :options="sparklineoptions1.chartOptions"
            :series="sparklineoptions1.series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "summarySmallCard",
  props: {
    title: String,
    subTitle: String,
    value: String,
    graphData: {}
  },
  data() {
    return {
      sparklineoptions1: {
        series: [
          {
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
          },
        ],
        chartOptions: {
          chart: {
            type: "area",
            width: 100,
            height: 40,
            sparkline: {
              enabled: true,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.45,
              opacityTo: 0.05,
              stops: [20, 100, 100, 100],
            },
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          colors: ["#63ad6f"],
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
      lineChartOptions1: {
        series: [
          {
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            width: 120,
            height: 30,
            sparkline: {
              enabled: true,
            },
          },
          colors: ["#f56e6e"],
          stroke: {
            curve: "smooth",
            width: 3,
          },
          tooltip: {
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
            y: {
              title: {
                formatter: function () {
                  return "";
                },
              },
            },
            marker: {
              show: false,
            },
          },
        },
      },
    };
  },
};
</script>
