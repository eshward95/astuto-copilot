import { useEffect, useState } from "react";
import {
  ChartType,
  QueryType,
  USER,
  assist1,
  assist2,
  assist3,
  user2,
  user3,
} from "../../constant";
import Message from "./Message/Message";

interface AssistType {
  type: string;
  content: string;
  queryType: QueryType;
  chartType?: ChartType;
  queryText?: string;
  subAssist?: Array<{ label: string; value: string }>;
  assistData?: Array<{ title: string; content: string }>;
  subAssistKey?: number;
}

const Conversation = () => {
  const [satisfied, setSatisfied] = useState<boolean | null>(null);
  const [activeSubAssist, setActiveSubAssist] = useState(0);
  const [messageList, setMessagesList] = useState<AssistType[]>([
    {
      type: USER,
      content: "Top cloud costs by services in production account (#24542)",
      queryType: QueryType.CODE,
      queryText: "Query",
    },
  ]);

  // Simulate fetching data from an API
  const fetchAssistData = async (delay: number, newData: AssistType) => {
    return new Promise<AssistType>((resolve) => {
      setTimeout(() => {
        resolve(newData);
      }, delay);
    });
  };

  useEffect(() => {
    fetchAssistData(1000, assist1).then((data) => {
      setSatisfied(false);
      const newList = [...messageList, data];
      setMessagesList(newList);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAssist = (value: string | number) => {
    setSatisfied(false);

    if (value === "ASSIST-1") {
      setMessagesList((messages: AssistType[]) => [...messages, user2]);
      //Simulating API calls
      fetchAssistData(1000, assist2).then((data) => {
        setActiveSubAssist(assist2.subAssistKey);
        setMessagesList((messages: AssistType[]) => [...messages, data]);
      });
    }

    if (value === "ASSIST-2") {
      setMessagesList((messages: AssistType[]) => [...messages, user3]);
      fetchAssistData(1000, assist3).then((data) => {
        setActiveSubAssist(assist3.subAssistKey);
        setMessagesList((messages: AssistType[]) => [...messages, data]);
      });
    }
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 1200);
  };

  return (
    <div className="mx-6">
      {messageList.map((message, idx) => (
        <Message
          key={idx}
          type={message.type}
          content={message.content}
          queryType={message.queryType}
          subAssist={
            message.type === "ASSIST" &&
            message.subAssistKey === activeSubAssist
              ? message.subAssist
              : undefined
          }
          queryText={message.queryText}
          cardMenu={message.assistData}
          chartType={message.chartType}
          handleMenuEvent={(item) => handleAssist(item)}
        />
      ))}
      {satisfied != null && (
        <div className="flex items-center justify-center gap-2">
          {satisfied ? (
            <>
              <span className="text-xs text-gray-400">
                Thank you for your feedback!
              </span>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">
                Have the answers been satisfactory so far?
              </span>
              <div
                className="flex  gap-2 cursor-pointer"
                onClick={() => setSatisfied(true)}
              >
                <img src="/like.png" alt="like" width={12} />
                <img
                  src="/like.png"
                  alt="like"
                  width={12}
                  className="rotate-180"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Conversation;
