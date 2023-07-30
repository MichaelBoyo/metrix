import { Phone, PhoneProps } from "../Phone";
import style from "./index.module.scss";
const orders: PhoneProps[] = [
  {
    name: "iPhone 13",
    price: "₦730,000.00",
    count: 1,
    date: "12 Sept 2022",
    status: "Pending",
  },
  {
    name: "iPhone 13",
    price: "₦730,000.00",
    count: 1,
    date: "12 Sept 2022",
    status: "Completed",
  },
  {
    name: "iPhone 13",
    price: "₦730,000.00",
    count: 1,
    date: "12 Sept 2022",
    status: "Pending",
  },

  {
    name: "iPhone 13",
    price: "₦730,000.00",
    count: 1,
    date: "12 Sept 2022",
    status: "Pending",
  },
  {
    name: "iPhone 13",
    price: "₦730,000.00",
    count: 1,
    date: "12 Sept 2022",
    status: "Pending",
  },
  {
    name: "iPhone 13",
    price: "₦730,000.00",
    count: 1,
    date: "12 Sept 2022",
    status: "Pending",
  },
];
export const Orders = () => {
  return (
    <div className={style.orders}>
      <p>Recent Orders</p>
      <div>
        {orders.map((item, idx) => (
          <Phone key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
