const pool = require('../../config/db');

// const { GraphQLScalarType, Kind } = require('graphql');

// const DateTime = new GraphQLScalarType({
//   name: 'DateTime',
//   description: 'DateTime scalar as an ISO-8601 string',
//   serialize(value) {
//     if (value instanceof Date) return value.toISOString();
//     const d = new Date(value);
//     if (isNaN(d.getTime())) throw new TypeError('Invalid Date');
//     return d.toISOString();
//   },
//   parseValue(value) {
//     const d = new Date(value);
//     if (isNaN(d.getTime())) throw new TypeError('Invalid Date');
//     return d;
//   },
//   parseLiteral(ast) {
//     if (ast.kind === Kind.STRING) {
//       const d = new Date(ast.value);
//       if (isNaN(d.getTime())) throw new TypeError('Invalid Date');
//       return d;
//     }
//     return null;
//   },
// });

const actorResolver = {
  // DateTime,
  Query: {
    actors: async () => {
      const res = await pool.query('SELECT * FROM actor');

      return res.rows;
    },
  },
};

module.exports = actorResolver;