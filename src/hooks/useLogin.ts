import { useMutation } from '@tanstack/react-query';
import {ApiFactory} from "../api/apiFactory";
import ErrorAlert from "../components/ErrorAlert";
import useLocalStorage, {AUTH_TOKEN_KEY} from "./useLocalStorage";

interface LoginResponse {
  token: string;
  id: string;
  name: string;
  email: string;
  dealId: string;
}

export const useLogin = () => {
  const apiService = ApiFactory.createApiService();
  // eslint-disable-next-line
  const [name, setName] = useLocalStorage(AUTH_TOKEN_KEY, '');

  const { mutateAsync, isPending, isSuccess, data, error } = useMutation<LoginResponse, Error, { email: string; pinCode: string }>({
    mutationFn: async (credentials) => {
      const response = await apiService.login(credentials);
      setName(response.token)
      return response;
    },
    onError: (error) => {
      ErrorAlert('Login fehlgeschlagen. Bitte überprüfen Sie Ihre Anmeldedaten und versuchen Sie es erneut.');
      throw error;
    },
  });

  const login = async (email: string, pinCode: string) => {
    if (!email || !pinCode) {
      console.warn('E-Mail und Passwort sind erforderlich, um sich anzumelden.');
      return;
    }
    return mutateAsync({ email, pinCode });
  };

  return { login, isPending, isSuccess, data, error };
};
