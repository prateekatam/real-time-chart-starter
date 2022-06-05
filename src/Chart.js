import React from 'react';
import clsx from 'clsx';
import { Line } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}));

const Chart = ({
  fullData,
  offlineData,
  missingData,
  labels,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: theme.palette.secondary.main,
        // data: [null,null,null,null,null,null,null,null,null,null],
        data: fullData,
        fill: false,
        tension: 0.1,
        borderColor: 'rgb(75, 192, 75)',
        label: "Online"
      },
      {
        backgroundColor: theme.palette.secondary.main,
        data: missingData,
        fill: false,
        tension: 0.1,
        borderColor: 'rgb(192, 75, 75)',
        label: "Error"
      },
      {
        // data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        data: offlineData,
        fill: false,
        tension: 0.1,
        borderColor: 'rgb(50, 50, 50)',
        label: "Offline"
      }
    ],
    labels
    // labels : ["2022-06-05 18:36:57.979378","2022-06-05 18:37:05.153165","2022-06-05 18:37:12.884701","2022-06-05 18:37:20.363613","2022-06-05 18:37:27.510527","2022-06-05 18:37:34.698813","2022-06-05 18:37:42.354620","2022-06-05 18:37:49.577139","2022-06-05 18:37:56.757860","2022-06-05 18:38:03.858060"]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: false,
    cornerRadius: 20,
    legend: {
      display: true
    },
    layout: {
      padding: 10
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
              displayFormats: {
                  hour: 'h:mm a'
              }
          },
          gridLines: {
            display: true,
            drawBorder: false
          },
          ticks: {
            display: true
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: false
          },
          ticks: {
            beginAtZero: true,
            display: true,
            stepValue: 10,
            max: 100
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 20,
      xPadding: 20,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.background.default,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        legend: () => {},
        title: () => {},
        label: (tooltipItem) => {
          const label = `Position: ${tooltipItem.yLabel}`;
          return label;
        }
      }
    }
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Line
        data={data}
        options={options}
      />
    </div>
  );
};

export default Chart;
