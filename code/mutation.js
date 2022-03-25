import { gql, useMutation } from "@apollo/client"

const finalizeEcg = gql`
  mutation FinalizeEcg($id: UUID!) {
    finalizeEcg(id: $id) {
      state
    }
  }
`

function FinalizeButton({ id }) {
  const [finalize, result] = useMutation(finalizeEcg)
  const status = queryResultToStatus(result)

  if (status === QueryStatus.Loading) return "Loading…"
  if (status === QueryStatus.Error)
    return "Failed to load"

  return (
    <button
      onClick={() => finalize({ variables: { id } })}
    >
      Finalize
    </button>
  )
}
