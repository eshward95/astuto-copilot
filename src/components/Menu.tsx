interface CardProps {
  item: {
    label: string;
    value: number | string;
  };
  handleMenu: (value: number | string) => void;
}
const Card = ({ item, handleMenu }: CardProps) => {
  const handleEvent = () => {
    handleMenu(item.value);
  };
  return (
    <div className="w-full sm:w-1/2 p-2 flex" onClick={handleEvent}>
      <div className="list-items justify-between hover:bg-slate-300/50 transition-colors cursor-pointer flex min-h-12 text-zinc-700 text-[12px] items-center border border-[color:var(--Grey-G4,#BCC1C8)] bg-white bg-opacity-80 grow px-4 py-2 rounded-2xl border-solid max-md:px-5">
        <div>{item.label}</div>
        <div>
          <img className="icon max-w-[12px]" src="/send.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
