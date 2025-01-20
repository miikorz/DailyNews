import React from 'react';

interface ModalProps {
  onSubmit: () => void;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  message,
  title,
}) => {
  if (!isOpen) return null;

  const handleOnSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &#x2715;
        </button>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-700">{message}</p>
        <div className="flex w-full justify-center">
          <button
            className="mt-4 px-4 py-2 bg-red-400 text-white rounded-lg"
            onClick={handleOnSubmit}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
