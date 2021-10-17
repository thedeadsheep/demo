const {products, product_deses} = require('../data/static')
const resolvers = {
    //QUERY
    Query:{
        products: () => products,
        product: (parent, args) => products.find(product=>product.id == args.id),
        product_Deses: () => product_deses,
        product_Des: (parent, args) => 
            product_deses.find(product_Des=>product_Des.id == args.id)
    },
    ProductDes: {
        product: (parent, args) => products.find(product => product.id == parent.phoneid)
        
    },

    //MUTATION
    Mutation:{
        createProduct: (parent, args) => args,
        createProductDes:(parent, args) => console.log(args)
    }
}

module.exports= resolvers