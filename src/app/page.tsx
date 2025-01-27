"use client";

import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800">Bem-vindo à Agenda</h1>
      <p className="mt-4 text-gray-600">Escolha uma opção abaixo:</p>
      <div className="mt-6 flex flex-col gap-4">
        <Link href="/login" legacyBehavior>
          <a className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Login</a>
        </Link>
        <Link href="/add-contact" legacyBehavior>
          <a className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Adicionar Contato</a>
        </Link>
        <Link href="/contacts" legacyBehavior>
          <a className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">Listar Contatos</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;



// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// const HomePage = () => {
//   const router = useRouter();

//   useEffect(() => {
//     router.push("/login");
//   }, [router]);

//   return null; // ou uma mensagem de carregamento, se preferir
// };

// export default HomePage;


// "use client";

// import { useState } from "react";
// import InputField from "@/components/InputField";
// import Button from "@/components/Button";

// const HomePage = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [result, setResult] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setResult(null);
//     setError(null);

//     if (phoneNumber.length < 2) {
//       setError("Por favor, insira um número válido!");
//       return;
//     }

//     try {
//       const response = await fetch(`http://127.0.0.1:3003/region/${phoneNumber}`);
//       const data = await response.json();

//       if (data && data.region) {
//         setResult(`DDD ${data.ddd}: ${data.region}`);
//       } else {
//         setError("DDD não encontrado.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Erro ao consultar a API.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold text-gray-800">Consulta de Região por DDD</h1>
//       <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center gap-4">
//         <InputField
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           placeholder="Digite o número (ex: 11912345678)"
//         />
//         <Button type="submit" label="Consultar" />
//       </form>
//       <div className="mt-4 text-lg text-gray-700">
//         {result && <p>{result}</p>}
//         {error && <p className="text-red-500">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default HomePage;