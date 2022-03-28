import { buildClientSchema } from "graphql"
import * as introspectionResult from "schema.json"

const resolvers = (store) => ({
  Query: {
    viewer(parent, args, context, info) {
      return JSON.parse(localStorage.getItem("user"))
    },
    userById(parent, { id }) {
      return store.get("User", id)
    },
  },
  Mutation: {
    changeMyName(parent, { name }) {
      store.set("Query", "ROOT", "viewer", { name })

      return store.get("Query", "ROOT", "viewer")
    },
  },
})

const schema = buildClientSchema(introspectionResult)
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks: {},
  resolvers,
})
