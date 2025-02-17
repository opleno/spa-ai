'use client';
import { useTranslations } from '@/context/TranslationsContext';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { 
      code: 'en', 
      flag: '/flags/gb.svg',
      label: 'EN'
    },
    { 
      code: 'es', 
      flag: '/flags/es.svg',
      label: 'ES'
    },
    { 
      code: 'fr', 
      flag: '/flags/fr.svg',
      label: 'FR'
    }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale as 'en' | 'es' | 'fr');
    localStorage.setItem('locale', newLocale);
    setIsOpen(false);
  };

  const currentFlag = languages.find(lang => lang.code === locale)?.flag;
  const currentLabel = languages.find(lang => lang.code === locale)?.label;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 hover:bg-white/80 transition-all duration-200"
        title="Change language"
      >
        <Image
          src={currentFlag || '/flags/gb.svg'}
          alt={`${locale} flag`}
          width={24}
          height={24}
          className="rounded-sm"
        />
        <span className="text-[#6d0858] text-sm font-medium">{currentLabel}</span>
        <svg 
          className={`w-4 h-4 text-[#6d0858] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-lg overflow-hidden min-w-[120px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors duration-200
                ${locale === lang.code ? 'bg-gray-50' : ''}`}
            >
              <Image
                src={lang.flag}
                alt={`${lang.code} flag`}
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span className="text-[#6d0858] text-sm font-medium">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 