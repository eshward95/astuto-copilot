import React from "react";
import { USER } from "../../../constant";

interface ProfileProps {
  content: string;
  children?: React.ReactNode;
  type: string;
}

const Profile: React.FC<ProfileProps> = ({ content, children, type }) => {
  const imgSrc =
    type === USER
      ? "/businessman.png"
      : "https://media.licdn.com/dms/image/D4D0BAQFmD0vuBDDR_w/company-logo_200_200/0/1694676075383/astuto_cloud_logo?e=1712188800&v=beta&t=7EbNVQifFxiDKsjLHo64r4awP-pBHNRQmrUtPPQqVWg";

  return (
    <div className="pb-4 w-full">
      <div className="flex items-center border-b border-gray-200 pb-6 ">
        <img
          className="h-8 w-8 rounded-md bg-gray-300"
          src={imgSrc}
          alt="profile"
        />
        <div className="flex-1 ml-4">
          {content && !content.includes("<") ? (
            <p className="text-sm text-gray-800">{content}</p>
          ) : (
            <p
              className="text-gray-700 text-sm"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Profile;
