'use client';
import dynamic from 'next/dynamic';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import React, { useState, useEffect, useRef } from 'react';
// import ReactEcharts from 'echarts-for-react';
import postData from '../src/pages/api/hello';
import c from './layout.module.scss';

const ReactEcharts = dynamic(() => import('echarts-for-react'), { ssr: false });

// 定义接口
// const params = new URLSearchParams();
// params.set('span', '1y');
// 1d：一天
// 1w：一周
// 1m：一个月
// 6m：六个月
// 1y：一年
// 5y：五年
// 10y：十年
// max：所有

let title = '';
// let url = `https://markets.tradingeconomics.com/chart?s=eecxm:ind&securify=new&url=/commodity/carbon&AUTH=OpIeF1m5eEMa2rm2PFYpm6vK%2BOd3LpcRxOjYg8kKVlgcyQD383moq4AAUmKhTLcU&ohlc=0&${params}`;
// let url = `https://markets.tradingeconomics.com/chart?s=eecxm:ind&securify=new&url=/commodity/carbon&AUTH=njvdkjOp6p4DkQzeG%2BDudn8nng%2Bkm%2BcHyOwPbOKisR5bl2psr75iVfOUT5H6mhfN&ohlc=0&${params}`

export default function Chart() {
  const isMounted = useRef(false);

  const [allData, setAllData] = useState('');
  const [chartname, setChartname] = useState(''); //chart title
  const [dataArray, setDataArray] = useState([]); //x轴日期
  const [changes, setChanges] = useState([]);
  const [percentChange, setpercentChange] = useState([]);
  const [price, setPrice] = useState([]);
  const [series, setSeries] = useState([]);

  const [isActive, setIsActive] = useState('1y');

  const handleClick = (time: string) => {
    // setIsActive(time);
    // params.set('span', time);
    // url = `https://markets.tradingeconomics.com/chart?s=eecxm:ind&securify=new&url=/commodity/carbon&AUTH=OpIeF1m5eEMa2rm2PFYpm6vK%2BOd3LpcRxOjYg8kKVlgcyQD383moq4AAUmKhTLcU&ohlc=0&${params}`;
    // // url = `https://markets.tradingeconomics.com/chart?s=eecxm:ind&securify=new&url=/commodity/carbon&AUTH=njvdkjOp6p4DkQzeG%2BDudn8nng%2Bkm%2BcHyOwPbOKisR5bl2psr75iVfOUT5H6mhfN&ohlc=0&${params}`
    // // console.log(url)
    // fetchData(time);
  };

  async function fetchData(time: string) {
    // console.log(time)
    const res = await postData()
      .then((data) => {
        var yResult = [];
        var change = [];
        var percentChange = [];
        var eur = [];
        const datas = data.series[0];
        const list = datas.data;
        // console.log(list)
        for (var i = 0; i < list.length; i++) {
          // console.log(list[i].date)
          const date = new Date(list[i].x);
          const year = date.getFullYear();
          const month = ('0' + (date.getMonth() + 1)).slice(-2);
          const day = ('0' + date.getDate()).slice(-2);
          const hours = ('0' + date.getHours()).slice(-2); // 使用 slice(-2) 保证小时始终为两位数
          const minutes = ('0' + date.getMinutes()).slice(-2);
          const seconds = ('0' + date.getSeconds()).slice(-2);
          const ydata = year + '-' + month + '-' + day;
          const ddate =
            year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
          if (
            time === '1y' ||
            time === '1m' ||
            time === '6m' ||
            time === '5y' ||
            time === '10y' ||
            time === 'max'
          ) {
            yResult.push(ydata);
          }
          if (time === '1d' || time === '1w') {
            yResult.push(ddate);
          }

          eur.push(list[i].y);
          change.push(list[i].change);
          percentChange.push(list[i].percentChange);
        }
        setAllData(datas);
        setChartname(datas.name); //chart title
        setDataArray(yResult as never);
        setChanges(change as never);
        setpercentChange(percentChange as never);
        setPrice(eur as never);
      })
      .catch((err) => console.log('err' + err));
  }

  useEffect(() => {
    // console.log(url)
    // if (!isMounted.current) {
    //   fetchData('1y');
    //   isMounted.current = true;
    // }
  }, []);
  const option = {
    title: {
      text: chartname,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      // data: dataArray,
      data: [
        '2022-01',
        '2022-02',
        '2022-03',
        '2022-04',
        '2022-05',
        '2022-06',
        '2022-07',
        '2022-08',
        '2022-09',
        '2022-10',
        '2022-11',
        '2022-12',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'EUR',
        // data: price,
        data: [
          0.05, 1.81, -0.41, -0.78, 1, -1.24, 3.44, -0.41, 3.51, -0.34, 0.99,
          1.28, 0.03,
        ],
        type: 'line',
      },
      {
        name: 'change',
        // data: changes,
        data: [
          0.05, 1.81, -0.41, -0.78, 1, -1.24, 3.44, -0.41, 3.51, -0.34, 0.99,
          1.28, 0.03,
        ],
        type: 'line',
      },
      // {
      //   name: 'percentChange',
      //   data: percentChange,
      //   // [0.709, 1.041, 4.151, 0.809, 2.243, 3.709, 4.709, 4.151, 0.809, 2.243, 3.709, 4.709],
      //   type: 'line',
      // }
    ],
  };

  return (
    <>
      <div id="chart" className={c.chart}>
        <ReactEcharts option={option} />
        <div>
          <ul>
            <li onClick={() => handleClick('1d')}>
              <span className={isActive === '1d' ? 'active' : 'inactive'}>
                {' '}
                1 天
              </span>
            </li>
            <li onClick={() => handleClick('1w')}>
              <span className={isActive === '1w' ? 'active' : 'inactive'}>
                1 周
              </span>
            </li>
            <li onClick={() => handleClick('1m')}>
              <span className={isActive === '1m' ? 'active' : 'inactive'}>
                1 月
              </span>
            </li>
            <li onClick={() => handleClick('6m')}>
              <span className={isActive === '6m' ? 'active' : 'inactive'}>
                半 年
              </span>
            </li>
            <li onClick={() => handleClick('1y')}>
              <span className={isActive === '1y' ? 'active' : 'inactive'}>
                1 年
              </span>
            </li>
            <li onClick={() => handleClick('5y')}>
              <span className={isActive === '5y' ? 'active' : 'inactive'}>
                5 年
              </span>
            </li>
            <li onClick={() => handleClick('10y')}>
              <span className={isActive === '10y' ? 'active' : 'inactive'}>
                10 年
              </span>
            </li>
            <li onClick={() => handleClick('max')}>
              <span className={isActive === 'max' ? 'active' : 'inactive'}>
                全 部
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
