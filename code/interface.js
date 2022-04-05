import { gql, useMutation } from "@apollo/client"

const starRepo = gql`
  mutation StarRepo($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        stargazerCount
        ... on Repository {
          homepageUrl
        }
      }
    }
  }
`

function StarButton({ id }) {
  const [addStar, result] = useMutation(starRepo)
  const status = queryResultToStatus(result)

  if (status === QueryStatus.Loading) return "Loading…"
  if (status === QueryStatus.Error)
    return "Failed to load"

  return (
    <button
      onClick={() => addStar({ variables: { id } })}
    >
      ⭐️
    </button>
  )
}
