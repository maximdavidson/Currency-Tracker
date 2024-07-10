import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from './components/Select/Select';
import Graph from './components/Graph/Graph';
import ChartModal from './components/ChartModal/ChartModal';
import './style.css';

const Timeline = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [barChartData, setBarChartData] = useState(null);
  const [firstCurrency, setFirstCurrency] = useState('BTC');
  const [secondCurrency, setSecondCurrency] = useState('USD');
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  );
  const [endDate, setEndDate] = useState(new Date());
  const [availableCurrencies, setAvailableCurrencies] = useState([
    'USD',
    'EUR',
    'BTC',
  ]);
  const [dateError, setDateError] = useState(null);

  const fetchData = async () => {
    const currencyPair = `${firstCurrency}/${secondCurrency}`;
    const apiKey = ' 608B2CD2-2D43-4CCA-9AFC-61A2EC18A368'; // 8
    const url = `https://rest.coinapi.io/v1/exchangerate/${currencyPair}/history?period_id=1DAY&time_start=${startDate.toISOString()}&time_end=${endDate.toISOString()}&limit=50`; // Увеличиваем лимит до 50 дней

    const cacheKey = `${currencyPair}_${startDate.toISOString()}_${endDate.toISOString()}`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      setBarChartData(JSON.parse(cachedData));
    } else {
      try {
        const response = await axios.get(url, {
          headers: { 'X-CoinAPI-Key': apiKey },
        });
        const data = response.data;

        const chartData = {
          datasets: [
            {
              label: 'Candlestick',
              data: data.map((item) => ({
                x: new Date(item.time_period_start),
                o: item.rate_open,
                h: item.rate_high,
                l: item.rate_low,
                c: item.rate_close,
              })),
              borderColor: 'rgba(0, 0, 255, 0.5)',
              backgroundColor: 'rgba(0, 0, 255, 0.5)',
            },
          ],
        };

        localStorage.setItem(cacheKey, JSON.stringify(chartData));
        setBarChartData(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [firstCurrency, secondCurrency, startDate, endDate]);

  const checkDateDifference = (newStartDate) => {
    const differenceInTime = endDate.getTime() - newStartDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays >= 30 && differenceInDays <= 50;
  };

  const handleStartDateChange = (e) => {
    const newStartDate = new Date(e.target.value);
    if (checkDateDifference(newStartDate)) {
      setStartDate(newStartDate);
      setDateError(null);
    } else {
      setDateError(
        'The difference between the start date and the current date must be no less than 30 days and no more than 50 days',
      );
    }
  };

  if (!barChartData) {
    return (
      <div className="wrapper">
        <p className="loading-dots">
          Loading
          <span className="loading-dot-1">.</span>
          <span className="loading-dot-2">.</span>
          <span className="loading-dot-3">.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Select
        options={availableCurrencies}
        value={firstCurrency}
        onChange={(e) => setFirstCurrency(e.target.value)}
      />
      <button className="button-change" onClick={() => setIsModalOpen(true)}>
        Change parameters
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
        dateError={dateError}
      />

      <Graph data={barChartData} />
    </div>
  );
};

export default Timeline;
