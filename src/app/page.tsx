"use client";

import { useState } from "react";
import Form from "@/components/Form";

const Home = () => {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800">Consulta de Região por DDD</h1>
      <Form setResult={setResult} setError={setError} />
      <div className="mt-4 text-lg text-gray-700">
        {result && <p>{result}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Home;
