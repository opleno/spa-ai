import Image from "next/image";
import { useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TabNavigation({ tabs, activeTab, setActiveTab }: TabNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 rounded-xl bg-white/40 p-1 shadow-lg backdrop-blur-sm">
      <div className="flex w-full md:w-auto justify-between items-center">
        <Image
          src="/favicon/android-chrome-192x192.png"
          alt="Spanish Public Academy Logo"
          width={112}
          height={112}
          className="w-20 md:w-28 h-20 md:h-28 object-contain ml-2"
          priority
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#6d0858] mr-2"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-1 pb-2 md:pb-0`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setIsMenuOpen(false);
            }}
            className={`
              px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 w-full md:w-auto
              ${activeTab === tab.id
                ? 'bg-[#e76100] text-white shadow-md'
                : 'text-[#6d0858] hover:bg-white/60'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
} 