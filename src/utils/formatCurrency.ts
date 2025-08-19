export const formatCurrency = (amount: number = 0): string => {
  const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });

  return formatter.format(amount);
};
