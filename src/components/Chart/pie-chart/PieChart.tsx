import { Cell, Pie, PieChart as PieCharts } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
interface PieChartProps {
  data: {
    name: string;
    value: number;
  }[];
}
const RADIAN = Math.PI / 180;
const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const renderCustomizedLabel = (props: {
    cx: number;
    cy: number;
    midAngle: number;
    outerRadius: number;
    fill: string;
    percent: number;
    label: string;
    name: string;
  }) => {
    const { cx, cy, midAngle, outerRadius, fill, percent, label, name } = props;

    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const horizontalAlignment = mx < cx ? "end" : "start";
    const percentValue = percent * 100;
    return (
      <g>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          fill="#333"
          textAnchor={horizontalAlignment}
          dominantBaseline="central"
          className="text-sm"
        >
          {name} - {percentValue.toFixed(0)}% ({label})
        </text>

        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke="black"
          fill="none"
        />
        <circle cx={ex} cy={ey} r={5} fill={fill} />
      </g>
    );
  };
  return (
    <PieCharts width={750} height={300} className="h-max w-auto">
      <Pie
        data={data}
        cx="60%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        label={renderCustomizedLabel} // Use the custom label here
      >
        {data.map((_, index) => (
          <Cell
            stroke="black"
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
    </PieCharts>
  );
};

export default PieChart;
