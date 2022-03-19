const { AuthenticationError } = require("apollo-server-express");
const {User} = require("../models")
const {signToken} = require("../utils/auth")
const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('thoughts')
            .populate('friends');
      
          return userData;
        }
      
        throw new AuthenticationError('Not logged in');
      },
      user:async(p,{username})=>{
        const params = username ? {username} : {}
        return User.findOne(params)
      },
      users:async(p,{username})=>{
        const params = username ? {username} : {}
        return User.find(params);
      }
    },
    Mutation: {
      login: async(parent,{email, password} )=>{
        const user = await User.findOne({ email })

        if(!user){
          return new AuthenticationError("Incorrect Credentials!!")
        }

        const correctPw = await user.isCorrectPassword(password);

        if(!correctPw){
          return new AuthenticationError("Invalid Credentials")
        }

        const token = signToken(user)
        return {token, user};
      },
      addUser: async(p,args)=>{
        const user =  await User.create(args)
        const token = signToken(user)
        
        return {token, user}
        
      }
    }
  };
  
module.exports = resolvers;