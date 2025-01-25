"use client";

interface ButtonProps {
    type: "button" | "submit" | "reset";
    label: string;
}

const Button = ({ type, label }: ButtonProps) => {
    return (
        <button
            type={type}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
            {label}
        </button>
    );
};

export default Button;
