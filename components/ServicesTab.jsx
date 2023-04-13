import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import Link from 'next/link';
import Overview from './services/Overview';

export default function ServicesTab() {
  const data = [
    {
      label: 'Overview',
      value: 'html',
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
      conponent: <Overview />,
    },
    {
      label: 'Our services',
      value: 'react',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      conponent: <Overview />,
    },
    {
      label: 'Our Team',
      value: 'vue',
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      conponent: <Overview />,
    },
    {
      label: 'Success Stories',
      value: 'angular',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      conponent: <Overview />,
    },
    {
      label: 'Articles/Blog',
      value: 'svelte',
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
      conponent: <Overview />,
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="border border-opacity-25 border-l-0 border-r-0 overflow-hidden w-full border-gray-200 dark:border-gray-700">
        <div className="flex container !w-full !justify-between">
          {data.map((tab, index) => (
            <li
              key={index}
              className={`inline-flex p-2 text-lg  font-NeuePlakRegular    rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group ${
                index === activeTab
                  ? 'text-[#e31e67] !border-b-2 !border-fuchsia'
                  : ''
              } border-transparent rounded-t-lg  uppercase tracking-[3.6px] group`}
              onClick={() => setActiveTab(index)}
            >
              <Link href="#">{tab.label}</Link>
            </li>
          ))}
        </div>
      </div>
      <div className="mt-4 container">
        {data.map((tab, index) => (
          <div key={index} hidden={index !== activeTab}>
            {tab.conponent}
          </div>
        ))}
      </div>
    </div>
  );
}
