import { useState } from "react";
import { mainMenu } from "../constant";
import Inputbox from "./Inputbox";
import MenuList from "./Menulist";
import Conversation from "./conversation/Conversation";
import "./layout.css";

const Layout = () => {
  const [userEvent, setUserEvent] = useState(false);

  const handleMenuClick = () => {
    setUserEvent(true);
  };

  return (
    <div className="justify-end min-h-screen min-w-screen items-stretch bg-slate-100 flex flex-col rounded-2xl relative">
      {userEvent && <Conversation />}

      {!userEvent && (
        <div className="justify-center items-center content-center flex-wrap flex w-full flex-col px-16 py-4 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="w-full max-w-[800px] flex-col items-stretch max-md:max-w-full">
            <MenuList mainMenu={mainMenu} handleMenu={handleMenuClick} />
          </div>
        </div>
      )}

      <Inputbox />
    </div>
  );
};

export default Layout;
