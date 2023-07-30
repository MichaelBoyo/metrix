import { FC } from "react";
import { BaseCard, CardItemProps } from "../BaseCard";
import style from "./index.module.scss";
import { SalesIcon } from "../../assets/SalesIcon";
import { CustomerIcon2 } from "../../assets/CustomerIcon2";
import { OrderIcon2 } from "../../assets/OrderIcon2";
import { Orders } from "../Orders";
import { Marketing } from "../Marketing";
import { Summary } from "../Summary";

import { PurpleCard } from "../PurpleCard";
import { Cart } from "@/assets/Cart";

const item1: CardItemProps[] = [
  {
    label: "Sales",
    value: "₦4,000,000.00",
  },
  {
    label: "Volume",
    value: "450",
    rate: "+20.00%",
  },
];

const item2: CardItemProps[] = [
  {
    label: "Customers",
    value: "1,250",
    rate: "+15.80%",
  },
  {
    label: "Active",
    value: "450",
    rate: "85%",
  },
];

const item3: CardItemProps[] = [
  {
    label: "All Orders",
    value: "450",
  },
  {
    label: "Pending",
    value: "5",
  },
  {
    label: "Completed",
    value: "445",
  },
];

const middeItem: CardItemProps[] = [
  {
    label: "Abandoned Cart",
    value: "20%",
    color: "red",
    rate: "+0.00%",
  },
  {
    label: "Customers",
    value: "30",
  },
];
const Dashboard: FC = () => {
  return (
    <div className={style.dashboard}>
      <div className={style.top}>
        <BaseCard items={item1} icon={<SalesIcon />} />
        <BaseCard items={item2} icon={<CustomerIcon2 />} />
        <BaseCard items={item3} icon={<OrderIcon2 />} />
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
          <div className={style.marketting}>
            <Marketing />
            <div className={style.doubleCard}>
              <PurpleCard />
              <BaseCard items={middeItem} icon={<Cart />} />
            </div>
          </div>
          <Summary />
        </div>
        <Orders />
      </div>
    </div>
  );
};

export default Dashboard;
