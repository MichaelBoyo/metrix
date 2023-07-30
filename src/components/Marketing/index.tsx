import { Chart } from "../../assets/Chart";
import style from "./index.module.scss";
import { Button } from "@mui/material";
import { ChevronDown2 } from "../../assets/ChevronDown2";
import { BlueDot } from "../../assets/BlueDot";
import { PurpleDot } from "../../assets/PurpleDot";
import { OrangeDot } from "../../assets/OrangeDot";

const values = [
  {
    name: "Acquisition",
    dot: <BlueDot />,
  },
  {
    name: "Purchase",
    dot: <PurpleDot />,
  },
  {
    name: "Retention",
    dot: <OrangeDot />,
  },
];
export const Marketing = () => {
  return (
    <div className={style.marketting}>
      <div className={style.top}>
        <p>Marketing</p>
        <Button
          sx={{ textTransform: "none", color: "#BEC0CA" }}
          endIcon={<ChevronDown2 />}
        >
          This week
        </Button>
      </div>
      <div className={style.values}>
        {values.map((item, idx) => (
          <div key={idx} className={style.item}>
            {item.dot}
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <Chart />
    </div>
  );
};
