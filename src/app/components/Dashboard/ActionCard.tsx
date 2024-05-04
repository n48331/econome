"use client";
import { LiaSpinnerSolid } from "react-icons/lia";


const ActionCard = ({ title, icon, onClick ,color,amount,loading}:any) => {
    return (
        <div style={{backgroundColor:`#${color}`}} className={`p-6 w-[90%] bg-[#${color}] border border-gray-200 rounded-lg shadow text-[#47455b] relative`}>
        <p className="mb-3 font-normal ">{title}</p>
        
        <span >
            <h5 className="mb-2 text-2xl font-semibold tracking-tight ">₹ {loading?<LiaSpinnerSolid className="loading-icon"/>:amount}</h5>
        </span>
        {/* <span className=" absolute right-2 bottom-2 text-4xl" onClick={onClick}>
        <AiOutlinePlus />
        </span> */}
    </div>
    );
    }

export default ActionCard;