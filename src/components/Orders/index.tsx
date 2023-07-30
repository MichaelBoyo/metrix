import { Phone, PhoneProps } from "../Phone";
import style from "./index.module.scss";
import { orders } from "./mock-orders";

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
