import React from "react";
import BarCharts from "../../components/Charts/BarCharts";
import LineCharts from "../../components/Charts/LineCharts";

const ChartsToolkitComponent = () => {
  return (
    <div>
      <div className="flex justify-center pt-5 pb-5">
        <p className="font-bold text-xl">Chart Toolkit</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <p className="p-5 text-lg font-bold">Bar Chart</p>
          <div className="shadow-md w-full h-96">
            <BarCharts
              options={{
                labels: { xLabel: "name" },
                datasets: [{ dataKey: "uv", fill: "#0078ac" }],
              }}
            />
          </div>
        </div>
        <div>
          <p className="p-5 text-lg font-bold">Multiple Bar Chart</p>
          <div className="shadow-md w-full h-96">
            <BarCharts
              options={{
                labels: { xLabel: "name" },
                datasets: [
                  { dataKey: "uv", fill: "#0078ac" },
                  { dataKey: "pv", fill: "green" },
                ],
              }}
            />
          </div>
        </div>
        <div>
          <p className="p-5 text-lg font-bold">Stacked Bar Chart</p>
          <div className="shadow-md w-full h-96">
            <BarCharts
              options={{
                labels: { xLabel: "name" },
                datasets: [
                  { dataKey: "uv", fill: "#0078ac", stackId: "a" },
                  { dataKey: "pv", fill: "green", stackId: "a" },
                ],
              }}
            />
          </div>
        </div>
        <div>
          <p className="p-5 text-lg font-bold">Line Chart</p>
          <div className="shadow-md w-full h-96">
            <LineCharts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsToolkitComponent;
