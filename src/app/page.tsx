"use client";

import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800">Bem-vindo à Agenda</h1>
      <div className="mt-6 flex flex-col gap-4">
        <Link href="/login" legacyBehavior>
          <a className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</a>
        </Link>
        <Link href="/register" legacyBehavior>
          <a className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Cadastrar Usuário</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

