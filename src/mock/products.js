import uuid from 'uuid/v1';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';
import {
    deleteProductUrl, addProductUrl, updateProductUrl, getProductsUrl
} from 'src/views/sales/inventory/dummyUrls'

let payload = {
    columns: [
        { title: 'ItemID', field: 'itemId', editable: 'never' },
        { title: 'Description', field: 'description', editable: 'never' },
        { title: 'Available', field: 'availableCount', type: 'numeric', editable: 'never' },
        { title: 'SupplierC', field: 'supplierCost', type: 'numeric', editable: 'never' },
        { title: 'Earning', field: 'earningPercent', type: 'dropDown', data: ['10%', '20%', '30%', '40%', '50%'] },
        { title: 'TotalE', field: 'totalEarning', type: 'numeric', editable: 'never' },
        { title: 'SupplierT', field: 'supplierTotal', type: 'numeric', editable: 'never' },
        { title: 'LastOrdered', field: 'lastOrdered', type: 'date', editable: 'never' },
        { title: 'ExpiringSoon', field: 'expiringSoon', type: 'numeric', editable: 'never' },
        { title: 'Edited', field: 'edited', editable: 'never' },
    ],
    data: [
        {
            itemId: '123',
            description: 'Caano Geel',
            availableCount: 4,
            supplierCost: 34,
            earningPercent: '10%',
            totalEarning: 454,
            benefit: 434,
            lastOrdered: new Date(),
            supplierTotal: 545,
            expiringSoon: 4,
            edited: 'AJ',
            lastOrder: '04/14/2020'
        },
        {
            itemId: '121',
            description: 'Saliid',
            availableCount: 4,
            supplierCost: 34,
            earningPercent: '10%',
            totalEarning: 454,
            benefit: 434,
            lastOrdered: new Date(),
            supplierTotal: 545,
            expiringSoon: 4,
            edited: 'AJ',
            lastOrder: '04/14/2020'
        },
        {
            itemId: '124',
            description: 'Oil',
            availableCount: 4,
            supplierCost: 34,
            earningPercent: '10%',
            totalEarning: 454,
            benefit: 434,
            lastOrdered: new Date(),
            supplierTotal: 545,
            expiringSoon: 4,
            edited: 'AJ',
            lastOrder: '04/14/2020'
        }
    ]
}

mock.onGet(getProductsUrl).reply(200, {
    ...payload
})