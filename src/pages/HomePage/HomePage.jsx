import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  FormHeader,
  InputHeader,
  LabelHomePage,
  SelectHeader,
} from './HomePage.styled';

const HomePage = () => {
  const [cur1, setCur1] = useState(0);
  const [cur2, setCur2] = useState(0);
  const [selectCur, setSelectCur] = useState([]);

  const date = new Date();
  const today = date.toLocaleDateString();

  const [selectedCurrency1, setSelectedCurrency1] = useState({
    r030: 840,
    txt: 'Долар США',
    rate: 36.3535,
    cc: 'USD',
    exchangedate: today,
  });

  const [selectedCurrency2, setSelectedCurrency2] = useState({
    r030: 1000,
    txt: 'Українська гривня',
    rate: 1,
    cc: 'UAH',
    exchangedate: today,
  });

  useEffect(() => {
    const getCurrency = async () => {
      try {
        await axios
          .get(
            'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json '
          )
          .then(res => {
            const selectCur = res.data.filter(cur => {
              return cur.cc === 'USD' || cur.cc === 'EUR';
            });

            setSelectCur([
              ...selectCur,
              {
                r030: 1000,
                txt: 'Українська гривня',
                rate: 1,
                cc: 'UAH',
                exchangedate: today,
              },
            ]);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCurrency();
  }, [today]);

  const handleInputCur1 = e => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    setCur1(value);

    setCur2(
      ((value * selectedCurrency1.rate) / selectedCurrency2.rate).toFixed(2)
    );
  };

  const handleInputCur2 = e => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    setCur2(value);

    setCur1(
      ((value * selectedCurrency2.rate) / selectedCurrency1.rate).toFixed(2)
    );
  };

  const handleChangeCurr1 = e => {
    const selectedCurr = selectCur.find(cur => cur.cc === e.target.value);

    setSelectedCurrency1(selectedCurr);
    setCur2(((cur1 * selectedCurr.rate) / selectedCurrency2.rate).toFixed(2));
  };

  const handleChangeCurr2 = e => {
    const selectedCurr = selectCur.find(cur => cur.cc === e.target.value);
    setSelectedCurrency2(selectedCurr);
    setCur1(((cur2 * selectedCurr.rate) / selectedCurrency1.rate).toFixed(2));
  };

  return (
    <FormHeader>
      <LabelHomePage>
        <InputHeader
          name="cur1"
          type="text"
          value={cur1}
          onChange={handleInputCur1}
        />
        <SelectHeader value={selectedCurrency1.cc} onChange={handleChangeCurr1}>
          {selectCur.map(cur => {
            return (
              <option key={cur.r030} value={cur.cc}>
                {cur.cc}
              </option>
            );
          })}
        </SelectHeader>
      </LabelHomePage>

      <LabelHomePage>
        <InputHeader
          name="cur2"
          type="text"
          autoComplete="off"
          value={cur2}
          onChange={handleInputCur2}
        />
        <SelectHeader value={selectedCurrency2.cc} onChange={handleChangeCurr2}>
          {selectCur.map(cur => {
            return (
              <option key={cur.r030} value={cur.cc}>
                {cur.cc}
              </option>
            );
          })}
        </SelectHeader>
      </LabelHomePage>
    </FormHeader>
  );
};

export default HomePage;
