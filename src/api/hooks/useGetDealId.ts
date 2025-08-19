import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiFactory } from '../apiFactory';
import { UserService } from '../services/userService';
import ErrorAlert from "../../components/ErrorAlert";
import useLocalStorage, {AUTH_TOKEN_KEY} from "../../hooks/useLocalStorage";

const fetchDealById = async (dealId: string | undefined) => {
  if (dealId) {
    try {
      const apiService = ApiFactory.createApiService();
      const personService = new UserService(apiService);
      return await personService.getDealId(dealId);
    } catch (e) {
      ErrorAlert("Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
      throw e; // Ensure the error propagates to the query for proper handling
    }
  }
  return null;
};

export const useGetDealId = (dealId: string | undefined) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [_, setName] = useLocalStorage(AUTH_TOKEN_KEY, '');

  const query = useQuery({
    queryKey: ['useGetDealId', dealId],
    queryFn: () => fetchDealById(dealId),
    enabled: !!dealId,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  useEffect(() => {
    if (dealId && query.isFetched && !query.data) {
      setName('')
    }
  }, [dealId, query.isFetched, query.data, navigate, setName]);

  return query;
};
