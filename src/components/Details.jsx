/* eslint-disable react/jsx-key */

import { FaDownload, FaSearch, FaInfo } from "react-icons/fa";

export const Details = () => {
  const totalPages = 18;
  const generatePageNumbers = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => index + start);
  };
  const orderData = [
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
    {
      orderId: "#281209",
      orderDate: "7th July 2023",
      orderAmount: "1,278.23",
      transactionFees: "22",
    },
  ];
  return (
    <div className="w-[1152px] h-[1096px] pt-3 pr-3 pl-3 pb-3">
      <div className="w-[1128px] h-[41px]  flex items-center justify-between mb-2">
        <div className="flex items-center w-[245px] h-[39px] rounded pr-4 pl-4 pt-2 pb-2 mr-4 border-2 ">
          <div className="w-[200px] h-[20px] flex items-center rounded-md text-[#808080]">
            <FaSearch />
            <input
              type="text"
              className="w-full h-full ml-1.5 text-[#808080] outline-none border-none bg-transparent"
              placeholder="Search by order ID..."
            />
          </div>
        </div>
        <div className=" w-[120px] h-[41px] flex items-center justify-end">
          <div className="w-[79px] h-[36px] flex items-center justify-center border-2 mr-2 text-neutral-600 text-base font-normal leading-normal rounded">
            Sort &#8645;
          </div>
          <div className="w-[36px] h-[36px] border-2 rounded flex items-center justify-center  text-neutral-600">
            <FaDownload />
          </div>
        </div>
      </div>
      <div className="w-[1128px] h-[40px] pr-[12px] pl-[12px] bg-[#F2F2F2] rounded flex items-center text-neutral-600 text-sm font-medium leading-tight">
        <div className="w-[246px] h-[20px] mr-10 flex items-center ">
          Order ID
        </div>
        <div className="w-[246px] h-[20px] mr-10 flex items-center ">
          Order Date &#9660;
        </div>
        <div className="w-[246px] h-[20px] mr-10 flex items-center justify-end">
          Order Amount
        </div>
        <div className="w-[246px] h-[20px] flex items-center justify-end">
          Transaction Fees
          <div className="ml-1 mt-1 w-[14px] h-[14px] rounded-full flex items-center  justify-center border-2 border-gray-500 text-[7px]">
            <FaInfo />
          </div>
        </div>
      </div>
      {orderData.map((order) => (
        <div className="w-[1128px] h-[48px] pr-[12px] pl-[12px] rounded flex items-center border-b-2 border-zinc-400">
          <div className="w-[246px] h-[20px] mr-10 flex items-center text-sky-700 text-sm font-medium leading-tight">
            {order.orderId}
          </div>
          <div className="w-[246px] h-[20px] mr-10 flex items-center text-zinc-900 text-sm font-normal leading-tight ">
            ₹{order.orderDate}
          </div>
          <div className="w-[246px] h-[20px] mr-10 flex items-center justify-end text-zinc-900 text-sm font-normal leading-tight">
            ₹{order.orderAmount}
          </div>
          <div className="w-[246px] h-[20px] flex items-center justify-end text-zinc-900 text-sm font-normal leading-tight">
            ₹{order.transactionFees}
          </div>
        </div>
      ))}
      <div className="w-[1128px] h-[32px]  flex justify-center mt-12">
        <div className=" w-[610px] h-[32px] flex  text-neutral-600  text-sm font-medium leading-tight">
          <div className="w-[100px] h-[32px]  flex items-center justify-center border rounded border-slate-300 mr-6">
            &#60; Previous
          </div>
          <div className="w-[436px] h-[32px]  mr-6 flex items-center pl-3 space-x-1">
          {generatePageNumbers(1, 2,).map((pageNumber) => (
            <div
              key={pageNumber}
              className="w-[28px] h-[28px]  flex items-center justify-center border rounded border-slate-300"
            >
              {pageNumber}
            </div>
          ))}
          {totalPages > 7 && <div className="w-[28px] h-[28px] flex items-end">...</div>}
          {generatePageNumbers(totalPages - 8, totalPages).map((pageNumber) => (
            <div
              key={pageNumber}
              className="w-[28px] h-[28px]  flex items-center justify-center border rounded border-slate-300"
            >
              {pageNumber}
            </div>
          ))}
          </div>
          <div className="w-[74px] h-[32px] flex items-center justify-center border rounded border-slate-300">
            Next &#62;
          </div>
        </div>
      </div>
    </div>
  );
};
