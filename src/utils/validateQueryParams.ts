import {Category} from "../pages/lendingPage/components/CreditForm";
import {QUERY_PARAMS} from "../constants/queryParams";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

type QueryParam = string | number | null;

const validateCategory = (category: QueryParam): boolean => {
  return Object.values(Category).includes(category as Category);
};

const validatePositiveNumber = (value: QueryParam): boolean => {
  return value !== null && !isNaN(Number(value)) && Number(value) > 0;
};

const validateDeposit = (deposit: QueryParam, creditAmount = 0): boolean => {
  return (
    deposit === null ||
    (typeof deposit === 'number' && deposit >= 0 && deposit <= (creditAmount || 0) - 500)
  );
};

export const validateQueryParams = (queryParams: URLSearchParams): ValidationResult => {
  const errors: string[] = [];

  // Validate category
  const category = queryParams.get(QUERY_PARAMS.CATEGORY);
  if (!validateCategory(category)) {
    errors.push('Invalid category.');
  }

  // Validate creditAmount
  const creditAmount = Number(queryParams.get(QUERY_PARAMS.CREDIT_AMOUNT));
  if (!validatePositiveNumber(creditAmount)) {
    errors.push('Invalid credit amount.');
  }

  // Validate duration
  const duration = queryParams.get(QUERY_PARAMS.DURATION);
  if (!validatePositiveNumber(duration)) {
    errors.push('Invalid duration.');
  }

  // Validate deposit
  const deposit = queryParams.get(QUERY_PARAMS.DEPOSIT);
  if (!validateDeposit(deposit, creditAmount)) {
    errors.push('Invalid deposit.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
