import { useMutation } from '@tanstack/react-query';
import {ApiFactory} from "../apiFactory";
import {UserService} from "../services/userService";
import ErrorAlert from "../../components/ErrorAlert";

export interface UpdatePersonData {
  birthday: string;
  birthplace: string;
}

export const useUpdateUser = (userId: string | undefined | null) => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: UpdatePersonData) => {
      if(userId) {
        const apiService = ApiFactory.createApiService();
        const personService = new UserService(apiService);
        return await personService.updateUserById(userId, data);
      }
    },
    onError: (error) => {
      ErrorAlert('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
      console.error({ error });
    },
    onSuccess: () => {
      ErrorAlert('Ihre Daten wurden erfolgreich aktualisiert.', "success")
    }
  });

  return { updatePerson: mutateAsync, isPending };
};
