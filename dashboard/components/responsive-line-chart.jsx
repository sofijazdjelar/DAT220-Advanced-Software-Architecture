import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const ResponsiveLineChart = ({ data, xAxis, line }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={line} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ResponsiveLineChart;
