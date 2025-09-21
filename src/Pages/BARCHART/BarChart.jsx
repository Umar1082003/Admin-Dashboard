import React from "react";
import Bar from "./Bar";
import Title from "../../Components/Title";

function BarChart() {
  return (
    <>
      <Title
        title="BARCHART"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </>
  );
}

export default BarChart;
