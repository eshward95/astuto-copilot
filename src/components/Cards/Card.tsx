interface CardProps {
  title: string;
  content: string;
}
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="rounded shadow-lg bg-white/80 border-green-700 border-2 my-2">
      <div className="p-2">
        <div className="font-bold text-sm mb-2">{title}</div>
        <p
          className="text-gray-700 text-sm"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Card;
