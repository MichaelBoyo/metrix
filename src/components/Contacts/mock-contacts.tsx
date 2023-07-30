import {  ContactCardProps } from "../ContactCard";
import { User1, User2, User3 } from "@/assets/users/User";

export const contacts: ContactCardProps[] = [
  {
    fullname: "Jane Doe",
    lastText: "Hi, i want make enquiries about your produ...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "Janet Adebayo",
    lastText: "Hi, i want make enquiries about your produ...",
    time: "12:55am",
    type: "3",
    image: <User3 />,
  },
  {
    fullname: "Kunle Adekunle",
    lastText: "Hi, i want make enquiries about your produ...",
    time: "12:55am",

    image: <User2 />,
  },
];
