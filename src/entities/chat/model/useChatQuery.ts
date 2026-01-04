import { useQuery } from '@tanstack/react-query';

import type { IMessage } from '@/entities/chat/model';

export const useChatQuery = () => {
  return useQuery<IMessage[]>({
    queryKey: ['messages'],
    queryFn: () => [],
    staleTime: Infinity,
    initialData: [],
  });
};
