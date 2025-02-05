// "use client";

// import { useState } from "react";
// import InputField from "./InputField";
// import Button from "./Button";
// import axios from "axios";

// interface FormProps {
//     setResult: (result: string | null) => void;
//     setError: (error: string | null) => void;
// }

// const Form = ({ setResult, setError }: FormProps) => {
//     const [phoneNumber, setPhoneNumber] = useState("");

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setResult(null);
//         setError(null);

//         if (phoneNumber.length < 2) {
//             setError("Por favor, insira um número válido!");
//             return;
//         }

//         try {
//             const response = await axios.get(`http://127.0.0.1:3003/region/${phoneNumber}`);
//             const data = response.data;

//             if (data && data.region) {
//                 setResult(`DDD ${data.ddd}: ${data.region}`);
//             } else {
//                 setError("DDD não encontrado.");
//             }
//         } catch (err) {
//             console.error(err);
//             setError("Erro ao consultar a API.");
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center gap-4">
//             <InputField
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 placeholder="Digite o número (ex: 11912345678)"
//             />
//             <Button type="submit" label="Consultar" />
//         </form>
//     );
// };

// export default Form;
