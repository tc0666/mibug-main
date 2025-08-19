import { useState, useEffect, useMemo, useCallback, ReactElement } from 'react';
import {useForm, useFormState} from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import {useDelay} from "./useDelay";
import {FormData} from "../types/FormData";
import {UpdatePersonData} from "../api/hooks/useUpdateUser";


interface StepProps {
  data?: UpdatePersonData;
}

export interface Step {
  title: string;
  icon?: string;
  subtitle: string | null;
  description: string | null;
  content: ReactElement<StepProps>;
}

export const useMultiStepForm = (
  steps: Step[],
  defaultValues: FormData
) => {
  const [currentStep, setCurrentStep] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const methods = useForm<FormData>({ defaultValues, mode: 'onSubmit' });
  const { isDelaying, delay } = useDelay();
  const { isDirty } = useFormState({ control: methods?.control });
  const queryParams = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const entries: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      entries[key] = value;
    });
    return entries;
  }, [location.search]);

  const setQueryParam = useCallback(
    (key: string, value: string) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set(key, value);
      navigate({ search: searchParams.toString() }, { replace: true });
    },
    [location.search, navigate]
  );

  useEffect(() => {
    const step = parseInt(queryParams.currentStep || '0', 10);
    if (!isNaN(step) && step >= 0 && step < steps.length) {
      setCurrentStep(step);
    }
  }, [queryParams.currentStep, steps.length]);

  const handleNextStep = async () => {
    const valid = await methods.trigger();
    console.log('handleNextStep?.();', valid)
    if (valid) {
      delay(200)
      const nextStep = currentStep + 1;
      if (nextStep < steps.length) {
        setCurrentStep(nextStep);
        setQueryParam('currentStep', nextStep.toString());
      }
    }
  };

  const handlePrevStep = () => {
    delay(150)
    const prevStep = currentStep - 1;
    if (prevStep >= 0) {
      setCurrentStep(prevStep);
      setQueryParam('currentStep', prevStep.toString());
    } else {
      navigate('/');
    }
  };

  return {
    queryParams,
    currentStep,
    setCurrentStep,
    methods,
    handleNextStep,
    handlePrevStep,
    isDelaying,
    delay,
    isDirty,
  };
};
