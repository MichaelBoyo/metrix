import { FC } from "react";
import style from "./index.module.scss";
import { Button } from "@mui/material";
import { baseButtonStyle } from "../Sidebar";
export interface SidebarItemProps {
  name: string;
  icon: JSX.Element;
  val?: number;
  active?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { name, icon, val, active } = props;
  return (
    <div className={`${style.sideBarItem} ${active && style.active}`}>
      <Button
        sx={{ ...baseButtonStyle, color: active ? "white" : "black" }}
        startIcon={icon}
      >
        {name}
      </Button>
      {val && <span className={style.value}>{val}</span>}
    </div>
  );
};

export default SidebarItem;
