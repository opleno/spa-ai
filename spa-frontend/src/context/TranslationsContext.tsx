'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { en } from '@/translations/en';
import { es } from '@/translations/es';
import { fr } from '@/translations/fr';

const translations = { en, es, fr };
type Locale = keyof typeof translations;

interface TranslationsContextType {
  t: (key: string) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const TranslationsContext = createContext<TranslationsContextType | null>(null);

export function TranslationsProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale) setLocale(savedLocale);
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[locale];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <TranslationsContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </TranslationsContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationsContext);
  if (!context) throw new Error('useTranslations must be used within TranslationsProvider');
  return context;
} 