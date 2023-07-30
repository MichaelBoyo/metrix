import React from "react";
import style from "./index.module.scss";
import { User1 } from "@/assets/users/User1";
import { PutpleDot } from "@/assets/PutpleDot";
import { Button } from "@mui/material";
import { OrdersIcon } from "@/assets/OrdersIcon";
export const ChatHeader = () => {
  return (
    <div className={style.chatHeader}>
      <div className={style.left}>
        <User1 />
        <div className={style.nameDiv}>
          <p className={style.name}>Jane Doe</p>
          <div className={style.onlineTime}>
            <PutpleDot />
            <small>Online</small>
            <small>12:55 am</small>
          </div>
        </div>
      </div>
      <div className={style.right}>
        <p>New Customer</p>
        <div className={style.viewProfile}>
          <p>View Profile</p>
          <div className={style.ordersCount}>
            <OrdersIcon />
            <small>0 Orders</small>
          </div>
        </div>
      </div>
    </div>
  );
};
