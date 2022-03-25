import { gql, useQuery } from "@apollo/client"

const getUser = gql`
  query User {
    currentUser {
      username
    }
  }
`

function Nav() {
  const {
    data: { currentUser },
  } = useQuery(getUser)

  return <nav>Hello ${currentUser.username}</nav>
}
