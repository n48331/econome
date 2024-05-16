"use client";
import { getData } from "@/api/sheets";
import RecentTrans from "../components/Dashboard/RecentTrans";
import { useState,useEffect } from "react";

const allTransactions = () => {
    const [data, setData] = useState<any>([]);
    const [loading , setLoading] = useState(true);
    useEffect(() => {
      const interval = setInterval(() => {
        getData().then((res) => {
          setData(res);
          setLoading(false);
        });
      }, 5000);
  
      return () => clearInterval(interval);
      }, []);
    
    return (
        <div>
            <RecentTrans loading={loading} data={data.transData?.slice().reverse()} limit={2000} title={'All Transactions'}/>
        </div>
    );
}

export default allTransactions;