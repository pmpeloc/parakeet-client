import type { NextPage } from 'next';
import { Card, CardHeader, Grid } from '@mui/material';
import { MainLayout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <MainLayout title='Inicio - Parakeet'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />
            {/* <NewEntry /> */}
            {/* <EntryList status='pending' /> */}
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' />
            {/* <EntryList status='in-progress' /> */}
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
            {/* <EntryList status='finished' /> */}
          </Card>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default HomePage;
