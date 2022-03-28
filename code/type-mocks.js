import { buildClientSchema } from "graphql"
import * as introspectionResult from "schema.json"

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => "Hello",
  User: () => ({
    login: random.username(),
    email: random.email(),
  }),
}

const schema = buildClientSchema(introspectionResult)
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks,
})
