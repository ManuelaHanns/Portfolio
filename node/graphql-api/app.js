import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// an array of data
const todos = [
    {
        id: "1",
        text: "Order Pizza",
        completed: true
    },
    {
        id: "2",
        text: "Pick up Pizza",
        completed: false
    }
];

// GraphQL Type Definitions
const typeDefs = `#graphql
    type Query {
        todos: [Todo!]!
        todo(id: ID!): Todo!
    }

    type Mutation {
        newTodo(text: String!): Todo!
        updateTodo(id: ID!, text: String, completed: Boolean): Todo!
        deleteTodo(id: ID!): Todo!
    }

    type Todo {
        id: ID!
        text: String!
        completed: Boolean
    }
    `;

    // GraphQL Resolvers
    const resolvers = {
        Query: {
            todos: () => todos,
            todo: (parent, args) => {
                return todos.find(todo => todo.id === args.id);
            }
        },
        Mutation: {
            newTodo: (parent, args) => {
                const todo = {
                    id: String(todos.length + 1),
                    text: args.text,
                    completed: false
                };
                todos.push(todo);
                return todo;
            },

            updateTodo: (parent, args) => {
                const todoIndex = todos.findIndex(todo => todo.id === args.id);
                const todo = {
                    id: args.id,
                    text: args.text || todos[todoIndex].text,
                    completed: args.completed || todos[todoIndex].completed
                };
                todos[todoIndex] = todo;
                return todo;
            },
            deleteTodo: (parent, args) => {
                const deletedTodo = todos.find(todo => todo.id === args.id);
                todos = todos.filter(todo => todo.id !== args.id);
            }
        }
    };

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: {port: 4000 },
    });
    
    console.log(`Server ready at: ${url}`);
    

