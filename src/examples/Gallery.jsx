import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            height: 200
            width: 200
            placeholder: BLURRED
            layout: FIXED
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const getData = useStaticQuery(query)
  const imagesData = getData.allFile.nodes
  return (
    <Wrapper>
      {imagesData.map((image, index) => {
        const { name } = image
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <h5>{name}</h5>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin: 1rem;
  }

  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
