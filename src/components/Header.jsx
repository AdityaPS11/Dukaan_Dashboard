import { FaSearch } from "react-icons/fa";
import help from "../assets/Help.svg";
import group from "../assets/Group.svg";
import menu from "../assets/Menu.svg";

const Header = () => {
  return (
    <div className="w-[1216px] h-[64px] bg-white pl-8 pr-8 pt-3 pb-3 flex items-center border-b-2">
      <div className=" flex items-center w-[360px] h-8 mr-4">
        <div className="mr-4 text-zinc-900 text-base font-normal leading-snug">
          Payments
        </div>
        <div className="h-4 flex items-center">
          <img src={help} className="text-[14px] text-[#4D4D4D] mt-[2px]" alt="Help" />
          <div className="text-[#4D4D4D] text-[14px] font-normal ml-1 leading-4">
            How it works.
          </div>
        </div>
      </div>
      <div className="flex items-center w-[400px] h-[40px]  bg-[#F2F2F2] rounded pr-4 pl-4 pt-2 pb-2 mr-4">
        <div className="w-[232px] h-[22px] flex items-center rounded-md text-[#808080]">
          <FaSearch />
          <input
            type="text"
            className="w-full h-full ml-1 text-[#808080] outline-none border-none bg-transparent"
            placeholder="Search features, tutorials, etc."
          />
        </div>
      </div>
      <div className="w-[510px] h-[40px] flex items-center justify-end">
        <div className="w-9 h-9 bg-neutral-200 rounded-full flex items-center justify-center mr-3">
            <img src={group} alt="group"/>
        </div>
        <div className="w-9 h-9 bg-neutral-200 rounded-full flex items-center justify-center">
            <img src={menu} alt="menu"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
