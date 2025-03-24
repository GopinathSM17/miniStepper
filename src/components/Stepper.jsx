import React from "react";

const Stepper = ({ count }) => {
  return (
    <div className={`flex justify-center items-center `}>
      <div
        className={`step step-1 flex justify-center items-center w-8 h-8  border-2 border-black rounded-full ${count>= 1 ? `bg-green-500` : `bg-blue-500`}`}
      >
        {count >= 1 ? <>✓</> : <>1</>}
      </div>
      <div
        className={`line line-1 flex justify-center items-center w-[140px] h-[3px]  ${count>= 1 ? `bg-green-500` : `bg-black`}`}
      ></div>

      <div
        className={`step step-1 flex justify-center items-center w-8 h-8  border-2  rounded-full border-black ${count>= 2 ? `bg-green-500` : `bg-blue-500`}`}
      >
        {count >= 2 ? <>✓</> : <>2</>}
      </div>
      <div
        className={`line line-1 flex justify-center items-center w-[140px] h-[3px] ${count>= 2 ? `bg-green-500` : `bg-black`}`}
      ></div>

      <div
        className={`step step-1 flex justify-center items-center w-8 h-8 border-2 border-black rounded-full ${count>= 3 ? `bg-green-500` : `bg-blue-500`}`}
      >
        {count >= 3 ? <>✓</> : <>3</>}
      </div>
      <div
        className={`line line-1 flex justify-center items-center w-[140px] h-[3px] ${count>= 3 ? `bg-green-500` : `bg-black`} `}
      ></div>

      <div
        className={`step step-1 flex justify-center items-center w-8 h-8  border-2 border-black rounded-full ${count>= 4 ? `bg-green-500` : `bg-blue-500`}`}
      >
        {count >= 4 ? <>✓</> : <>4</>}
      </div>
    </div>
  );
};

export default Stepper;
