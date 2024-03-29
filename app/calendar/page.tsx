"use client";

import React from 'react';
import type { Dayjs } from 'dayjs';
import { Calendar } from 'antd';
import Navbar from "@/components/ui/navbar";
import type { CalendarProps } from 'antd';


const App: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return <>
  <Navbar/>
  <Calendar onPanelChange={onPanelChange} />;
  </>
};

export default App;