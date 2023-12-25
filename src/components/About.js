import React, { useState } from 'react';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import revenueData from './data/revenueData.json';
import sourceData from './data/sourceData.json';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

const About = () => {
  const monthsmap = {
    Jan: 5, Feb: 2, Mar: 5, Apr: 4, May: 5, Jun: 4, Jul: 5, Aug: 5, Sept: 4, Oct: 5, Nov: 4, Dec: 5
  };

  const [months, setMonths] = useState('Sept');
  const [daysInMonth, setDaysInMonth] = useState(monthsmap[months]);

  const handleMonthClick = (selectedMonth) => {
    setMonths(selectedMonth);
    setDaysInMonth(monthsmap[selectedMonth]);
  };

  return (<>
 
    <div className="global">
      <div className="wrapper">
        <div className="wrapper2">
          {/* Your existing calendar grids here */}
           {/* grid1 */}
           <div className="grid1">
            {[1, 2, 3, 4, 5, 6].map(e => {
              return (
                <div className="block1">
                  <p className="para">{e}</p>
                </div>
              )
            })}
          </div>

          {/* grid2 */}
          <div className="grid2">
            {[7, 8, 9, 10, 11, 12, 13, 14, 15, 16,  50, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(e => {
              if (e === 50)
                return (
                  <div className="deadblock">
                    <p className="para"></p>
                  </div>
                )
              else
                return (
                  <div className="block1">
                    <p className="para">{e}</p>
                  </div>
                )
            })}
          </div>


          {/* third grid */}
          <div className="grid1">
            {[27, 28, 29, 30, 31, 32].map(e => {
              let days = "";
              for (const [key, value] of Object.entries(monthsmap)) {
                if (months === key) {
                  days = value;
                }
              }
              if (e - 27 < days)
                return (
                  <div className="block3">
                    <p className="para">{e}</p>
                  </div>
                )
              else
                return (
                  <div className="deadblock">
                    <p className="para"></p>
                  </div>
                )


            })}
          </div>
          </div>
      </div>
        
          
       

      {/* Months */}
      <div className="months">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'].map((e) => (
          <button className="block1" key={e} onClick={() => handleMonthClick(e)}>
            <p className="para">{e}</p>
          </button>
        ))}
      </div>
      <div className="container">
          {/* Monthly Revenue & Cost Chart */}
          <div className="chartCard">
            <Line
              data={{
                labels: revenueData.map((data) => data.label),
                datasets: [
                  {
                    label: 'Revenue',
                    data: revenueData.map((data) => data.revenue),
                    backgroundColor: '#064FF0',
                    borderColor: '#064FF0',
                  },
                  {
                    label: 'Cost',
                    data: revenueData.map((data) => data.cost),
                    backgroundColor: '#FF3030',
                    borderColor: '#FF3030',
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  },
                },
                plugins: {
                  title: {
                    text: 'Monthly Revenue & Cost',
                  },
                },
              }}
            />
          </div>

          {/* Revenue Source Bar Chart */}
          <div className="chartCard">
            <Bar
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: 'Count',
                    data: sourceData.map((data) => data.value),
                    backgroundColor: [
                      'rgba(43, 63, 229, 0.8)',
                      'rgba(250, 192, 19, 0.8)',
                      'rgba(253, 135, 135, 0.8)',
                    ],
                    borderRadius: 5,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: 'Revenue Source',
                  },
                },
              }}
            />
          </div>

          {/* Revenue Sources Doughnut Chart */}
          <div className="chartCard">
            <Doughnut
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: 'Count',
                    data: sourceData.map((data) => data.value),
                    backgroundColor: [
                      'rgba(43, 63, 229, 0.8)',
                      'rgba(250, 192, 19, 0.8)',
                      'rgba(253, 135, 135, 0.8)',
                    ],
                    borderColor: [
                      'rgba(43, 63, 229, 0.8)',
                      'rgba(250, 192, 19, 0.8)',
                      'rgba(253, 135, 135, 0.8)',
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: 'Revenue Sources',
                  },
                },
              }}
            />
          </div>
          </div>
    </div>
    </>
  );
};

export default About;
