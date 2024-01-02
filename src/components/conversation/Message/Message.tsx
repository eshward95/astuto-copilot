import React from "react";
import {
  AssistType,
  ChartType,
  QueryType,
  USER,
  codeSnippet,
} from "../../../constant";
import Cards from "../../Cards";
import Chart from "../../Chart";
import Card from "../../Menu";
import CodeBlock from "../../code-block";
import Collapsible from "../../collapsible-section";
import Profile from "../Profile";

interface MessageProps extends AssistType {
  handleMenuEvent: (value: string | number) => void;
  cardMenu?: { title: string; content: string }[];
}
const Message: React.FC<MessageProps> = ({
  type,
  content,
  queryType,
  queryText = "",
  subAssist,
  cardMenu,
  chartType = ChartType.PIE,
  handleMenuEvent,
}) => {
  const renderQuery = (queryType: string) => {
    if (!queryType) return null;
    switch (queryType) {
      case QueryType.CHART:
        return <Chart type={chartType} />;
      case QueryType.CODE:
        return <CodeBlock language="sql" value={codeSnippet} />;
      case QueryType.CARD:
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
        <Profile type={type} content={content}>
          {queryText && (
            <Collapsible title={queryText} open={true}>
              {renderQuery(queryType)}
            </Collapsible>
          )}
        </Profile>
      ) : (
        <Profile type={type} content={content}>
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
        </Profile>
      )}
    </div>
  );
};

export default Message;
