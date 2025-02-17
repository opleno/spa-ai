import { useTranslations } from '@/context/TranslationsContext';

interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const { t } = useTranslations();

  const renderContent = () => {
    return (
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-[#6d0858] mb-6">
          {t(`content.${activeTab}.title`)}
        </h1>
        <div className="bg-white/60 rounded-xl p-6 shadow-lg backdrop-blur-sm">
          <p className="text-lg leading-relaxed">
            {t(`content.${activeTab}.description`)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 px-4 py-6 max-w-4xl mx-auto">
      {renderContent()}
    </div>
  );
} 