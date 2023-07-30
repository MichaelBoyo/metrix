import { FC } from "react";
import style from "./index.module.scss";
import { Button } from "@mui/material";
import { baseButtonStyle } from "../Sidebar";
import { ChevronDown } from "../../assets/ChevronDown";
import { NotificationIcon } from "../../assets/NotificationIcon";
import { UserImage } from "../../assets/UserImage";
import { HomeIcon } from "../../assets/HomeIcon";
const Navbar: FC = () => {
  return (
    <div>
      <div className={style.navbar}>
        <p>Dashboard</p>
        <div className={style.right}>
          <div className={style.mainbutton}>
            <Button endIcon={<ChevronDown />} sx={{ ...baseButtonStyle }}>
              Nanny&apos;s Shop
            </Button>
          </div>

          <NotificationIcon />
          <UserImage />
        </div>
      </div>
      <div className={style.breadCrumbs}>
        <HomeIcon />
      </div>
    </div>
  );
};

export default Navbar;
