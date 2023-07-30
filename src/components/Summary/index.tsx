import { Button } from "@mui/material";
import style from "./index.module.scss";
import { ChevronDown } from "react-feather";
import { BarChart } from "@/assets/BarChart";
export const Summary = () => {
  return (
    <div className={style.summary}>
      <div className={style.top}>
        <div className={style.left}>
          <p>Summary</p>
          <div className={style.salesButton}>
            <Button sx={{ color: "#5570F1" }} endIcon={<ChevronDown />}>
              Sales
            </Button>
          </div>
        </div>
        <Button
          sx={{ textTransform: "none", color: "black" }}
          endIcon={<ChevronDown />}
        >
          Last 7 Days
        </Button>
      </div>

      <BarChart />
    </div>
  );
};
