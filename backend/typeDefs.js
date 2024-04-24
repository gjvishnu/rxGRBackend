const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        products: [Prods]
        allUsers : [User]
    }

    type Prods {
        name: String
        image: String
        id : String
    }
 
     type User{
        id : Int
        email : String
        name : String 
     }

     input CreateUserInput {
        email: String!
        name: String
      }
     
    input UpdateUserInput {
        email: String!
        name: String
    }

    input DelUserInput {
        email: String!
    }

      type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(input: UpdateUserInput!): User!
        delUser(input :DelUserInput ):User!
      }
`;

module.exports = typeDefs;
