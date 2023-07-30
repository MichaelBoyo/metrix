import Image from "next/image";
import React from "react";
import user1 from "./user1.png";
export const User1 = () => {
  return (
    <Image style={{ width: "50px", height: "50px" }} src={user1} alt="user 1" />
  );
};
