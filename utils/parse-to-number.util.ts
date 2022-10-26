import { IProduct, IProductMock } from '../interfaces';

export const parseToNumber = (data: IProductMock[]): IProduct[] => {
  const parseData: IProduct[] = [];
  data.forEach((item) => {
    const price = item.precio.replace('$', '');
    parseData.push({
      image: item.image,
      title: item.producto,
      price: Number(price),
    });
  });
  return parseData;
};
