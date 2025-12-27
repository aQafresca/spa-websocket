import { useRouter } from '@tanstack/react-router';

export const useHandleClose = (FallbackTo: string) => {
  const router = useRouter();

  return () => {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: FallbackTo });
    }
  };
};
