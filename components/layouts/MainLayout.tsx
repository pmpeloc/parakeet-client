import { FC } from 'react';
import { Box } from '@mui/material';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ title = 'Parakeet', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
