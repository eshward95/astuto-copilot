import { ResponsiveContainer } from "recharts";
import { ChartType, pieData, sankeyData } from "../../constant";
import PieChart from "./pie-chart";
import ReSankey from "./sankey-chart/SankeyChart";

interface ChartData {
  type: string;
}
const Chart: React.FC<ChartData> = ({ type }) => {
  return (
    <ResponsiveContainer width="100%" height={type === "PIE" ? 300 : 500}>
      {type === ChartType.PIE ? (
        <PieChart data={pieData} />
      ) : (
        <ReSankey data={sankeyData} />
      )}
    </ResponsiveContainer>
  );
};
export default Chart;
