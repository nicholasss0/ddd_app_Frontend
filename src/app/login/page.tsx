"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = () => {
        if (username === "admin" && password === "1234") {
            router.push("/contacts");
        } else {
            setError("Usuário ou senha inválidos!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-gray-800">Login</h1>
            <div className="mt-6 flex flex-col gap-4">
                <InputField value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" />
                <InputField value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="password" />
                <Button type="button" label="Entrar" onClick={handleLogin} />
                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default LoginPage;
