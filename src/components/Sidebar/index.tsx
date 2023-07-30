import { FC } from "react";
import logo from "../../assets/logo.svg";
import SidebarItem, { SidebarItemProps } from "../SidebarItem";

import { Button } from "@mui/material";
import style from "./index.module.scss";
import CustomerIcon from "../../assets/CustomerIcon";
import DashIcon from "../../assets/DashIcon";
import { OrdersIcon } from "../../assets/OrdersIcon";
import { InventoryICon } from "../../assets/InventoryICon";
import { ConversationIcon } from "../../assets/ConversationIcon";
import { SettingsIcon } from "../../assets/SettingsIcon";
import { SupportIcon } from "../../assets/SupportIcon";
import { GiftIcon } from "../../assets/GiftIcon";
import { ChevronRight } from "../../assets/ChevronRight";
import { LogoutIcon } from "../../assets/LogoutIcon";
import { Logo } from "@/assets/Logo";
const initialSideBarItem: SidebarItemProps[] = [
  {
    name: "Dashboard",
    icon: <DashIcon />,
    active: true,
  },
  {
    name: "orders",
    val: 3,
    icon: <OrdersIcon />,
  },
  {
    name: "Customers",
    icon: <CustomerIcon />,
  },
  {
    name: "Inventory",
    icon: <InventoryICon />,
  },
  {
    name: "Conversations",
    val: 18,
    icon: <ConversationIcon />,
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
  },
];
const Sidebar: FC = () => {
  return (
    <div className={style.sideBar}>
      <div className={style.top}>
        <Logo />

        <div className={style.sideBarItems}>
          {initialSideBarItem.map((item, idx) => (
            <SidebarItem key={idx} {...item} />
          ))}
        </div>
      </div>

      <div className={style.bottom}>
        <div className={style.contactSupport}>
          <Button startIcon={<SupportIcon />} sx={baseButtonStyle}>
            Contact Support
          </Button>
        </div>

        <div className={style.freeGift}>
          <Button startIcon={<GiftIcon />} sx={baseButtonStyle}>
            Free Gift Awaits You!
          </Button>
          <Button
            endIcon={<ChevronRight />}
            sx={{ ...baseButtonStyle, color: "#6E7079" }}
          >
            Upgrade your account
          </Button>
        </div>

        <Button startIcon={<LogoutIcon />} sx={baseButtonStyle}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export const baseButtonStyle = {
  color: "black",
  textTransform: "none",
};

export default Sidebar;
