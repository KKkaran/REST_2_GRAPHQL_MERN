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
export const Query_Me = gql`
  query me{
    me {
      email
      savedBooks {
        bookId
        title
        description
        link
        image
      }
    }
  }

`
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

export const Mutation_User_Signup = gql`
  mutation($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
}
`

export const Mutation_addBook = gql `
  mutation($description: String!, $bookId: String!, $title: String!){
    addBook(description: $description, bookId: $bookId, title: $title) {
      username
      email
      savedBooks {
        bookId
        title
        description
      }
    }
  }
`

export const Mutation_deleteBook = gql`
  mutation($bookId: String!){
    deleteBook(bookId: $bookId) {
      username
      savedBooks {
        bookId
        title
        bookId
      }
    }
  }
`