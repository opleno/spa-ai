'use client';
import { useState } from 'react';
import TabNavigation from '@/components/TabNavigation';
import TabContent from '@/components/TabContent';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="container mx-auto px-4">
      <TabNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </div>
  );
} 