import { useState, useCallback } from 'react';

export const useDelay = () => {
  const [isDelaying, setIsDelaying] = useState<boolean>(false);

  const delay = useCallback(async (ms: number): Promise<void> => {
    setIsDelaying(true);
    await new Promise((resolve) => setTimeout(resolve, ms));
    setIsDelaying(false);
  }, []);

  return { isDelaying, delay };
};
