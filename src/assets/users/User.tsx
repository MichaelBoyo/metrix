import Image from "next/image";
import React from "react";
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";

const style = {
  width: "50px",
  height: "50px",
};
export const User1 = () =>  <Image style={style} src={user1} alt="user 1" />;


export const User2 = () =>  <Image style={style} src={user2} alt="user 2" />;


export const User3 = () => <Image style={style} src={user3} alt="user 3" />;
