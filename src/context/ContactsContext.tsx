"use client";

import { createContext, useContext, useState } from "react";

type Contact = {
    name: string;
    phone: string;
    address: string;
    region: string;
};

type ContactsContextType = {
    contacts: Contact[];
    addContact: (contact: Omit<Contact, "region">) => Promise<void>;
    removeContact: (phone: string) => void; // Nova função
};

const ContactsContext = createContext<ContactsContextType>({
    contacts: [],
    addContact: async () => { },
    removeContact: () => { },
});

export const ContactsProvider = ({ children }: { children: React.ReactNode }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    const addContact = async ({ name, phone, address }: Omit<Contact, "region">) => {
        try {
            const response = await fetch(`http://127.0.0.1:3003/region/${phone}`);
            const data = await response.json();

            const region = data.region || "Desconhecida";

            const newContact: Contact = { name, phone, address, region };
            setContacts((prevContacts) => [...prevContacts, newContact]);
        } catch (error) {
            console.error("Erro ao buscar a região:", error);
        }
    };

    const removeContact = (phone: string) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.phone !== phone));
    };

    return (
        <ContactsContext.Provider value={{ contacts, addContact, removeContact }}>
            {children}
        </ContactsContext.Provider>
    );
};

export const useContacts = () => useContext(ContactsContext);
