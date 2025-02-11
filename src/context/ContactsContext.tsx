"use client";

import { createContext, useContext, useState } from "react";
import AlertModal from "@/components/AlertModal";

type Contact = {
    name: string;
    phone: string;
    address: string;
    region: string;
    isFavorite: boolean; // Novo campo para favoritos
};

type ContactsContextType = {
    contacts: Contact[];
    addContact: (contact: Omit<Contact, "region" | "isFavorite">) => void;
    removeContact: (phone: string) => void;
    toggleFavorite: (phone: string) => void; // Função para favoritar/desfavoritar
};

const ContactsContext = createContext<ContactsContextType>({
    contacts: [],
    addContact: () => { },
    removeContact: () => { },
    toggleFavorite: () => { },
});

export const ContactsProvider = ({ children }: { children: React.ReactNode }) => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const addContact = async ({ name, phone, address }: Omit<Contact, "region" | "isFavorite">) => {
        try {
            const response = await fetch(`https://minidddapi.onrender.com/region/${phone}`); 
            // ou, para rodar a API localemente
            // const response = await fetch(`http://127.0.0.1:3003/${phone}`); 

            const data = await response.json();

            if (!data.region) {
                setErrorMessage("DDD não encontrado. Verifique o número digitado.");
                return;
            }

            const newContact: Contact = { name, phone, address, region: data.region, isFavorite: false };
            setContacts((prevContacts) => [...prevContacts, newContact]);
        } catch (error) {
            console.error("Erro ao buscar a região:", error);
            setErrorMessage("Erro ao conectar com a API.");
        }
    };

    const removeContact = (phone: string) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.phone !== phone));
    };

    const toggleFavorite = (phone: string) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.phone === phone ? { ...contact, isFavorite: !contact.isFavorite } : contact
            )
        );
    };

    return (
        <ContactsContext.Provider value={{ contacts, addContact, removeContact, toggleFavorite }}>
            {children}
            {errorMessage && <AlertModal message={errorMessage} onClose={() => setErrorMessage(null)} />}
        </ContactsContext.Provider>
    );
};

export const useContacts = () => useContext(ContactsContext);
