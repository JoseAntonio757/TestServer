const { gql } = require("apollo-server");



const typeDefs = gql`

# Comments in GraphQL are defined with the hash (#) symbol.
# This "Book" type can be used in other type declarations.

type Usuario {
    id: String
    nombre: String
    segundonombre: String
    apellidopaterno: String
    apellidomaterno: String
    fechanacimiento: String
    email: String
    telefono: String

}

input UsuarioInput {
    nombre: String!
    segundonombre: String
    apellidopaterno: String!
    apellidomaterno: String!
    fechanacimiento: String!
    email: String!
    telefono: String!

}

# The "Query" type is the root of all GraphQL queries.
# (A "Mutation" type will be covered later on.)

type Query {  
  Usuarios: [Usuario]
}

type Mutation{
    createUsuario(
    nombre: String!,
    segundonombre: String,
    apellidopaterno: String!,
    apellidomaterno: String!,
    fechanacimiento: String!,
    email: String!,
    telefono: String!
    ): Usuario
}
`;

module.exports = typeDefs;