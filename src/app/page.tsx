"use client"
import {  useEffect, useState } from "react";
import Popup from "./components/common/Popup";
import ActionCard from "./components/Dashboard/ActionCard";
import BalaceCard from "./components/Dashboard/BalaceCard";
import RecentTrans from "./components/Dashboard/RecentTrans";
import { getData } from "@/api/sheets";

export default function Home() {
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [totals, setTotals] = useState({
    income: 0,
    expense: 0,
  });
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    username: "Nabeel",
    amount: 0,
    type: "",
    date: new Date().toISOString().split("T")[0],
    image: "/docs/images/people/profile-picture-1.jpg",
  });
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    }
    );
   
  }, []);

  const handleAddTransaction = () => {
    const newTransaction = {
      id: data.length + 1,
      name: formData.name,
      amount: formData.amount,
      type: formData.type,
      user: formData.username,
      image: formData.image,
    };

    setData([...data, newTransaction]);
    setFormData({
      id: 0,
      name: "",
      username: "Nabeel",
      amount: 0,
      type: "",
      date: new Date().toISOString().split("T")[0],
      image: "/docs/images/people/profile-picture-1.jpg",
    });
  };






  return (
    <main className="flex gap-5 flex-col items-center p-5 justify-center ">
      <Popup
        isModalOpen={isIncomeModalOpen || isExpenseModalOpen}
        setIsModalOpen={isIncomeModalOpen ? setIsIncomeModalOpen : setIsExpenseModalOpen}
        title={isIncomeModalOpen ? "Transfer" : "Deposited"}
        formData={formData}
        setFormData={setFormData}
        handleAddTransaction={handleAddTransaction}
      />
      <BalaceCard balance={data.balance} count={data.trans}/>
      <div className="flex gap-5 justify-between w-full">
        <ActionCard title="Transfer" amount={data.total} icon="💰" onClick={() => setIsIncomeModalOpen(true)} color={"b1d1d8"} />
        <ActionCard title="Deposited" amount={data.deposited} icon="💰" onClick={() => setIsExpenseModalOpen(true)} color={"efdac7"} />
      </div>
      <div className="w-full">
        <RecentTrans data={data.transData?.slice().reverse()} />
      </div>
    </main>
  );
}
