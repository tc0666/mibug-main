import { useMutation } from '@tanstack/react-query';
import {ApiFactory} from "../api/apiFactory";
import ErrorAlert from "../components/ErrorAlert";

export const useForgotPassword = () => {
  const apiService = ApiFactory.createApiService();
  // eslint-disable-next-line

  const { mutateAsync, isPending, isSuccess, data, isError } = useMutation<unknown, Error, { email: string; }>({
    mutationFn: async (credentials) => {
      await apiService.forgotPassword(credentials);
      ErrorAlert('neues Passwort wurde erfolgreich gesendet', "success")
    },
    onError: (error: any) => {
      error?.response?.data?.statusCode === 401 ? ErrorAlert(error.response.data.message) : ErrorAlert('Ein passwort zurücksetzen' +
        ' Fehler ist' +
        ' aufgetreten. Bitte versuchen' +
        ' Sie es erneut.')

      return error
    },
  });

  const forgotPassword = async (email: string) => {
    if (!email) {
      console.warn('E-Mail und Passwort sind erforderlich, um sich anzumelden.');
      return;
    }
    return mutateAsync({ email });
  };

  return { forgotPassword, isPending, isSuccess, data, isError };
};
