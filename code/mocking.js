import { buildClientSchema } from "graphql"
import * as introspectionResult from "schema.json"

const schema = buildClientSchema(introspectionResult)
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks: {},
})
