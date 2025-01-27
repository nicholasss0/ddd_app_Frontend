interface InputFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
}

const InputField = ({ value, onChange, placeholder, type = "text" }: InputFieldProps) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="p-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 w-64"
        />
    );
};

export default InputField;
