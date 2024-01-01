import { ResponsiveContainer } from "recharts";
import PieChart from "./pie-chart";
import ReSankey from "./sankey-chart/SankeyChart";

interface ChartData {
  type: string;
}
const Chart: React.FC<ChartData> = ({ type }) => {
  const data = [
    { name: "S3", value: 10000, label: "$10000" },
    { name: "Open search", value: 20000, label: "$20000" },
    { name: "Elasicsearch", value: 30000, label: "$30000" },
    { name: "EC2", value: 30000, label: "$30000" },
    { name: "RDS", value: 30000, label: "$30000" },
    { name: "Group C", value: 30000, label: "$30000" },
  ];
  const data1 = {
    nodes: [
      {
        name: "Excess cost",
      },
      {
        name: "Production",
      },
      {
        name: "Staging",
      },
      {
        name: "Analytics",
      },
      {
        name: "Purpose",
      },
      {
        name: "Customers",
      },
      {
        name: "Product",
      },
      {
        name: "Web app",
      },
      {
        name: "API",
      },
      {
        name: "Workflow",
      },
      {
        name: "Amex",
      },
      {
        name: "Citi",
      },
      {
        name: "Mobile App",
      },
    ],
    links: [
      {
        source: 0,
        target: 1,
        value: 2000,
      },
      {
        source: 0,
        target: 2,
        value: 200,
      },
      {
        source: 0,
        target: 3,
        value: 300,
      },
      {
        source: 1,
        target: 4,
        value: 200,
      },
      {
        source: 1,
        target: 5,
        value: 800,
      },
      {
        source: 1,
        target: 6,
        value: 600,
      },
      {
        source: 4,
        target: 7,
        value: 600,
      },
      {
        source: 4,
        target: 8,
        value: 700,
      },
      {
        source: 4,
        target: 9,
        value: 240,
      },
      {
        source: 5,
        target: 10,
        value: 160,
      },
      {
        source: 5,
        target: 11,
        value: 420,
      },
      {
        source: 6,
        target: 12,
        value: 180,
      },
    ],
  };
  return (
    <ResponsiveContainer width="100%" height={type === "PIE" ? 300 : 500}>
      {type === "PIE" ? <PieChart data={data} /> : <ReSankey data={data1} />}
    </ResponsiveContainer>
  );
};
export default Chart;
