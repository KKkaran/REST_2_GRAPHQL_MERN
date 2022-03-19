import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users($username:String){
    users(username:$username){
      username
      email
      _id
      password
    }
  }
`;
export const Mutation_User_Login = gql`

mutation($email: String!, $password: String!){
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`

// export const Mutation_User_Signup = gql`

// mutation($email: String!, $password: String!){
//   addUser(username: String!, email: String!, password :String!) {
//     token
//     user {
//       _id
//       email
//       username
//     }
//   }
// }
//`