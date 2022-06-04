import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Card,
  CardHeader,
  Typography,
  makeStyles
} from '@material-ui/core';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  current: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  },
}));

const BASEURL = "http://localhost:4000";

const RealTimeChart = ({ className, ...rest }) => {
  const classes = useStyles();
  // const [data, setData] = useState([
  //   136,
  //   176,
  //   116,
  //   195,
  //   98,
  //   136,
  //   145,
  //   166,
  //   167,
  //   183, 
  //   111
  // ]);

  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  // const labels = data.map((value, i) => i);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
   
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getData = async () => {
    await axios.get(BASEURL+"/shearerpos").then((res) =>  {
      console.log(res)
      setData(res.data.data)
      setLabels(res.data.labels)
    })
    // setData((prevData) => {
    //   const newData = [...prevData];
    //   const random = getRandomInt(100, 200);
    //   newData.shift();
    //   newData.push(random);

    //   return newData;
    // })
  };

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 5000);
    });

  return (
    <Container
        maxWidth="md"
      >
        <Box
          mb={8}
          justifyContent="center"
        >
          <Card
      // className={clsx(classes.root, className)}
      // {...rest}
    >
      <CardHeader
        action={(
          <Typography
            color="inherit"
            variant="h3"
          >
            {
              data[data.length - 1]
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
