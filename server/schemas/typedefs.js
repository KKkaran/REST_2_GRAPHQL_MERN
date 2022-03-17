const {gql} = require("apollo-server-express")

const typedefs = gql`

    
    type Query{
        hello:String
        
    }



`



module.exports = typedefs;