/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import AuthLayout from './layouts/Auth';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/presentation" />
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('src/views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('src/views/Register'))
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/sales/transactions',
        exact: true,
        component: lazy(() => import('src/views/sales/transactions'))
      },
      {
        path: '/sales/transactionDetails',
        exact: true,
        component: lazy(() => import('src/views/sales/transactionDetail'))
      },
      {
        path: '/sales/customers',
        exact: true,
        component: lazy(() => import('src/views/sales/customers'))
      },
      {
        path: '/sales/customerDetails',
        exact: true,
        component: lazy(() => import('src/views/sales/customerDetails'))
      },
      {
        path: '/sales/inventory',
        exact: true,
        component: lazy(() => import('src/views/sales/inventory'))
      },
      {
        path: '/purchases/orders',
        exact: true,
        component: lazy(() => import('src/views/purchases/orders'))
      },
      {
        path: '/purchases/suppliers',
        exact: true,
        component: lazy(() => import('src/views/purchases/suppliers'))
      },
      {
        path: '/purchases/suppliers/id:',
        exact: true,
        component: lazy(() => import('src/views/purchases/supplierDetails'))
      },
      {
        path: '/invoices/1',
        exact: true,
        component: lazy(() => import('src/views/InvoiceDetails'))
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView
      },
    ]
  }
];
