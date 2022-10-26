import { FC } from 'react';
import {
  Card as CardMui,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

import { IProduct } from '../../interfaces';

interface Props {
  data: IProduct;
}

export const Card: FC<Props> = ({ data }) => {
  return (
    <CardMui>
      <CardActionArea>
        <CardMedia component='img' image={data.image} alt={data.title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {data.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            $ {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardMui>
  );
};
