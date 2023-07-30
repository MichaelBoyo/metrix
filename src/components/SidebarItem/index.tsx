import { FC } from "react";
import style from "./index.module.scss";
import { Button } from "@mui/material";
import { baseButtonStyle } from "../Sidebar";
import Link from "next/link";
export interface SidebarItemProps {
  name: string;
  icon: JSX.Element;
  val?: number;
  active?: boolean;
  collapse?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { name, icon, val, active, collapse } = props;
  return (
    <Link
      href={name.toLocaleLowerCase()}
      style={{ textDecoration: "none", color: "black" }}
    >
      {collapse ? (
        <div
          className={`${style.sideBarItemCollapse} ${active && style.active}`}
        >
          {icon}
          {val && (
            <span className={`${style.collapseVal} ${style.value}`}>{val}</span>
          )}
        </div>
      ) : (
        <div className={`${style.sideBarItem} ${active && style.active}`}>
          <Button
            sx={{ ...baseButtonStyle, color: active ? "white" : "black" }}
            startIcon={icon}
          >
            {name}
          </Button>
          {val && <span className={style.value}>{val}</span>}
        </div>
      )}
    </Link>
  );
};

export default SidebarItem;
