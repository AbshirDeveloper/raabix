import uuid from 'uuid/v1';
import moment from 'moment';
import mock from 'src/utils/mock';

const orders = [
  {
    id: uuid(),
    customer: {
      id: 12,
      name: 'Abshir Jama',
      address: '123 address',
      city: 'Wajaale',
      country: 'Somalia'
    },
    payment: {
      ref: 'FAD103',
      method: 'Cash',
      total: '500.00',
      currency: '$',
    },
    otherInfo: {
      date: moment(new Date()).format('DD/MM/YYYY HH:MM'),
      paymentDate: moment(new Date()).format('DD/MM/YYYY HH:MM'),
      shipment: 'diyaarad',
      discount: '10%',
      status: 'pending'
    },
    items: [
      {
        id: uuid(),
        description: 'Caano geel',
        quantity: 25,
        costPerItem: '5',
        currency: '$',
        total: '500'
      },
      {
        id: uuid(),
        description: 'Raashin',
        quantity: 45,
        costPerItem: '5',
        total: '900'
      }
    ]
  }
]

mock.onGet('/api/orders').reply(200, {
  orders
});

mock.onGet('/api/orderDetail').reply((config) => {
  const id = config.params.id
  const order = orders.find(item => item.id === id)
  return [200, {
    order: order || {}
  }]
});
