const {products, product_deses} = require('../data/static')
const resolvers = {
    Query:{
        products: () => products,
        product: (parent, args) => products.find(product=>product.id == args.id),
        product_Deses: () => product_deses,
        product_Des: (parent, args) => 
            product_deses.find(product_Des=>product_Des.id == args.id)
    },
    ProductDes: {
        product: (parent, args) => products.find(product => product.id === parent.phoneid)
        
    }
}

module.exports= resolvers