"use client";
import React from "react";
import style from "./index.module.scss";
import { ChatHeader } from "../ChatHeader";
import { ChatFooter } from "../ChatFooter";
import { Check } from "@/assets/Check";
import { Phone, PhoneProps } from "../Phone";
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
  const ref = React.useRef<null | HTMLDivElement>(null);
  const [value, setValue] = React.useState("");

  const handleScroll = () => {
    const lastChildElement = ref.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: "smooth" });
  };

  const handlelick = () => {
    chats[1].sender.push(`sender\`${value}\`12:55 am`);
    setValue("");
    handleScroll();
  };
  const phoneData: PhoneProps = {
    name: "iPhone 13",
    price: "₦730,000.00",
  };
  return (
    <div className={style.chat}>
      <ChatHeader />
      <div className={style.phoneDiv}>
        <Phone {...phoneData} />
        <div className={style.inStock}>
          <h5 className={style.inStock_text}>12</h5>
          <h5>in stock</h5>
        </div>
      </div>

      <div className={style.chatArea}>
        {chats.map((item, idx) => (
          <div key={idx}>
            <div className={style.date}>
              <p>{item.date}</p>
            </div>

            <div ref={ref} className={style.chatBox}>
              {item.sender.map((msg, idx) => (
                <div key={idx} className={style[msg.split("`")[0]]}>
                  <p>{msg.split("`")[1]}</p>
                  <div className={style.time}>
                    <small>{msg.split("`")[2]}</small>
                    <i>
                      <Check />
                    </i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ChatFooter value={value} setValue={setValue} handleClick={handlelick} />
    </div>
  );
};
