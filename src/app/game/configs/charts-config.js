export const chartsConfig = {
  chart: {
    toolbar: {
      show: true,
    },
  },
  title: {
    show: "",
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#37474f",
        fontSize: "9px",
        fontFamily: "inherit",
        fontWeight: 300,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#37474f",
        fontSize: "9px",
        fontFamily: "inherit",
        fontWeight: 300,
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#dddddd",
    strokeDashArray: 6,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 20,
    },
  },
  fill: {
    opacity: 0.6,
  },
  tooltip: {
    theme: "dark",
  },
};

export default chartsConfig;
