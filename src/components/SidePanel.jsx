import nishyan from "../assets/nishyan.png";
import arrow from "../assets/arrow.svg";
import Pages from "./Pages";
import wallet from "../assets/wallet.svg";

const SidePanel = () => {
  return (
    <div className="bg-[#1E2640] h-[202vh] pt-4 pl-2.5 pr-2.5">
      <div className="w-[192px] h-[42px] flex items-center mb-8 mr-1 ml-1">
        <img
          src={nishyan}
          alt="Nishyan"
          className="w-[40px] h-[40px] mr-3 rounded"
        />
        <div className="flex flex-col mr-12">
          <div className="font-medium text-white text-[16px] leading-[22px]">
            Nishyan
          </div>
          <div className="opacity-80 font-normal text-white text-[14px] leading-[16px] underline mt-1">
            Visit store
          </div>
        </div>
        <div className="w-5 h-5">
          <img src={arrow} alt="Arrow" />
        </div>
      </div>
      <Pages />
      <div className="w-[192px] h-[54px] bg-[#353C53]  mt-[320%] rounded pl-3 pt-2 pb-2 flex items-center">
        <div className="w-9 h-9 bg-white bg-opacity-10 flex items-center justify-center rounded mr-3">
          <img src={wallet} alt="wallet" />
        </div>
        <div className="w-[101px] h-[42px] flex flex-col justify-around">
          <div className="opacity-80 font-medium text-white text-[13px] leading-[16px] mt-1">
            Available Credits
          </div>
          <div className="font-semibold text-white text-[16px] leading-[22px]">
            222.10
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
