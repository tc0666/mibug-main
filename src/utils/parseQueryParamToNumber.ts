export const parseQueryParamToNumber = (value: string | null | number, defaultValue: number = 0): number =>
   value && !isNaN(+value) ? Number(value) : defaultValue;
