import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query MetaData {
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

const FetchData = () => {
  //hooks can only be run inside a function component and if component name is upperCase
  const data = useStaticQuery(getData)
  const {
    site: {
      info: { title },
    },
  } = data
  return (
    <>
      <h4>The site Title is: {title}</h4>
    </>
  )
}

export default FetchData
