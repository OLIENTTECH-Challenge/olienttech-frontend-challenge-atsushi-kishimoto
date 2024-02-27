export const classNames = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const formatMoney = (amount: number): string => {
  return amount.toLocaleString();
};

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
};
