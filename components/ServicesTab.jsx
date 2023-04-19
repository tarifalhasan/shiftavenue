import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { useState } from 'react';
import Link from 'next/link';
import Overview from './services/Overview';

export default function ServicesTab() {
  const data = [
    {
      label: 'Overview',

      conponent: <Overview />,
    },
    {
      label: 'Our services',

      conponent: <Overview />,
    },
    {
      label: 'Our Team',
      value: 'vue',

      conponent: <Overview />,
    },
    {
      label: 'Success Stories',
      value: 'angular',

      conponent: <Overview />,
    },
    {
      label: 'Articles/Blog',

      conponent: <Overview />,
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="border border-opacity-25 border-l-0 border-r-0 overflow-hidden w-full border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-7 container !w-full !justify-between">
          {data.map((tab, index) => (
            <li
              key={index}
              className={`inline-flex p-2 text-xs  md:text-lg  font-NeuePlakRegular    rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group ${
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
