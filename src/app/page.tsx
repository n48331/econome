"use client"
import { useEffect, useState } from "react";
import Popup from "./components/common/Popup";
import ActionCard from "./components/Dashboard/ActionCard";
import BalaceCard from "./components/Dashboard/BalaceCard";
import RecentTrans from "./components/Dashboard/RecentTrans";
import { getData, postData } from "@/api/sheets";


export default function Home() {
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [loading , setLoading] = useState(true);

  const [data, setData] = useState<any>([]);
  const [formData, setFormData] = useState({
    Name: "",
    Amount: 0,
    Date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    getData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const handleAddTransaction = async () => {
    const newTransaction = {
      name: formData.Name,
      amount: formData.Amount,
      date: formData.Date,
    };
    postData(newTransaction.name, newTransaction.amount, newTransaction.date);

    // setData([...data, newTransaction]);
    setFormData({
      Name: "",
      Amount: 0,
      Date: new Date().toISOString().split("T")[0],
    });

  };

  return (
    <main className="flex gap-5 flex-col items-center p-5 justify-center ">

      <>
        <Popup
          isModalOpen={isIncomeModalOpen || isExpenseModalOpen}
          setIsModalOpen={isIncomeModalOpen ? setIsIncomeModalOpen : setIsExpenseModalOpen}
          title={isIncomeModalOpen ? "Transfer" : "Deposited"}
          formData={formData}
          setFormData={setFormData}
          handleAddTransaction={handleAddTransaction}
        />
        <BalaceCard balance={data.balance} count={data.trans} />
        <div className="flex gap-5 justify-between w-full">
          <ActionCard title="Transfered" amount={data.total} icon="💰" onClick={() => setIsIncomeModalOpen(true)} color={"b1d1d8"} />
          <ActionCard title="Deposited" amount={data.deposited} icon="💰" onClick={() => setIsExpenseModalOpen(true)} color={"efdac7"} />
        </div>
        <div className="w-full">
          <RecentTrans data={data.transData?.slice().reverse()} limit={10} title={'Recent transactions'} />
        </div>
      </>

    </main>
  );
}
