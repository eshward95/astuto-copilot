import React, { useEffect, useRef, useState } from "react";

const Collapsible = ({
  title,
  children,
  open = false,
}: {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="max-w mx-auto bg-white/70 shadow-md cursor-pointer p-1 py-2 transition-all">
      <div
        className="flex justify-between items-center"
        onClick={toggleCollapse}
      >
        <span className="text-xs font-medium text-gray-500">{title}</span>
        <hr className="w-4/6" />
        <span
          aria-expanded={isOpen}
          className="transition-transform duration-300"
        >
          {isOpen ? (
            <img src="/caret-up.png" width={16} alt="" />
          ) : (
            <img
              src="/caret-up.png"
              width={16}
              alt=""
              className="rotate-180 text-cyan-200"
            />
          )}
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-300 ease-in-out text-gray-500"
        style={{
          maxHeight: isOpen ? `${contentRef?.current?.scrollHeight}px` : "0px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
