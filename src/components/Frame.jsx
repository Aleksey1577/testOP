import React from "react";

function Frame() {
  return (
    <div className="bg-blue rounded-[10px]">
      <div className="flex justify-between px-[20px] py-[13px]">
        <div className="flex items-center text-white ">
          <div className="border-[1px] rounded-[90px] p-[15px]">0/7</div>
        </div>
        <div className="flex flex-col text-white">
          <div className="flex items-center">
            <p className="bg-dark-blue rounded-[40px] px-[13px]">Чеклист</p>
          </div>
          <p className="my-[4px]">Выполнено: 0 из 7 действий</p>
          <p>Следующее действие: Созвониться с клиентом до 23.05.24 12:00</p>
        </div>
        <div className="flex items-center">
          <button className="bg-white px-[25px] py-[10px] rounded-[6px] text-blue hover:text-dark-blue">
            Открыть чеклист
          </button>
        </div>
      </div>
    </div>
  );
}

export default Frame;
