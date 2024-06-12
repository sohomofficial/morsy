import { morseCodeMap } from '@/constants';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const textToMorse = (text: string): string => {
  return text
    .toUpperCase()
    .split('')
    .map((char) => morseCodeMap[char] || '')
    .join(' ');
};

export const morseToText = (morse: string): string => {
  const morseCodeMapReversed: { [key: string]: string } = Object.fromEntries(
    Object.entries(morseCodeMap).map(([key, value]) => [value, key])
  );
  return morse
    .split(' ')
    .map((code) => morseCodeMapReversed[code] || '')
    .join('');
};
