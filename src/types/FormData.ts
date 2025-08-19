export interface FormData {
  files?: File[];
  income: string;
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  nationality: string;
  email: string;
  detectSiteDeal?: string;
  phone: string;
  familyStatus: string;
  professionalGroup: string;
  livingSituation: string;
  rentIncludingHeating: string;
  country: string;
  zipCode: string;
  homeNumber: string;
  birthplace: string;
  gender: string;
  consent: boolean;
  date: null | string;
  residentSince: null | string;
  category: null | string,
  creditAmount: number,
  duration: null | string,
  birthday: null | string,
  deposit: number,
}
