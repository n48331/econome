"use client"
import { use, useEffect, useState } from "react";
import Popup from "./components/common/Popup";
import ActionCard from "./components/Dashboard/ActionCard";
import BalaceCard from "./components/Dashboard/BalaceCard";
import RecentTrans from "./components/Dashboard/RecentTrans";

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
    const isLocalStorageSupported = typeof window !== "undefined" && window.localStorage;
    if (isLocalStorageSupported) {
      const localData = localStorage.getItem("data");
      if (localData) {
        setData(JSON.parse(localData));
      }
    }
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



  useEffect(() => {
    const isLocalStorageSupported = typeof window !== "undefined" && window.localStorage;
    if (isLocalStorageSupported) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);
  useEffect(() => {
    const income = data.filter((item: any) => item.type === "Income").reduce((acc: any, item: any) => acc + Number(item.amount), 0);
    const expense = data.filter((item: any) => item.type === "Expense").reduce((acc: any, item: any) => acc + Number(item.amount), 0);
    setTotals({
      income,
      expense,
    });
  } , [data]);

  return (
    <main className="flex gap-5 flex-col items-center p-5 justify-center ">
      <Popup
        isModalOpen={isIncomeModalOpen || isExpenseModalOpen}
        setIsModalOpen={isIncomeModalOpen ? setIsIncomeModalOpen : setIsExpenseModalOpen}
        title={isIncomeModalOpen ? "Income" : "Expense"}
        formData={formData}
        setFormData={setFormData}
        handleAddTransaction={handleAddTransaction}
      />
      <BalaceCard balance={totals.income - totals.expense}/>
      <div className="flex gap-5 justify-between w-full">
        <ActionCard title="Income" amount={totals.income} icon="💰" onClick={() => setIsIncomeModalOpen(true)} color={"b1d1d8"} />
        <ActionCard title="Expense" amount={totals.expense} icon="💰" onClick={() => setIsExpenseModalOpen(true)} color={"efdac7"} />
      </div>
      <div className="w-full">
        <RecentTrans data={data} />
      </div>
    </main>
  );
}
