import React, { FC, ReactNode } from "react";
import style from "./index.module.scss";
export interface ContactCardProps {
  fullname: string;
  lastText: string;
  type?: string;
  time: string;
  image: ReactNode;
}
export const ContactCard: FC<ContactCardProps> = (props) => {
  return (
    <div className={style.contactCard}>
      {props.image}

      <div className={style.text}>
        <div className={style.top}>
          <p className={style.name}>{props.fullname}</p>
          {props.type && <small className={style.type}>{props.type}</small>}
        </div>
        <div className={style.bottom}>
          <p className={style.message}>{props.lastText}</p>
          <p className={style.time}>{props.time}</p>
        </div>
      </div>
    </div>
  );
};
