const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        firstPR(_, { readField }) {
          const pullRequests = readField(
            "pullRequests"
          )
          return pullRequests[0] // { __ref: "PullRequest:123" }
        },
        firstPRTitle(_, { readField }) {
          const pullRequests = readField(
            "pullRequests"
          )
          return readField(pullRequests[0], "title")
        },
      },
    },
  },
})
