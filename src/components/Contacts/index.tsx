import React from "react";
import style from "./index.module.scss";
import { Search } from "react-feather";
import { ContactCard, ContactCardProps } from "../ContactCard";
import { User1 } from "@/assets/users/User1";

const contacts: ContactCardProps[] = [
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
  {
    fullname: "John Doe",
    lastText: "Hi, i want make enquiries about yo...",
    time: "12:55am",
    type: "New",
    image: <User1 />,
  },
];
export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.top}>
        <p>Contacts</p>
        <p>34</p>
      </div>
      <div className={style.searchBar}>
        <Search size={12} />
        <input type="text" placeholder="Search" />
      </div>

      <div className={style.contactCards}>
        {contacts.map((contact, idx) => (
          <ContactCard key={idx} {...contact} />
        ))}
      </div>
    </div>
  );
};
