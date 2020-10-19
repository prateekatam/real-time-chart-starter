import React, { useState } from 'react';
import {
  Container,
  Box,
  Card,
  CardHeader,
  Typography,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import Chart from './Chart';
import logo from './logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  current: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  },
}));



const RealTimeChart = ({ className, ...rest }) => {
  const classes = useStyles();
  const [data, setData] = useState([
    136,
    176,
    116,
    195,
    98,
    136,
    145,
    166,
    167,
    183
  ]);

  const labels = data.map((value, i) => i);

  return (
    <Container
        maxWidth="sm"
      >
        <Box
          mb={4}
          display="flex"
          justifyContent="center"
        >
           <img
          alt="Logo"
          src={logo}
          />
        </Box>
        <Box
          mb={8}
          display="flex"
          justifyContent="center"
        >
          <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Typography
            color="inherit"
            variant="h3"
          >
            {
              data[data.length - 1] === 0
                ? data[data.length - 2]
                : data[data.length - 1]
            }
          </Typography>
        )}
        classes={{ action: classes.current }}
        subheader="Page views per second"
        title="Active users"
      />
      <Chart
        data={data}
        labels={labels}
      />
    </Card>
 
     </Box>
    </Container>       
  );
}

export default RealTimeChart;
