import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from './components/Select/Select';
import Graph from './components/Graph/Graph';
import ChartModal from './components/ChartModal/ChartModal';
import './style.css';

const Timeline = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [barChartData, setBarChartData] = useState(null);
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('EUR');
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState(new Date());
  const [availableCurrencies, setAvailableCurrencies] = useState([
    'USD',
    'EUR',
    'BTC',
  ]);
  const [dateError, setDateError] = useState(null); // новое состояние для ошибки даты

  useEffect(() => {
    const fetchData = async () => {
      const currencyPair = `${firstCurrency}/${secondCurrency}`;
      const apiKey = '66A7E812-0449-49CC-84AC-5B95C8A157D1';
      const url = `https://rest.coinapi.io/v1/exchangerate/${currencyPair}/history?period_id=1DAY&time_start=${startDate.toISOString()}&time_end=${endDate.toISOString()}&limit=30`;
      const response = await axios.get(url, {
        headers: { 'X-CoinAPI-Key': apiKey },
      });
      const data = response.data;

      const uniqueDates = {};
      data.forEach((item) => {
        const date = new Date(item.time_period_start)
          .toISOString()
          .split('T')[0];
        uniqueDates[date] = item;
      });

      const filteredData = Object.values(uniqueDates);

      setBarChartData({
        labels: filteredData.map(
          (item) =>
            new Date(item.time_period_start).toISOString().split('T')[0],
        ),
        datasets: [
          {
            data: filteredData.map((item) =>
              Number(item.rate_close).toFixed(2),
            ),
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            fill: true,
          },
        ],
      });
    };
    fetchData();
  }, [firstCurrency, secondCurrency, startDate]);

  const checkDateDifference = (newStartDate) => {
    const differenceInTime = endDate.getTime() - newStartDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays >= 30;
  };

  const handleStartDateChange = (e) => {
    const newStartDate = new Date(e.target.value);
    if (checkDateDifference(newStartDate)) {
      setStartDate(newStartDate);
      setDateError(null); // очистить ошибку, если разница в датах больше 30 дней
    } else {
      setDateError(
        'Разница между датой начала и текущей датой должна быть не менее 30 дней',
      );
    }
  };

  if (!barChartData) {
    return null;
  }

  return (
    <div className="wrapper">
      <Select
        options={availableCurrencies}
        value={firstCurrency}
        onChange={(e) => setFirstCurrency(e.target.value)}
      />
      <button className="button-change" onClick={() => setIsModalOpen(true)}>
        Изменить параметры
      </button>

      <ChartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        availableCurrencies={availableCurrencies}
        secondCurrency={secondCurrency}
        setSecondCurrency={setSecondCurrency}
        startDate={startDate}
        handleStartDateChange={handleStartDateChange}
        endDate={endDate}
        dateError={dateError} // передать ошибку даты в модальное окно
      />

      <Graph data={barChartData} />
    </div>
  );
};

export default Timeline;
