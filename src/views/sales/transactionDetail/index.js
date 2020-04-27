import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid } from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import Header from './Header';
import OrderInfo from './OrderInfo';
import OrderItems from './OrderItems';
import {
  useLocation,
  Redirect,
  useHistory
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  grid: {
    marginTop: theme.spacing(2)
  }
}));

function OrderManagementDetails() {
  const classes = useStyles();
  const [order, setOrder] = useState(null);

  let location = useLocation()
  let history = useHistory()
  useEffect(() => {
    let mounted = true;
    const fetchOrder = () => {
      axios.get('/api/orderDetail', { params: { id: location.search.replace('?id:', '') } }).then((response) => {
        if (!Object.keys(response.data.order).length) {
          history.replace('/sales/transactions')
        }
        if (mounted) {
          setOrder(response.data.order);
        }
      });
    };

    fetchOrder();

    return () => {
      mounted = false;
    };
  }, []);

  if (!order) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Order Management Details"
    >
      <Container maxWidth={false}>
        <Header order={order} />
        <Grid
          className={classes.grid}
          container
          spacing={3}
        >
          <Grid
            item
            md={4}
            xl={3}
            xs={12}
          >
            <OrderInfo order={order} />
          </Grid>
          <Grid
            item
            md={8}
            xl={9}
            xs={12}
          >
            <OrderItems order={order} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

export default OrderManagementDetails;
