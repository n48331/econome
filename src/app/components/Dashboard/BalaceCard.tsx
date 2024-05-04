import { TbArrowBigUpLines } from "react-icons/tb";
import { LiaSpinnerSolid } from "react-icons/lia";
const BalaceCard = ({balance,count,loading}:any) => {
    return (
        <div className="relative p-6 w-full bg-[#322f50] border border-gray-200 rounded-lg shadow text-[#f9f9fc]">
        <p className="mb-3 font-normal ">Total Balance</p>
        
        <span >
            <h5 className="mb-2 text-2xl font-semibold tracking-tight">₹ {loading ?<LiaSpinnerSolid className="loading-icon"/>: balance}</h5>
        </span>
        <span className="absolute right-5 bottom-5 text-[#f9f9fc] text-xl font-bold flex items-center gap-1"><TbArrowBigUpLines/> {count}</span>
    </div>
    );
    }

export default BalaceCard;