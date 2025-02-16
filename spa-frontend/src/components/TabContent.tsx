interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#6d0858] mb-6">Welcome to Our Platform</h1>
            <div className="bg-white/60 rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <p className="text-lg leading-relaxed">
                This is the home content. We provide amazing services and solutions.
              </p>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#6d0858] mb-6">About Us</h1>
            <div className="bg-white/60 rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <p className="text-lg leading-relaxed">
                Learn about our mission and values. We're committed to excellence.
              </p>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#6d0858] mb-6">Contact Us</h1>
            <div className="bg-white/60 rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <p className="text-lg leading-relaxed">
                Get in touch with us. We'd love to hear from you.
              </p>
            </div>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="mt-8 px-4 py-6 max-w-4xl mx-auto">
      {renderContent()}
    </div>
  );
} 