import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValueArray = props.dataPoints.map(
    (dataPoint) => dataPoint.value
  );

  const totalMaximun = Math.max(...dataPointsValueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.lable}
          value={data.value}
          maxVal={totalMaximun}
          lable={data.lable}
        />
      ))}
    </div>
  );
};
export default Chart;
