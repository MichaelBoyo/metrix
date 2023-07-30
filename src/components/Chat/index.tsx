"use client";
import React from "react";
import style from "./index.module.scss";
import { ChatHeader } from "../ChatHeader";
import { ChatFooter } from "../ChatFooter";
import { Check } from "@/assets/Check";
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
  const [value, setValue] = React.useState("");

  const handlelick = () => {
    chats[1].sender.push(`sender\`${value}\`12:55 am`);
    setValue("");
  };
  return (
    <div className={style.chat}>
      <ChatHeader />
      {chats.map((item, idx) => (
        <div key={idx}>
          <div className={style.date}>
            <p>{item.date}</p>
          </div>

          <div className={style.chatBox}>
            {item.sender.map((msg, idx) => (
              <div key={idx} className={style[msg.split("`")[0]]}>
             
                  <p>{msg.split("`")[1]}</p>
                  <div className={style.time}>
                    <small>{msg.split("`")[2]}</small>
                    <i>
                      {" "}
                      <Check />
                    </i>
                  </div>
                </div>
            
            ))}
          </div>
        </div>
      ))}
      <ChatFooter value={value} setValue={setValue} handleClick={handlelick} />
    </div>
  );
};
