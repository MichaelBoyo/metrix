"use client";
import { FC, useState } from "react";
import SidebarItem, { SidebarItemProps } from "../SidebarItem";

import { Button, IconButton } from "@mui/material";
import style from "./index.module.scss";
import CustomerIcon from "../../assets/CustomerIcon";
import DashIcon from "../../assets/DashIcon";
import { OrdersIcon } from "../../assets/OrdersIcon";
import { InventoryICon } from "../../assets/InventoryICon";
import { ConversationIcon } from "../../assets/ConversationIcon";
import { SettingsIcon } from "../../assets/SettingsIcon";
import { SupportIcon } from "../../assets/SupportIcon";
import { GiftIcon } from "../../assets/GiftIcon";
import { ChevronRight, ChevronLeft } from "react-feather";
import { LogoutIcon } from "../../assets/LogoutIcon";
import { Logo } from "@/assets/Logo";
import { IconLogo } from "@/assets/IconLogo";
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
  const [collapse, setCollapse] = useState(true);
  const size = 14;
  return (
    <div
      style={{ minWidth: collapse ? "1px" : "15%" }}
      className={style.sideBar}
    >
      <div className={style.collapse}>
        {collapse ? (
          <IconButton onClick={() => setCollapse(false)}>
            <ChevronRight size={size} />
          </IconButton>
        ) : (
          <IconButton onClick={() => setCollapse(true)}>
            <ChevronLeft size={size} />
          </IconButton>
        )}
      </div>
      <div className={style.top}>
        {collapse ? <IconLogo /> : <Logo />}

        <div
          style={{ marginTop: collapse ? "100%" : "15%" }}
          className={style.sideBarItems}
        >
          {initialSideBarItem.map((item, idx) => (
            <SidebarItem collapse={collapse} key={idx} {...item} />
          ))}
        </div>
      </div>

      <div className={style.bottom}>
        <div
          style={{ padding: collapse ? "10px" : "0" }}
          className={style.contactSupport}
        >
          {collapse ? (
            <SupportIcon />
          ) : (
            <Button startIcon={<SupportIcon />} sx={baseButtonStyle}>
              Contact Support
            </Button>
          )}
        </div>

        <div
          style={{ padding: collapse ? "10px" : "0" }}
          className={style.freeGift}
        >
          {collapse ? (
            <GiftIcon />
          ) : (
            <Button startIcon={<GiftIcon />} sx={baseButtonStyle}>
              Free Gift Awaits You!
            </Button>
          )}

          {collapse ? (
            ""
          ) : (
            <Button
              endIcon={<ChevronRight />}
              sx={{ ...baseButtonStyle, color: "#6E7079" }}
            >
              Upgrade your account
            </Button>
          )}
        </div>
        {collapse ? (
          <div className={style.logout}>
            <LogoutIcon />
          </div>
        ) : (
          <Button startIcon={<LogoutIcon />} sx={baseButtonStyle}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export const baseButtonStyle = {
  color: "black",
  textTransform: "none",
};

export default Sidebar;
