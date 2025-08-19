import { useQuery } from '@tanstack/react-query';
import { ApiFactory } from '../apiFactory';
import { UserService } from '../services/userService';
import ErrorAlert from "../../components/ErrorAlert";

const fetchUserById = async (userId: string | null) => {
  if(userId) {
    try {
      const apiService = ApiFactory.createApiService();
      const personService = new UserService(apiService);
      return await personService.getUserId(userId);
    } catch (e) {
      ErrorAlert('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    }

  }
};

export const useGetUserId = (personId: string | null) => {
  return useQuery({
    queryKey: ['getPersonById', personId],
    queryFn: () => fetchUserById(personId),
    enabled: !!personId, // Ensures the query runs only if personId is truthy
    staleTime: 5 * 60 * 1000, // Keep data fresh for 5 minutes
    retry: 3, // Retry failed requests up to 3 times
  });
};
