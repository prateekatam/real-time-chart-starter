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

  const [data, setData] = useState({});
  // const [labels, setLabels] = useState([]);

  const getData = async () => {
    await axios.get(BASEURL+"/shearerpos").then((res) =>  {
      console.log(res)
      setData({"data": res.data.data, "labels": res.data.labels})
      // setLabels(res.data.labels)
    })
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
        data={data.data}
        labels={data.labels}
      />
    </Card>
 
     </Box>
    </Container>       
  );
}

export default RealTimeChart;
