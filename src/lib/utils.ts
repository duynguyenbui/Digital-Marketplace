import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'GBP' | 'VND' | 'BDT';
    notaion?: Intl.NumberFormatOptions['notation'];
  } = {}
) {
  const { currency = 'USD', notaion = 'compact' } = options;
  const numbericPrice = typeof price === 'string' ? parseFloat(price) : price;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    notation: notaion,
    maximumFractionDigits: 2,
  }).format(numbericPrice);
}
