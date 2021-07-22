import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ data }) => {
  const dataValues = data.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataValues);

  return (
    <ul className="chart">
      {data.map((data) => (
        <ChartBar
          key={data.id}
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
        />
      ))}
    </ul>
  );
};

export default Chart;
