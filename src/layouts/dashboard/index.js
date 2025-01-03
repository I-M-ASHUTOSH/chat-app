import React from 'react';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SideBar from './SideBar';

const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Stack direction={'row'}>
        {/* imported from material UI*/}
        {/* side bar import */}
        <SideBar />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
