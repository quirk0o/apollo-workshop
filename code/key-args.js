const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        pullRequests: {
          keyArgs: ["state"],
        },
      },
    },
  },
})

// later in query
const query = gql`
  query User(
    $state: String
    $limit: Int!
    $offset: Int
  ) {
    viewer {
      pullRequests(
        state: $state
        limit: $limit
        offset: $offset
      ) {
        id
        title
      }
    }
  }
`
