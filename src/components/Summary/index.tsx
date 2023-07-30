import { Button } from "@mui/material";
import style from "./index.module.scss";
import { ChevronDown } from "@/assets/ChevronDown";
import { BarChart } from "@/assets/BarChart";
export const Summary = () => {
  return (
    <div className={style.summary}>
      <div className={style.top}>
        <div className={style.left}>
          <p>Summary</p>
          <div className={style.salesButton}>
            <Button endIcon={<ChevronDown />}>Sales</Button>
          </div>
        </div>
        <Button endIcon={<ChevronDown />}>Last 7 Days</Button>
      </div>

      <BarChart />
    </div>
  );
};
