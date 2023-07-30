import Image from "next/image";
import phone from "./Rectangle 3.png";
export const PhoneImg = () => {
  return (
    <Image src={phone} alt="phone" style={{ width: "50px", height: "50px" }} />
  );
};
