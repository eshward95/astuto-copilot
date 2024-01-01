import { Layer, Rectangle, Sankey, Tooltip } from "recharts";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DemoSankeyNode({
  x,
  y,
  width,
  height,
  index,
  payload,
  containerWidth,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  payload: { name: string; value: string };
  containerWidth: number;
}) {
  const isOut = x + width + 6 > containerWidth;
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#5192ca"
        fillOpacity="1"
      />
      <text
        textAnchor={isOut ? "end" : "start"}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="10"
        // stroke="#000"
      >
        {payload.name} {payload.value + "k"}
      </text>
    </Layer>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ReSankey({ data }: any) {
  return (
    <Sankey
      width={800}
      height={500}
      data={data}
      node={
        <DemoSankeyNode
          x={0}
          y={0}
          width={0}
          height={0}
          index={0}
          payload={{
            name: "",
            value: "",
          }}
          containerWidth={0}
        />
      }
      nodePadding={10}
      margin={{
        left: 200,
        right: 200,
        top: 100,
        bottom: 100,
      }}
      link={{ stroke: "#5192ca" }}
    >
      <Tooltip />
    </Sankey>
  );
}
