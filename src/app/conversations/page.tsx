import { Button } from "@mui/material";
import React from "react";
import style from "./index.module.scss";
import { Contacts } from "@/components/Contacts";
import { Chat } from "@/components/Chat";
import { baseButtonStyle } from "@/components/Sidebar";
const Conversations = () => {
  return (
    <div className={style.conversations}>
      <div className={style.top}>
        <p>Conversation with Customers</p>

        <div className={style.newMessageButton}>
          <Button sx={{ color: "white", textTransform: "none" }}>
            New Message
          </Button>
        </div>
      </div>
      <div className={style.body}>
        <Contacts />
        <Chat />
      </div>
    </div>
  );
};

export default Conversations;
