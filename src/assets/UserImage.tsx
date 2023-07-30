import Image from "next/image";
import profile1 from "./profile 1.png";
export const UserImage = () => {
  return (
    <div>
      <Image src={profile1} alt="profile" />
    </div>
  );
};
