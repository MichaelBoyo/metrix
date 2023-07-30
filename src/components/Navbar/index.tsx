"use client";
import { FC, useEffect, useState } from "react";
import style from "./index.module.scss";
import { Button } from "@mui/material";
import { baseButtonStyle } from "../Sidebar";
import { ChevronDown } from "../../assets/ChevronDown";
import { NotificationIcon } from "../../assets/NotificationIcon";
import { UserImage } from "../../assets/UserImage";
import { HomeIcon } from "../../assets/HomeIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar: FC = () => {
  const location = usePathname();

  console.log("location", location);

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
        <Link href="/">
          <HomeIcon />
        </Link>{" "}
        {location.split("/").map(
          (item, idx) =>
            item !== "" && (
              <div className={style.locationItem} key={idx}>
                <p>/</p>
                <Link href={"/" + item}>{item}</Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Navbar;
