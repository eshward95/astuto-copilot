const Inputbox = () => {
  return (
    <div className="px-20 py-4 sticky top-0 bottom-0 right-0 left-0">
      <input
        type="text"
        className="relative outline-none rounded-xl py-3 px-3 w-full bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
        placeholder="Start typing your query here..."
      />
      <img
        className="absolute right-24 bottom-8 cursor-pointer"
        src="/send.png"
        alt=""
        width={14}
      />
    </div>
  );
};

export default Inputbox;
