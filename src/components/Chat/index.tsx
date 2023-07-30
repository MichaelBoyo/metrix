import React from "react";
import style from "./index.module.scss";
import { ChatHeader } from "../ChatHeader";
const chats = [
  {
    date: "12 August 2022",
    sender: [
      "receiver`Hello, I want to make enquiries about your product`12:55 am",
      "sender`Hello Janet, thank you for reaching out`12:55 am",
      "sender`What do you need to know?`12:55 am",
    ],
  },
  {
    date: "Today",
    sender: [
      "receiver`I want to know if the price is negotiable, i need about 2 Units`12:55 am",
    ],
  },
];
export const Chat = () => {
  return (
    <div className={style.chat}>
      <ChatHeader />
      {chats.map((item, idx) => (
        <div key={idx}>
          <p className={style.date}>{item.date}</p>
          <div className={style.chatBox}>
            {item.sender.map((msg, idx) => (
              <div key={idx} className={style[msg.split("`")[0]]}>
                <div className={style.innerDiv}>
                  <p>{msg.split("`")[1]}</p>
                  <small>{msg.split("`")[2]}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
