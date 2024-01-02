import { useEffect, useState } from "react";
import {
  AssistType,
  QueryType,
  USER,
  assist1,
  assist2,
  assist3,
  user2,
  user3,
} from "../../constant";
import Feedback from "../Feedback";
import Message from "./Message/Message";

const Conversation = () => {
  const [satisfied, setSatisfied] = useState<boolean | null>(false);
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
  const scrollToBtm = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 1200);
  };

  useEffect(() => {
    fetchAssistData(1100, assist1).then((data) => {
      setSatisfied(false);
      const newList = [...messageList, data];
      setMessagesList(newList);
      scrollToBtm();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAssist = (value: string | number) => {
    setSatisfied(false);

    if (value === "ASSIST-1") {
      setMessagesList((messages: AssistType[]) => [...messages, user2]);
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
    scrollToBtm();
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
      <Feedback
        satisfied={satisfied}
        handleFeedback={() => setSatisfied(true)}
      />
    </div>
  );
};

export default Conversation;
