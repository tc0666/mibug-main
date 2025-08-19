import React, {useEffect, useState} from 'react';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import NavigationButtons from '../../components/NavigationButtons';
import { FormData as StepFormData } from '../../types/FormData';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  generateUtilityClasses,
  Theme,
  Typography,
} from '@mui/material';
import StepperProgress from '../../components/StepperProgress';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Brand from './components/Brand';
import LoadingState from '../../components/LoadingState';
import {Step, useMultiStepForm} from "../../hooks/useMultiStepForm";
import {useCreateDealWithUser} from "../../api/hooks/useCreateDealWithUser";
import {validateQueryParams} from "../../utils/validateQueryParams";
import {QUERY_PARAMS} from "../../constants/queryParams";
import schufa from "../../icons/schufa.svg";
import {parseQueryParamToNumber} from "../../utils/parseQueryParamToNumber";
import DelayingStep from "./DelayingStep";
import {Category} from "./StartStep";
import PersonalInfo from "./PersonalInfo";
import {UpdatePersonData, useUpdateUser} from "../../api/hooks/useUpdateUser";
import {useUploadFiles} from "../../api/hooks/useUploadFiles";
import {useGetDealId} from "../../api/hooks/useGetDealId";
import LoadingButton from '@mui/lab/LoadingButton';
import dayjs from 'dayjs';

const classes = generateUtilityClasses('MultiStep', [
  'root',
  'title',
  'accordion',
  'subtitle',
  'description',
  'form',
  'footer',
  'titleWrap',
  'button',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    boxSizing: 'inherit',
    maxWidth: '532px',
    margin: '0 auto',
    paddingTop: "56px",
    [theme.breakpoints.down(650)]: {
      padding: '0 32px',
    },
    [theme.breakpoints.down(550)]: {
      padding: '0',
    },
  },
  [`& .${classes.form}`]: {
    marginTop: "32px",
    [theme.breakpoints.down(550)]: {
      padding: '24px 16px',
    },
  },
  [`& .${classes.subtitle}`]: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '28px',
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif, helvetica, arial',
    letterSpacing: '0.00938em',
  },
  [`& .${classes.description}`]: {
    font: 'inherit',
    letterSpacing: '0.03rem',
    fontSize: "13px",
    color: '#3E3E3E',
    lineHeight: "20px",
  },
  [`& .${classes.title}`]: {
    margin: '0px',
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1.25rem',
    fontWeight: 700,
    flex: 3,
    letterSpacing: '0rem',
    lineHeight: '1.75rem',
    marginBottom: '16px',
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.titleWrap}`]: {
    display: "flex",
    alignItems: "normal",
  },
  [`& .${classes.accordion}`]: {
    opacity: 1,
    transform: 'none',
    transition:
      'opacity 177ms cubic-bezier(0.4, 0, 0.2, 1), transform 118ms cubic-bezier(0.4, 0, 0.2, 1)',
    marginBottom: '16px !important',
    backgroundColor: 'transparent',
    '& svg': {
      color: theme.palette.primary.main,
    },
    '::before': {
      position: 'unset',
    },
  },
  [`& .${classes.button}`]: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    "&:disabled": {
      color: "#3E3E3E",
      backgroundColor: "#ccc",
      cursor: "no-drop",
    },
  },
});

const additionalInfo: Step[] = [
  {
    title: 'Persönliche Angaben',
    subtitle: null,
    description: null,
    content: <PersonalInfo />,
  },
];

const steps: Step[] = [
  {
    title: 'Persönliche Angaben',
    icon: schufa,
    subtitle: null,
    description: null,
    content: <Step1 />,
  },
  {
    title: 'Beruf',
    subtitle: 'Warum benötigen wir diese Information?',
    description:
      'Wenn Sie einer bestimmten Berufsgruppe angehören, profitieren Sie von Sonderkonditionen wie niedrigen Zinssätzen, hohen Kreditsummen oder langen Laufzeiten.',
    content: <Step2 />,
  },
  {
    title: 'Haushalt',
    subtitle: 'Warum benötigen wir diese Information?',
    description:
      'Damit Sie einen Kredit erhalten, müssen Sie über ein regelmäßiges und bestenfalls gleich bleibendes Einkommen verfügen.',
    content: <Step3 />,
  },
  {
    title: 'Einkommen',
    subtitle: 'Warum benötigen wir diese Information?',
    description:
      'Damit Sie einen Kredit erhalten, müssen Sie über ein regelmäßiges und bestenfalls gleich bleibendes Einkommen verfügen.',
    content: <Step4 />,
  },
  {
    title: 'Ausgaben',
    subtitle: 'Warum benötigen wir diese Information?',
    description:
      'Mit den Informationen zu Ihren Ausgaben berechnen wir Ihr frei verfügbares Einkommen und ermitteln somit passende Kreditangebote.',
    content: <Step5 />,
  },
  {
    title: 'Kontaktdaten',
    subtitle: 'Warum benötigen wir diese Information?',
    description:
      'Nur mit den Angaben zu Ihrer Person ermitteln wir das bestmögliche Angebot für Sie. Dabei brauchen Sie sich keine Sorgen machen, denn Ihre Informationen werden von uns vertraulich behandelt und verschlüsselt übermittelt.',
    content: <Step6 />,
  },
  {
    title: 'Aktuelle Wohnanschrift',
    subtitle: null,
    description: null,
    content: <Step7 />,
  },
];

const defaultValues: StepFormData = {
  files: [],
  income: '',
  firstName: '',
  city: '',
  street: '',
  homeNumber: '',
  livingSituation: 'PROPERTY',
  familyStatus: 'SINGLE',
  professionalGroup: 'EMPLOYEE',
  rentIncludingHeating: '',
  country: 'germany',
  lastName: '',
  phone: '',
  zipCode: '',
  email: '',
  gender: 'Herr',
  consent: false,
  date: null,
  residentSince: null,
  category: null,
  creditAmount: 20000,
  duration: null,
  deposit: 0,
  birthday: null,
  birthplace: '',
  nationality: 'DE',
};

const Index: React.FC = () => {
  const location = useLocation();
  const [isDelayingStep, setIsDelayingStep] = useState(false);
  const { dealId } = useParams();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get(QUERY_PARAMS.CATEGORY) ?? Category.FREIE_VERWENDUNG;
  const duration = queryParams.get(QUERY_PARAMS.DURATION) ?? '84';
  const detectSiteDeal = queryParams.get(QUERY_PARAMS.BACK_URL) ?? '';
  const deposit = parseQueryParamToNumber(queryParams.get(QUERY_PARAMS.DEPOSIT));
  const creditAmount = parseQueryParamToNumber(queryParams.get(QUERY_PARAMS.CREDIT_AMOUNT) ?? 20000);
  const { data } = useGetDealId(dealId);

  const {
    currentStep,
    methods,
    isDirty,
    handleNextStep,
    handlePrevStep,
    isDelaying,
    delay,
  } = useMultiStepForm(steps, {
    ...defaultValues,
    category,
    duration,
    deposit,
    creditAmount,
    ...data,
  });
  const { createDealWithPerson, isCreating } = useCreateDealWithUser();
  const navigate = useNavigate();
  const { updatePerson, isPending: isUpdating } = useUpdateUser(data?.personId);
  const { uploadFiles, isPending: isUploading } = useUploadFiles(dealId);

  useEffect(() => {
    delay(2000);
    const queryParams = new URLSearchParams(location.search);

    const { isValid, errors } = validateQueryParams(queryParams);
    if (!isValid) {
      console.info(errors.join(', '));
    }
  }, [delay, location.search]);

  const updatePersonAndUploadFiles = async (data: StepFormData, dealId: string) => {
    const formattedDate = dayjs(data.birthday).isValid()
      ? dayjs(data.birthday).format('YYYY-MM-DD')
      : '';
    const personPayload = {
      birthday: formattedDate,
      birthplace: data.birthplace,
      nationality: data.nationality,
    } as UpdatePersonData;

    await updatePerson(personPayload);
    const formData = new FormData();
    data.files?.forEach((file: File) => formData.append('file', file));

    if(data.files?.length) {
      await uploadFiles(formData);
    }
  };

  const getHostnameFromUrl = (url: string): string => {
    try {
      const newUrl = new URL(url);
      return newUrl.hostname;
    } catch (error) {
      return 'Homepage';
    }
  }

  const createDealWithPersonAndNavigate = async (data: StepFormData) => {
    const payload = {
      ...data,
      residentSince: dayjs(data.date).isValid() ? dayjs(data?.residentSince).format('YYYY') : '',
      date: dayjs(data.date).isValid() ? dayjs(data?.date).format('YYYY-MM') : '',
    };

    // 1) Create the deal using existing backend
    const response = await createDealWithPerson(payload);

    // 2) Mirror into admin CRM (best-effort; ignore failures)
    try {
      // Translate enum codes to the exact German labels the customer saw in the form
      const familyStatusMap: Record<string, string> = { SINGLE: 'ledig', MARRIED: 'verheiratet', WIDOWED: 'verwitwet', DIVORCED: 'geschieden' };
      const livingSituationMap: Record<string, string> = {
        RENT: 'zur Miete', OWN: 'im Wohneigentum', // legacy
        RENTING: 'zur Miete', RENTFREE: 'mietfrei', PARENTS: 'bei den Eltern', PROPERTY: 'im Wohneigentum'
      };
      const genderMap: Record<string, string> = { FEMALE: 'Frau', MALE: 'Herr', Frau: 'Frau', Herr: 'Herr' };
      const countryMap: Record<string, string> = { DE: 'Deutschland', AT: 'Österreich', CH: 'Schweiz', germany: 'Deutschland', austria: 'Österreich', swiss: 'Schweiz' };
      const professionalGroupMap: Record<string, string> = {
        EMPLOYEE: 'Angestellte/r', EMPLOYEE_REDUCED_HOURS: 'Angestellte/r in Kurzarbeit', WORKER: 'Arbeiter/in',
        EMPLOYEE_PUBLIC_SERVICE: 'Angestellte/r im öffent. Dienst', CRAFTSMAN: 'Facharbeiter/in', MANAGER: 'Leitende/r Angestellte/r',
        RETIREE: 'Rentner/in', PENSIONER: 'Pensionär/in', EMPLOYEE_IN_PARENTAL_LEAVE: 'Angestellte/r in Elternzeit',
        EMPLOYEE_TEMPORARY_WORK: 'Angestellte/r über Zeitarbeitsfirma', EMPLOYEE_ABROAD: 'Angestellte/r im Ausland', EMPLOYEE_DOCTOR: 'Angestelltes ärztliches Fachpersonal',
        EMPLOYEE_MINIJOB: 'Angestellte/r (Minijob 450 EUR Basis)', EMPLOYEE_SICK: 'Angestellte/r (im Krankenstand / Krankengeldbezug)',
        WORKER_PUBLIC_SERVICE: 'Arbeiter/in im öffent. Dienst', WORKER_PARENTAL_LEAVE: 'Arbeiter/in in Elternzeit', UNEMPLOYED: 'Arbeitslose, Sozialhilfeempfänger, ohne Beschäftigung',
        APPRENTICE: 'Auszubildende/r', OFFICER_LOWER_SERVICE: 'Beamte/r im einfachen Dienst', OFFICER_UPPER_SERVICE: 'Beamte/r im gehobenen Dienst',
        OFFICER_HIGHER_SERVICE: 'Beamte/r im höheren Dienst', OFFICER_MIDDLE_SERVICE: 'Beamte/r im mittleren Dienst', HOUSEWIFE: 'Hausfrau/-mann'
      };

      const adminPayload = {
        ...payload,
        familyStatus: familyStatusMap[payload.familyStatus] || payload.familyStatus,
        livingSituation: livingSituationMap[payload.livingSituation] || payload.livingSituation,
        professionalGroup: professionalGroupMap[payload.professionalGroup] || payload.professionalGroup,
        gender: genderMap[payload.gender] || payload.gender,
        country: countryMap[payload.country] || payload.country,
      };

      fetch('/admin/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adminPayload),
      }).catch(() => {});
    } catch {}

    await delay(1000)
    if(response?.id) {
      console.log('Deal Created:', response);
      navigate(`/submission-confirmation/?ref=${response?.id}`);
    }
  };


  const onSubmit: SubmitHandler<StepFormData> = async (data: StepFormData) => {
    methods.handleSubmit(onSubmit);

    try {
      dealId ?
        await updatePersonAndUploadFiles(data, dealId)
        :
        await createDealWithPersonAndNavigate(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      methods.reset(data)
    }
  };

  const onNextStep = async () => {
    const valid = await methods.trigger();

    if (valid) {
      if(currentStep === 3) {
        await delayStep(4000)
        return
      }
      currentStep < steps.length - 1 ? handleNextStep?.() : onSubmit(methods.getValues())
    }
  };

  const onPrevStep = () => {
    handlePrevStep?.()
  };

  let currentStepData = dealId ? additionalInfo[0] : steps[currentStep];
  const totalSteps = dealId ? additionalInfo.length : steps.length;

  const delayStep = async (time: number) => {
    setIsDelayingStep(true);
    await new Promise(resolve => setTimeout(resolve, time));
    setIsDelayingStep(false);
    handleNextStep?.();
  };

  if (isDelayingStep) {
    const dealInfo = methods.getValues();
    return (
      <Container maxWidth="sm">
        <DelayingStep dealInfo={dealInfo}/>
      </Container>
    );
  }

  return isDelaying ? (
      <LoadingState className={classes.root} sx={styles}/>
    ) : (
    <Box className={classes.root} sx={styles}>
          <Box className={classes.form}>
            <StepperProgress currentStep={currentStep} totalSteps={totalSteps} />

            {currentStep === 5 ? (
              <>
                <Typography variant="h4" gutterBottom className={classes.title}>
                  Fast geschafft! Gleich erhalten Sie Ihre Kreditangebote.
                </Typography>
                <Typography mb="16px" variant="subtitle1" className={classes.description}>
                  Dafür benötigen wir nur noch einige Angaben zu Ihrer Person. Als exklusiven
                  Vorteil schenken wir Ihnen die erste Rate – bis zu 1.000,00 €!
                </Typography>
              </>
            ) : null}

            <Box className={classes.titleWrap}>
              {currentStepData?.title ? (
                <Typography variant="h4" gutterBottom className={classes.title}>
                  {currentStepData.title}
                </Typography>
              ) : null}
              {currentStepData?.icon ? (
                <Box flex={1.05}>
                  <img src={currentStepData?.icon} alt="icon" />
                </Box>
              ) : null}
            </Box>

            {currentStepData?.subtitle ? (
              <Accordion disableGutters elevation={0} className={classes.accordion}>
                <AccordionSummary sx={{ p: 0 }} expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1" className={classes.subtitle}>
                    {currentStepData.subtitle}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <Typography variant="subtitle2" className={classes.description}>
                    {currentStepData.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ) : null}

            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                {React.isValidElement(currentStepData.content) ? (
                  React.cloneElement(currentStepData.content, {
                    data
                  })
                ) : null}
                {dealId ? (
                  <LoadingButton loadingPosition="start" loading={isUploading || isUpdating} disabled={!isDirty} className={classes.button} type="submit">
                    Weiter
                  </LoadingButton>
                ) : (
                  <NavigationButtons
                    currentStep={currentStep}
                    totalSteps={steps.length}
                    handleNextStep={onNextStep}
                    handlePrevStep={onPrevStep}
                    disabled={isCreating || isUpdating || isUploading}
                  />
                )}
              </form>
            </FormProvider>
          </Box>
          <Brand />
        </Box>
      )
};

export default Index;
