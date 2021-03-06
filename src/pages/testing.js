import React from "react"
import { graphql } from "gatsby"
import Gallery from "../examples/Gallery"

const Testing = ({ data }) => {
  const author = data.site.info.author
  return (
    <>
      <h2>hello</h2>
      <h3>{author}</h3>
      <Gallery />
    </>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        author
        complexData {
          age
          name
        }
        description
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`

export default Testing
