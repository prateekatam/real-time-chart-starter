import React from 'react';
import clsx from 'clsx';
import { Bar, Line } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}));

const Chart = ({
  data,
  labels,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const beta = {
    datasets: [
      {
        backgroundColor: theme.palette.secondary.main,
        // data: [167, 183, 192, 112, 133, 174, NaN, 110, 134, 140],
        data: data,
        fill: false,
        tension: 0.1,
        borderColor: 'rgb(75, 192, 192)',
      },
      // {
      //   backgroundColor: theme.palette.secondary.main,
      //   data: [NaN, NaN, NaN, NaN, NaN, 174, 100, 110, NaN, NaN],
      //   fill: false,
      //   tension: 0.1,
      //   borderColor: 'rgb(192, 192, 75)',
        
      // }
    ],
    // labels: ['J', 'A', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'],
    labels
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
      padding: 0
    },
    scales: {
      xAxes: [
        {
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
            display: true
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
          const label = `Views: ${tooltipItem.yLabel}`;

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
        data={beta}
        options={options}
      />
    </div>
  );
};

export default Chart;
