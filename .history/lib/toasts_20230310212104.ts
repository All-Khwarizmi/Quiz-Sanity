import { toast } from 'react-toastify';

export const goodToast = () => {
  return toast.success('🦄 ¡Vaaaaaamos!', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
export const badToast = () => {
  return toast.error('🥵 Pas si vite!', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
