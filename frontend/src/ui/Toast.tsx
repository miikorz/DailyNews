import React from 'react';
import { useToast } from '../context/ToastContext';

const Toast: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed w-full flex justify-center top-0 mt-4 mr-4 z-50 space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`transform transition-all duration-300 ease-in-out ${
            toast.type === 'success'
              ? 'bg-green-300'
              : toast.type === 'error'
                ? 'bg-red-300'
                : 'bg-rose-500'
          } p-4 rounded shadow-lg text-white opacity-0 translate-y-4`}
          style={{
            animation: 'fadeIn 0.5s forwards, fadeOut 0.5s 2.5s forwards',
          }}
        >
          <div className="flex justify-between items-center">
            <span>{toast.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
