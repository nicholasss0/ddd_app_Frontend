type DeleteButtonProps = {
    onClick: () => void;
};

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
            Excluir
        </button>
    );
};

export default DeleteButton;
