import { useMutation } from '@tanstack/react-query';
import { ApiFactory } from '../apiFactory';
import { UserService } from '../services/userService';
import ErrorAlert from "../../components/ErrorAlert";

interface FileUploadResponse {
  success: boolean;
}

export const useUploadFiles = (personId: string | undefined) => {
  const apiService = ApiFactory.createApiService();
  const personService = new UserService(apiService);

  const { mutateAsync, isPending } = useMutation<FileUploadResponse, Error, FormData>({
    mutationFn: async (file: FormData) => {
      if (!personId) {
        throw new Error('Person ID is required to upload files.');
      }
      return await personService.uploadFilesForDeal(file, personId);
    },
    onError: (error) => {
      console.error({ error });
      ErrorAlert('Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    },
    onSuccess: () => {
      ErrorAlert('Ihre Datei wurde erfolgreich aktualisiert.', "success")
    }
  });

  const uploadFiles = async (file: FormData) => {
    if (!personId) {
      console.warn('Person ID is missing. Cannot upload files.');
      return;
    }
    return mutateAsync(file);
  };

  return { uploadFiles, isPending };
};
