import { gql, useQuery } from "@apollo/client"

const getOpenPullRequests = gql`
  query MyPullRequests($first: Int, $after: String) {
    viewer {
      pullRequests(
        first: $first, 
        after: $after, 
        states: [OPEN], 
        orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          cursor # cursor for this node
          node {
            id
            title
            url
          }
        }

        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor # cursor for the first item in the page
          endCursor # cursor for the last item in the page
        }
    }
  }
`

const PAGE_SIZE = 10

function Pagination() {
  const { data, fetchMore } = useQuery(
    getOpenPullRequests,
    { variables: { first: PAGE_SIZE } }
  )

  const onLoad = (cursor) => {
    fetchMore({ after: pageInfo.endCursor })
  }

  const pullRequests =
    data.viewer.pullRequests.edges.map(prop("node"))
  const pageInfo = data.viewer.pageInfo

  return (
    <div>
      {pageInfo.hasNextPage && (
        <button onClick={onLoad}>Next</button>
      )}
    </div>
  )
}
