"use client";
import ActionCard from "./components/Dashboard/ActionCard";
import BalaceCard from "./components/Dashboard/BalaceCard";
import RecentTrans from "./components/Dashboard/RecentTrans";

export default function Home() {
  return (
    <main className="flex gap-5 flex-col items-center p-5 justify-center ">
     

    <BalaceCard/>
    <div className="flex gap-5 justify-between w-full">
      <ActionCard title="Income" amount={'37,500'} icon="💰" onClick={() => console.log("Add Income")} color={'b1d1d8'}/>
      <ActionCard title="Expence" amount={'2,500'} icon="💰" onClick={() => console.log("Add Income")} color={'efdac7'}/>
    </div>
    <div className="w-full">
      <RecentTrans/>
    </div>
    </main>
  );
}
