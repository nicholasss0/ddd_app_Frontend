interface ButtonProps {
    type: "button" | "submit" | "reset";
    label: string;
    onClick?: () => void;
}

const Button = ({ type, label, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
            {label}
        </button>
    );
};

export default Button;
