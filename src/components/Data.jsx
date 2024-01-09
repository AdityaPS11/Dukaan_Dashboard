import { Details } from "./Details";

const Data = () => {
  return (
    <>
      <div className="w-[1152px]  h-9 flex items-center justify-between mb-6">
        <div className="w-[91px] h-7 text-zinc-900 text-xl font-medium leading-7 flex items-center">
          Overview
        </div>
        <div className="w-[137px] h-9 bg-white flex items-center justify-center rounded">
          <div className="text-neutral-600 text-base font-normal leading-normal flex items-center justify-center">
            Last Month{" "}
            <span className="ml-1 font-semibold mt-[-5px]">&#8964;</span>
          </div>
        </div>
      </div>
      <div className="w-[1152px] h-[118px] flex mb-8">
        <div className="w-[566px] h-[118px] bg-white mr-5 rounded border-solid pl-5 pt-3">
          <div className=" w-full h-6 items-center text-neutral-600 text-[17px] font-normal leading-normal mb-4">
            Online Order
          </div>
          <div className="w-[56px] h-[38px] items-center text-zinc-900 text-3xl font-medium leading-9 mb-4">
            231
          </div>
        </div>
        <div className="w-[566px] h-full bg-white rounded border-solid pl-5 pt-3">
          <div className=" w-full h-6 items-center text-neutral-600 text-[17px] font-normal leading-normal mb-4">
            Amount received
          </div>
          <div className="w-[56px] h-[38px] items-center text-zinc-900 text-3xl font-medium leading-9">
            ₹23,92,312.19
          </div>
        </div>
      </div>
      <div className="w-[1152px] h-[28px] text-zinc-900 text-xl font-medium leading-7 flex items-center mb-4">
        Transactions | This Month
      </div>
      <Details />
    </>
  );
};

export default Data;
