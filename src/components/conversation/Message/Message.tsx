import React from "react";
import { USER, codeSnippet } from "../../../constant";
import Cards from "../../Cards";
import Chart from "../../Chart";
import Card from "../../Menu";
import CodeBlock from "../../code-block";
import Collapsible from "../../collapsible-section";
import Assist from "../Assist";
import User from "../User";
interface MessageProps {
  type: string;
  content: string;
  queryType: string;
  queryText?: string;
  subAssist?: { label: string; value: number | string }[];
  cardMenu?: { title: string; content: string }[];
  chartType?: string;
  handleMenuEvent: (value: string | number) => void;
}
const Message: React.FC<MessageProps> = ({
  type,
  content,
  queryType,
  queryText = "",
  subAssist,
  cardMenu,
  chartType = "PIE",
  handleMenuEvent,
}) => {
  const renderQuery = (queryType: string) => {
    if (!queryType) return null;
    switch (queryType) {
      case "CHART":
        return <Chart type={chartType} />;
      case "CODE":
        return <CodeBlock language="sql" value={codeSnippet} />;
      case "CARD":
        return (
          cardMenu &&
          cardMenu?.map(({ title = "", content = "" }, idx) => (
            <Cards key={idx} title={title} content={content} />
          ))
        );
    }
  };

  return (
    <div>
      {type === USER ? (
        <User content={content}>
          {queryText && (
            <Collapsible title={queryText} open={true}>
              {renderQuery(queryType)}
            </Collapsible>
          )}
        </User>
      ) : (
        <Assist content={content}>
          <Collapsible open={true} title={queryText}>
            {renderQuery(queryType)}
          </Collapsible>
          <Collapsible title={"You might also want to know"} open={true}>
            <div className="flex flex-wrap">
              {subAssist &&
                subAssist.map((item, idx) => (
                  <Card key={idx} item={item} handleMenu={handleMenuEvent} />
                ))}
            </div>
          </Collapsible>
        </Assist>
      )}
    </div>
  );
};

export default Message;
