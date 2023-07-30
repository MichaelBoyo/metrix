import Image from "next/image";
import style from "./page.module.scss";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div className={style.mainContent}>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}
