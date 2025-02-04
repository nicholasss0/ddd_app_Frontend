"use client";

import { useState } from "react";
import { useContacts } from "@/context/ContactsContext";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import FavoriteButton from "@/components/FavoriteButton";

const ContactsPage = () => {
    const { contacts, removeContact, toggleFavorite } = useContacts();
    const [search, setSearch] = useState("");
    const [regionFilter, setRegionFilter] = useState("");
    const [showFavorites, setShowFavorites] = useState(false);

    // Filtra contatos pelo nome, região ou favoritos
    const filteredContacts = contacts.filter((contact) => {
        return (
            (search === "" || contact.name.toLowerCase().includes(search.toLowerCase())) &&
            (regionFilter === "" || contact.region === regionFilter) &&
            (!showFavorites || contact.isFavorite)
        );
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Lista de Contatos</h1>

            {/* Botões de Navegação */}
            <div className="flex gap-4 mb-6">
                <Link href="/login" className="p-1 h-7 w-10 text-xs bg-blue-600 hover:bg-blue-700 rounded">Login
                </Link>
                <Link href="/add-contact" className="p-1 h-7 text-xs bg-green-600 hover:bg-green-700 rounded">Adicionar Contato
                </Link>
            </div>

            {/* Barra de Pesquisa e Filtros */}
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Buscar por nome..."
                    className="px-4 py-2 text-gray-700 border rounded-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="px-4 py-2 text-gray-600 border rounded-md"
                    value={regionFilter}
                    onChange={(e) => setRegionFilter(e.target.value)}
                >
                    <option value="">Todas as regiões</option>
                    {[...new Set(contacts.map((c) => c.region))].map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
                <button
                    onClick={() => setShowFavorites(!showFavorites)}
                    className={`px-4 py-2 rounded-md ${showFavorites ? "bg-yellow-500 text-white" : "bg-gray-400 text-black"
                        }`}
                >
                    {showFavorites ? "Mostrar Todos" : "Favoritos"}
                </button>
            </div>

            {/* Tabela de Contatos */}
            {filteredContacts.length === 0 ? (
                <p className="mt-6 text-gray-600">Nenhum contato encontrado.</p>
            ) : (
                <table className="mt-6 border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-500">
                            <th className="border border-gray-300 px-4 py-2">Nome</th>
                            <th className="border border-gray-300 px-4 py-2">Telefone</th>
                            <th className="border border-gray-300 px-4 py-2">Endereço</th>
                            <th className="border border-gray-300 px-4 py-2">Região</th>
                            <th className="border border-gray-300 px-4 py-2">Favorito</th>
                            <th className="border border-gray-300 px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.map((contact, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 text-gray-700 px-4 py-2">{contact.name}</td>
                                <td className="border border-gray-300 text-gray-700 px-4 py-2">{contact.phone}</td>
                                <td className="border border-gray-300 text-gray-700 px-4 py-2">{contact.address}</td>
                                <td className="border border-gray-300 text-gray-700 px-4 py-2">{contact.region}</td>
                                <td className="border border-gray-300 text-gray-700">
                                    <FavoriteButton
                                        isFavorite={contact.isFavorite}
                                        onClick={() => toggleFavorite(contact.phone)}
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <DeleteButton onClick={() => removeContact(contact.phone)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ContactsPage;
