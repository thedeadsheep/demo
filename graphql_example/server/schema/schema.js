const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Product {
        id: ID
        name: String
        color: String
        price: Int
    }
    type ProductDes{
        id: ID!
        product: Product
        phone_description: String

    }
    # ROOT TYPE
    type Query {
        products: [Product]
        product(id: ID!): Product
        product_Deses: [ProductDes]
        product_Des(id: ID!): ProductDes
    }
`

module.exports = typeDefs