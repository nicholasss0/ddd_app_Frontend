"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useContacts } from "@/context/ContactsContext";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Link from "next/link";

const AddContactPage = () => {
    const { addContact } = useContacts();
    const router = useRouter();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleAddContact = async () => {
        await addContact({ name, phone, address });
        router.push("/contacts");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-gray-800">Adicionar Contato</h1>
            <div className="mt-6 flex flex-col gap-4">
                <InputField value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome Completo" />
                <InputField value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" />
                <InputField value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Endereço" />
                <Button type="button" label="Salvar Contato" onClick={handleAddContact} />
            </div>
            <div className="mt-4">
                <Link href="/contacts">
                    <Button type="button" label="Ver Contatos" />
                </Link>
            </div>
        </div>
    );
};

export default AddContactPage;
