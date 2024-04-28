"use client";

import { AiOutlinePlus } from "react-icons/ai";

const ActionCard = ({ title, icon, onClick ,color,amount}:any) => {
    return (
        <div className={`p-6 w-[90%] bg-[#${color}] border border-gray-200 rounded-lg shadow text-[#47455b] relative`}>
        <p className="mb-3 font-normal ">{title}</p>
        
        <span >
            <h5 className="mb-2 text-2xl font-semibold tracking-tight ">₹{amount}</h5>
        </span>
        <span className=" absolute right-2 bottom-2 text-4xl">
        <AiOutlinePlus />
        </span>
    </div>
    );
    }

export default ActionCard;