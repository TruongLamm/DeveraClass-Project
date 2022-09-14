import { borderRadius } from "@mui/system";
import "./CustomerReview.css";
import React from "react";
import Chart from "react-apexcharts";

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Total",
        data: [10, 50, 30, 90, 40, 120, 100, 110, 60, 90, 100, 160, 180, 200, 400],
      },
    ],
    options: {
      theme: {
        mode: 'dark',
      },
      chart: {
        type: "area",
        height: "auto",
        background: "#2c5364",
      },

      fill: {
        colors: ["#ff929f"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
        //42032C
      },
      tooltip: {
        followCursor: true,
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "time",
        categories: [
          // "2018-09-19T00:00:00.000Z",
          // "2018-09-19T01:30:00.000Z",
          // "2018-09-19T02:30:00.000Z",
          // "2018-09-19T03:30:00.000Z",
          // "2018-09-19T04:30:00.000Z",
          // "2018-09-19T05:30:00.000Z",
          // "2018-09-19T06:30:00.000Z",
          "Jan 1",
          "Jan 2",
          "Jan 3",
          "Jan 4",
          "Jan 5",
          "Jan 6",
          "Jan 7",
          "Jan 8",
          "Jan 9",
          "Jan 10",
          "Jan 11",
          "Jan 12",
          "Jan 13",
          "Jan 14",
          "Jan 15",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar: {
        show: false
      },
    },
  };
  return <div className="CustomerReview">
    <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default CustomerReview;
