import React from "react";
import style from "./index.module.scss";
import { Search } from "react-feather";
import { ContactCard } from "../ContactCard";

import { contacts } from "./mock-contacts";

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
