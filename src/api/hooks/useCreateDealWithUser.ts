import { useState } from 'react';
import {ApiFactory} from "../apiFactory";
import {UserService} from "../services/userService";
import {FormData as StepFormData} from "../../types/FormData";
import ErrorAlert from "../../components/ErrorAlert";

export const useCreateDealWithUser = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiService = ApiFactory.createApiService();
  const personService = new UserService(apiService);

  const createDealWithPerson = async (
    dealPayload: StepFormData,
  ) => {
    setIsCreating(true);
    setError(null);

    try {
      return await personService.createDealWithPerson(dealPayload);
    } catch (err: any) {
      setError((err as Error).message);
      err?.response?.data?.statusCode === 409 ? ErrorAlert(err.response.data.message) : ErrorAlert('Ein unerwarteter' +
        ' Fehler ist' +
        ' aufgetreten. Bitte versuchen' +
          ' Sie es erneut.')
      return  err;
    } finally {
      setIsCreating(false);
    }
  };

  return { createDealWithPerson, isCreating, error };
};
