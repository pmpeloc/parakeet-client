import type { NextPage } from 'next';
import { Card as CardMui, CardHeader, Grid } from '@mui/material';
import { MainLayout } from '../components/layouts';
import { Card } from '../components/ui';
import { parseToNumber } from '../utils';
import * as dataJson from '../mock/data.json';

const dataMock = parseToNumber(dataJson.products);

const HomePage: NextPage = () => {
  return (
    <MainLayout title='Inicio - Parakeet'>
      <Grid container spacing={2}>
        {dataMock.map((product, index) => (
          <Grid key={index} item xs={12} sm={4} md={3}>
            <Card data={product} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default HomePage;
