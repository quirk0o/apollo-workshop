const cache = new InMemoryCache({
  typePolicies: {
    User: {
      keyFields: ["login"],
    },
  },
})

const cache = new InMemoryCache({
  typePolicies: {
    User: {
      keyFields: ["name", "email"],
    },
  },
})

const cache = new InMemoryCache({
  typePolicies: {
    CurrentUser: {
      keyFields: [],
    },
  },
})
