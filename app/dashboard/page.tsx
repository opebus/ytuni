import React from 'react';
import { Dashboard } from '@/components/home/dashboard';
import { cookies } from 'next/headers';

const page = () => {
  const layout = cookies().get('react-resizable-panels:layout');
  const collapsed = cookies().get('react-resizable-panels:collapsed');

  const defaultLayout =
    layout && layout.value !== 'undefined'
      ? JSON.parse(layout.value)
      : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== 'undefined'
      ? JSON.parse(collapsed.value)
      : undefined;
  return (
    <div className='h-screen hidden flex-col md:flex'>
      <Dashboard
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
      />
    </div>
  );
};

export default page;
