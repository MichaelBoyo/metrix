import React, { FC } from "react";
import style from "./index.module.scss";
import { Plus } from "react-feather";
import { Button } from "@mui/material";
import { Emoji } from "@/assets/Emoji";
import { SendICon } from "@/assets/SendICon";
interface ChatFooterProps {
  value: string;
  setValue: (val: string) => void;
  handleClick: () => void;
}
export const ChatFooter: FC<ChatFooterProps> = ({
  value,
  setValue,
  handleClick,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className={style.chatFooter}>
      <div className={style.plus}>
        <Plus />
      </div>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Your mesage"
        onKeyDown={handleKeyDown}
      />
      <Emoji />
      <div className={style.sendButton}>
        <Button
          onClick={handleClick}
          endIcon={<SendICon />}
          sx={{ color: "black", textTransform: "none" }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
