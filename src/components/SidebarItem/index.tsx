import { FC } from "react";
import style from "./index.module.scss";
import { Button } from "@mui/material";
import { baseButtonStyle } from "../Sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
export interface SidebarItemProps {
  name: string;
  icon: JSX.Element;
  val?: number;
  active?: boolean;
  collapse?: boolean;
  icon2?: JSX.Element;
  nav?: string;
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { name, icon, val, active, collapse, nav, icon2 } = props;
  const location: string = usePathname();
  const isActive =
    location.includes(name.toLocaleLowerCase()) || location === nav;
  return (
    <Link href={nav || "/"} style={{ textDecoration: "none", color: "black" }}>
      {collapse ? (
        <div
          className={`${style.sideBarItemCollapse} ${isActive && style.active}`}
        >
          {isActive ? icon2 : icon}
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
