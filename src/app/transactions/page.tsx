"use client";
import { getData } from "@/api/sheets";
import RecentTrans from "../components/Dashboard/RecentTrans";
import { useState,useEffect } from "react";

const allTransactions = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        getData().then((res) => {
          setData(res);
        });
      }, []);
    
    return (
        <div>
            <RecentTrans data={data.transData?.slice().reverse()} limit={2000} title={'All Transactions'}/>
        </div>
    );
}

export default allTransactions;