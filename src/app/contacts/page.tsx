"use client";

import { useContacts } from "@/context/ContactsContext";
import Link from "next/link";
import Button from "@/components/Button";
import DeleteButton from "@/components/DeleteButton";

const ContactsPage = () => {
    const { contacts, removeContact } = useContacts();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-gray-800">Lista de Contatos</h1>
            {contacts.length === 0 ? (
                <p className="mt-6 text-gray-600">Nenhum contato adicionado ainda.</p>
            ) : (
                <table className="mt-6 border-collapse text-gray-700 border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Nome</th>
                            <th className="border border-gray-300 px-4 py-2">Telefone</th>
                            <th className="border border-gray-300 px-4 py-2">Endereço</th>
                            <th className="border border-gray-300 px-4 py-2">Região</th>
                            <th className="border border-gray-300 px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{contact.phone}</td>
                                <td className="border border-gray-300 px-4 py-2">{contact.address}</td>
                                <td className="border border-gray-300 px-4 py-2">{contact.region}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <DeleteButton onClick={() => removeContact(contact.phone)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="mt-4 flex gap-4">
                <Link href="/add-contact">
                    <Button type="button" label="Adicionar Contato" />
                </Link>
                <Link href="/login">
                    <Button type="button" label="Logout" />
                </Link>
            </div>
        </div>
    );
};

export default ContactsPage;
