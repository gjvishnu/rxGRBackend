const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let prods = [
    { id: '1', name: 'Rick Sanchez', image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
    { id: '2', name: 'Morty Smith', image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
    { id: '3', name: 'Summer Smith', image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' }
  ];
    
   
const resolvers = {
    Query: {
        products: () => prods,
        allUsers : async ()=>{
            try{
            const users = await prisma.user.findMany()
            return users
            }catch(err){
                console.error(error);
                throw new Error('Failed to create a new user');
            }
        }
    },

    Mutation: {
        createUser: async (_, { input }) => {
          try {
            const newUser = await prisma.user.create({
              data: {
                email: input.email,
                name: input.name,
              },
            });
            return newUser;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to create a new user');
          }
        },
        updateUser : async (_,{input}) =>{
            try{
            const updatedUser = await prisma.user.update({
                where : {email : input.email},
                data : {
                    email : input.email,
                    name : input.name
                }
            })
            return updatedUser
            }
            catch(e){
                console.error(error);
                throw new Error('Failed to create a new user');
            }
        },
        delUser: async (_, { input }) => {
            try {
              await prisma.user.delete({
                where: { email: input.email },
              });
          
              // Return the success message explicitly
              return "deleted";
            } catch (error) {
              console.error(error);
              throw new Error('Failed to delete the user');
            }
          }
          
      }

};

module.exports = resolvers;
