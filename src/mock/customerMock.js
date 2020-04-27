import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/management/customers').reply(200, {
  customers: [
    {
      id: uuid(),
      name: 'Jamac Ahmed',
      email: 'jamac@gmail.com',
      purchaseTotal: '500.00',
      storeName: 'bagaashle',
      status: '1',
      invoices: 5,
      balance: '$309',
      location: 'Hargeisa, Somalia'
    },
    {
      id: uuid(),
      name: 'Abshir Jama',
      email: 'abshir@gmail.com',
      purchaseTotal: '300.00',
      storeName: 'new vision',
      status: '3',
      invoices: 3,
      balance: '$22',
      location: 'Chicago, USA'
    }
  ]
});

mock.onGet('/api/management/customers/1/summary').reply(200, {
  summary: {
    name: 'Ekaterina Tankova',
    email: 'ekaterina@devias.io',
    phone: '+55 748 327 439',
    state: 'Alabama',
    country: 'United States',
    zipCode: '240355',
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    verified: true,
    currency: '$',
    invoice: {
      totalPurchase: '$4000',
      paid: '$3500',
      unpaid: '$500',
      refunded: '$200'
    },
    vat: 19,
    balance: 0,
    emails: [
      {
        id: uuid(),
        description: 'Order confirmation',
        created_at: moment()
          .subtract(3, 'days')
          .subtract(5, 'hours')
          .subtract(34, 'minutes')
      },
      {
        id: uuid(),
        description: 'Order confirmation',
        created_at: moment()
          .subtract(4, 'days')
          .subtract(11, 'hours')
          .subtract(49, 'minutes')
      }
    ]
  }
});

mock.onGet('/api/management/customers/1/invoices').reply(200, {
  invoices: [
    {
      id: uuid(),
      date: moment(),
      description: 'Badeeco',
      paymentMethod: 'Cash',
      value: '5.25',
      currency: '$',
      status: 'paid'
    },
    {
      id: uuid(),
      date: moment(),
      description: 'badeeco iyo cash iskujira',
      paymentMethod: 'Reveivable',
      value: '5.25',
      currency: '$',
      status: 'paid'
    }
  ]
});

mock.onGet('/api/management/customers/1/reveivables').reply(200, {
  receivable: [
    {
      id: uuid(),
      date: moment(),
      description: 'Badeeco uu gatay',
      transactionType: 'debit',
      amount: '5.25'
    },
    {
      id: uuid(),
      date: moment(),
      description: 'cash uu qaatay',
      transactionType: 'debit',
      amount: '5.25'
    },
    {
      id: uuid(),
      date: moment(),
      description: 'baxshay',
      transactionType: 'credit',
      amount: '5.25'
    }
  ]
});
