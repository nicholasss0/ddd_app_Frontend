"use client";

import { useState } from "react";

type AlertModalProps = {
    message: string;
    onClose: () => void;
};

const AlertModal = ({ message, onClose }: AlertModalProps) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md text-center">
                <p className="text-lg text-red-600">{message}</p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    onClick={onClose}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default AlertModal;
