import { PhoneImg } from "../../assets/PhoneImg";
import { FC } from "react";
import style from "./index.module.scss";
export interface PhoneProps {
  name: string;
  price: string;
  count?: number;
  date?: string;
  status?: string;
}
export const Phone: FC<PhoneProps> = ({ name, price, count, date, status }) => {
  return (
    <div className={style.phone}>
      <div className={style.innerDiv}>
        <PhoneImg />
        <div>
          <p> {name}</p>
          <p>
            {" "}
            {price} {count && "X"} {count}
          </p>
        </div>
      </div>

      <div>
        <p>{date}</p>
        <p className={style[status || "Pending"]}>{status}</p>
      </div>
    </div>
  );
};
