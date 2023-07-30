import { FC } from "react";
import style from "./index.module.scss";

import { InventoryICon } from "../../assets/InventoryICon";

const items = [
  {
    label: "All Products",
    value: "45",
  },
  {
    label: "Active",
    value: "32",
    rate: "+24%",
  },
];

export const PurpleCard: FC = () => {
  return (
    <div className={style.baseCard}>
      <div className={style.top}>
        <InventoryICon />
      </div>
      <div className={style.body}>
        {items.map((item) => (
          <div>
            <label>{item.label}</label>
            <div className={style.innerBody}>
              <p>{item.value}</p>
              <small>{item.rate}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
