interface TabContentProps {
  activeTab: string;
}

export default function TabContent({ activeTab }: TabContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
            <p>This is the home content.</p>
          </div>
        );
      case 'about':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p>This is the about content.</p>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p>This is the contact content.</p>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return <div className="p-4">{renderContent()}</div>;
} 