import axios from 'axios';
import { useEffect, useState } from 'react';
import { ItemHeader, ListHeader, TextHeader } from './Header.styled';

export const Header = () => {
  const [headerCurrency, setHeaderCurrency] = useState([]);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        await axios
          .get(
            'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json '
          )
          .then(res => {
            setHeaderCurrency(
              res.data.filter(cur => {
                return cur.cc === 'USD' || cur.cc === 'EUR';
              })
            );
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCurrency();
  }, []);

  return (
    <ListHeader>
      {headerCurrency.map(cur => (
        <ItemHeader key={cur.r030}>
          <TextHeader>
            1{cur.cc} = {cur.rate.toFixed(2)}UAH
          </TextHeader>
        </ItemHeader>
      ))}
    </ListHeader>
  );
};
