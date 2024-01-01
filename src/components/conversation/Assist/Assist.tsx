interface AssistProps {
  content: string;
  children: React.ReactNode;
}
const Assist: React.FC<AssistProps> = ({ content, children }) => {
  return (
    <div className="pb-4">
      <div className="flex items-center border-b border-gray-200 pb-2">
        <img
          className="h-8 w-8 rounded-md"
          src="https://media.licdn.com/dms/image/D4D0BAQFmD0vuBDDR_w/company-logo_200_200/0/1694676075383/astuto_cloud_logo?e=1712188800&v=beta&t=7EbNVQifFxiDKsjLHo64r4awP-pBHNRQmrUtPPQqVWg"
          alt="Profile picture placeholder"
        />
        <div className="flex-1 ml-4">
          <p
            className="text-gray-700 text-sm"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Assist;
