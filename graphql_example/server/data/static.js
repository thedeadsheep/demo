const products = [
    {
        id: 1,
        name: 'OPPO',
        color: 'White',
        price: 1000000
    },
    {
        id: 2,
        name: 'Apple',
        color: 'Red',
        price: 10000000
    },
    {
        id: 3,
        name: 'Sony',
        color: 'Blue',
        price: 1500000
    }
]
const product_deses = [
    {
        id: 1,
        phoneid: 1,
        phone_description: 'Made in China'
    },
    {
        id: 2,
        phoneid: 2,
        phone_description: 'Made in China, but design by Apple US'
    },
    {
        id: 3,
        phoneid: 3,
        phone_description: 'Also China, but Brand from Japan'
    },
]
module.exports = {
    products,
    product_deses
}