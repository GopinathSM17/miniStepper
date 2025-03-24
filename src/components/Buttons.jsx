import React from "react";
import Stepper from "./Stepper";
import { useState } from "react";


const Buttons = ({count,setCount}) => {
  return (
    <div className="flex pt-4 gap-4">
      <button
        id="prev"
        className="flex justify-center p-4 items-center bg-slate-500 w-[100px] h-[20px]"
        onClick={() => {
            setCount(count - 1);
            console.log(count);
        }}
      >
        Previous
      </button>
      <button
        id="next"
        className="flex justify-center p-4 items-center bg-slate-500 w-[100px] h-[20px]"
        onClick={() => {
            if(count <= 4){
                setCount(count + 1);
            }
            console.log(count);
          }}
      >
        Next
      </button>
    </div>
  );
};

export default Buttons;
