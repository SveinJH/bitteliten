import bottle from './assets/img/bottle.png';
import headset from './assets/img/headset.png';
import pc from './assets/img/pc.png';
import pwo from './assets/img/pwo.png';
import tshirt from './assets/img/tshirt.png';

const DUMMY_PRODUCTS = [
    {
        id: 100,
        name: 'Flaske',
        brand: 'Rosenlund',
        price: 39,
        image: bottle,
        category: 'Beholdere',
        categoryId: 1,
    },
    {
        id: 101,
        name: 'Unchained PWO',
        brand: 'Chained Nutrition',
        price: 129,
        image: pwo,
        category: 'Kosttilskudd',
        categoryId: 2,
    },
    {
        id: 102,
        name: 'T-skjorte',
        brand: 'H&M',
        price: 249,
        image: tshirt,
        category: 'Klær',
        categoryId: 3,
    },
    {
        id: 103,
        name: 'Datamaskin',
        brand: 'Hewlett Packard',
        price: 5299,
        image: pc,
        category: 'Data',
        categoryId: 4,
    },
    {
        id: 104,
        name: 'Headset',
        brand: 'JBL',
        price: 849,
        image: headset,
        category: 'Lyd',
        categoryId: 5,
    },
];

const DUMMY_CART_ITEMS = [
    {
        id: 100,
        name: 'Flaske',
        image: bottle,
        amount: 2,
        price: 39,
        inStock: true,
    },
    {
        id: 101,
        name: 'Unchained PWO',
        image: pwo,
        amount: 4,
        price: 129,
        inStock: true,
    },
];

export { DUMMY_CART_ITEMS, DUMMY_PRODUCTS };
