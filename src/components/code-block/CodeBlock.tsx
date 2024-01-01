import { useEffect, useState } from "react";
import checkIcon from "/check.png";
import copyIcon from "/copy.png"; // adjust path as needed
const CodeBlock = ({
  language = "sql",
  value,
}: {
  language: string;
  value: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (window?.hljs) {
      window?.hljs?.highlightAll();
      window?.hljs?.initLineNumbersOnLoad();
    }
  }, [value]);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <div className="relative">
      <pre>
        <code lang={language} className={`language-sql`}>
          {value.trim()}
        </code>
      </pre>
      <div className="relative">
        {isCopied && (
          <span className="absolute bottom-[42px] right-0 text-white">
            Copied
          </span>
        )}
        <span
          className="absolute bottom-2 right-2 border-0 outline-none bg-green-600 p-2 rounded-md"
          onClick={handleCopy}
        >
          <img src={isCopied ? checkIcon : copyIcon} alt="" width={16} />
        </span>
      </div>
    </div>
  );
};

export default CodeBlock;
