import { useState } from "react";
function IncDecCounter() {
    return (
        <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1  border border-primary shadow-md">
            <button data-action="decrement" className="  h-full w-20  cursor-pointer outline-none hover:bg-gray-100 rounded-l-md">
                <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number" readOnly className="focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
            <button data-action="increment" className=" h-full w-20  cursor-pointer hover:bg-gray-100 rounded-r-md">
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
        </div>

    );
}

export default IncDecCounter;