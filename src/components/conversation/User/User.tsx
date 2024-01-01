interface UserProps {
  content: string;
  children: React.ReactNode;
}
const User: React.FC<UserProps> = ({ content, children }) => {
  return (
    <div className="pb-4 w-full">
      <div className="flex items-center border-b border-gray-200 pb-6 ">
        <img
          className="h-8 w-8 rounded-md bg-gray-300"
          src="/businessman.png"
          alt="Profile picture placeholder"
        />
        <div className="flex-1 ml-4">
          <h1 className="text-sm text-gray-800">{content}</h1>
        </div>
      </div>
      {children}
    </div>
  );
};

export default User;
