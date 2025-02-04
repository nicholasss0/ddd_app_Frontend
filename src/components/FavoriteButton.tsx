"use client";

type FavoriteButtonProps = {
    isFavorite: boolean;
    onClick: () => void;
};

const FavoriteButton = ({ isFavorite, onClick }: FavoriteButtonProps) => {
    return (
        <button onClick={onClick} className="px-2 py-1 text-white rounded-md">
            {isFavorite ? (
                <span className="bg-yellow-500 px-2 py-1 rounded-md">★ Favorito</span>
            ) : (
                <span className="bg-gray-400 px-2 py-1 rounded-md">☆ Favoritar</span>
            )}
        </button>
    );
};

export default FavoriteButton;
