import { gql, useQuery } from "@apollo/client"

const getUser = gql`
  query User {
    currentUser {
      id
      username
    }
  }
`

function Nav() {
  const { loading, error, data } = useQuery(getUser)

  if (loading) return "Loading…"
  if (error) return "Failed to load"

  return <nav>Hello ${data.currentUser.username}</nav>
}

// api/graph/helpers.js

export const queryResultToStatus = ({
  loading,
  error,
  called,
  data,
}) => {
  if (!called) return QueryStatus.Idle
  if (loading) return QueryStatus.Loading
  if (error) return QueryStatus.Error
  if (data) return QueryStatus.Success
  throw new Error(
    "Apollo query resulted in an unexpected state: ",
    {
      called,
      loading,
      error,
      data,
    }
  )
}
