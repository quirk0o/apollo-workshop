const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pullRequest: {
          read(existingValue, options) {
            const {
              cache,
              args,
              fieldName,
              field,
              variables,
              isReference,
              toReference,
              canRead,
              storage,
              mergeObjects,
            } = options
          },
        },
      },
    },
  },
})

useQuery(
  gql`
    query PullRequests($states: [String]) {
      viewer {
        pullRequests(
          states: $states
          orderBy: {
            field: CREATED_AT
            direction: DESC
          }
        ) {
          id
          title
        }
      }
    }
  `,
  { variables: { states: ["OPEN"] } }
)

const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        pullRequests: {
          read(_, options) {
            const { args, variables } = options

            variables
            /*
            {
              states: ['OPEN']
            }
            */

            args
            /*
            {
              states: ['OPEN'],
              orderBy: {field": "CREATED_AT", "direction": "DESC"}
            }
            */
          },
        },
      },
    },
  },
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pullRequest: {
          read(_, options) {
            const {
              isReference,
              toReference,
              canRead,
              readField,
            } = options

            const ref = toReference({
              __typename: "PullRequest",
              id: "not-existing-id",
            })
            /*  
              { 
                __ref: "PullRequest:non-existing-id" 
              }
            */
            isReference(ref) // true
            canRead(ref) // false
            readField("title", ref) // undefined
          },
        },
      },
    },
  },
})

const PrQuery = gql`
  query PullRequest($id: ID!) {
    pullRequest(id: $id) {
      id
      title
    }
  }
`

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pullRequest: {
          read(existingPr, options) {
            const { cache } = options

            cache.writeQuery({
              query: PrQuery,
              data: {
                __typename: "PullRequest",
                id: 1,
                title: "New title",
              },
            }) // update cache LOCALLY
            cache.readQuery({
              query: PrQuery,
              variables: { id: 1 },
            })
            cache.readFragment({
              id: "PullRequest:1",
              fragment: gql`
                fragment PRTitle on PullRequest {
                  id
                  title
                }
              `,
            })
            cache.writeFragment({
              id: "PullRequest:1",
              fragment: gql`
                fragment PRTitle on PullRequest {
                  id
                  title
                }
              `,
              data: { title: "Another title" },
            })

            cache.updateQuery(
              { query: PrQuery },
              (data) => ({
                title: `${data.pullRequest.title}!!!`,
              })
            )

            const id = cache.identify(existingPr)
            cache.modify({
              id,
              fields: {
                title(existingTitle) {
                  return existingTitle.toUpperCase()
                },
              },
            })
          },
        },
      },
    },
  },
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pullRequest: {
          read(value, options) {
            const {
              fieldName, // "pullRequest"
              field, // internal metadata about this field
              storage, // persistent field-specific cache
            } = options

            const expensiveValue =
              storage["expensiveValue"] ||
              expensiveComputation(value)
          },
        },
      },
    },
  },
})

const cache = new InMemoryCache({
  typePolicies: {
    PullRequest: {
      states: {
        merge(existing, incoming) {
          return [...existing, ...incoming]
        },
      },
    },

    Query: {
      fields: {
        pullRequest: {
          merge(existing, incoming, options) {
            const { mergeObjects } = options

            existing
            /* 
              {
                __typename: "PullRequest",
                id: 1,
                title: "A title",
                states: ["MERGED"]
              }
            */

            incoming(
              /* 
              {
                __typename: "PullRequest",
                id: 1,
                title: "New title",
                states: ["OPEN"]
              }
            */

              { ...existing, ...incoming }
            )
            /* 
               {
                __typename: "PullRequest",
                id: 1,
                title: "New title",
                states: ["OPEN"]
              }
            */

            mergeObjects(existing, incoming)
            /* 
              {
                __typename: "PullRequest",
                id: 1,
                title: "New title",
                states: ["MERGED", "OPEN"]
              }
            */
          },
        },
      },
    },
  },
})
