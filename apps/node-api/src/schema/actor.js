

const typeDefs = `#gql
  scalar DateTime

  type Actor {
    actor_id: Int
    first_name: String!
    last_name: String!
    last_update: DateTime!
  }

  type Query {
    actors: [Actor]
  }
`;

module.exports = typeDefs;