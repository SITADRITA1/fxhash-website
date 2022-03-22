import { gql } from "@apollo/client"
import { Frag_GenAuthor } from "./fragments/generative-token"

export const Qu_objkt = gql`
  ${Frag_GenAuthor}
  query Query($id: Float, $slug: String) {
    objkt(id: $id, slug: $slug) {
      id
      version
      royalties
      assigned
      owner {
        id
        name
        flag
        avatarUri
      }
      name
      slug
      issuer {
        id
        name
        flag
        slug
        metadata
        ...Author
      }
      metadata
      metadataUri
      features
      rarity
      assigned
      iteration
      generationHash
      createdAt
      activeListing {
        id
        price
        issuer {
          id
          name
          flag
          avatarUri
        }
      }
      actions {
        id
        opHash
        type
        numericValue
        metadata
        createdAt
        issuer {
          id
          name
          flag
          avatarUri
        }
        target {
          id
          name
          flag
          avatarUri
        }
        objkt {
          name
          id
          iteration
        }
      }
    }
  }
`

export const Qu_objktsFeed = gql`
  ${Frag_GenAuthor}
  query Query($filters: ObjktFilter, $take: Int) {
    objkts(filters: $filters, take: $take) {
      id
      version
      royalties
      owner {
        id
        name
        flag
        avatarUri
      }
      name
      slug
      issuer {
        id
        name
        slug
        metadata
        ...Author
      }
      metadata
      features
      rarity
      assigned
      iteration
      generationHash
      createdAt
      assignedAt
      activeListing {
        id
        price
      }
    }
  }
`