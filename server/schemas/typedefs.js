const {gql} = require("apollo-server-express")

const typedefs = gql`

    type Book{
        description:String
        bookId:String
        title:String
        authors:[String]
        image:String
        link:String
    }

    type User{
        _id: ID
        username: String
        email: String
        password: String
        savedBooks:[Book]
    }    

    type Query {
        me: User
        users(username:String): [User]
        user(username: String!): User
    }

    type Auth{
        token: ID!
        user: User
    }
    
    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password :String!):
        Auth
        addBook(description:String!, bookId:String!,
            title:String!) : User
        deleteBook(bookId:String!):User 
    }



`



module.exports = typedefs;

