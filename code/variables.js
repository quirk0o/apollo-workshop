import { gql, useQuery } from "@apollo/client"

const getEcgSubject = gql`
  query EcgSubject($id: ID!) {
    ecg(id: $id) {
      subject {
        firstName
        lastName
      }
    }
  }
`

function Subject({ id }) {
  const {
    data: {
      ecg: { subject },
    },
  } = useQuery(getEcgSubject, { variables: { id } })

  return (
    <dl>
      <dt>Name</dt>
      <dd>
        {subject.firstName} {subject.lastName}
      </dd>
    </dl>
  )
}
