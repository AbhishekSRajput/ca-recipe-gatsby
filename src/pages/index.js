import React from "react"
import { StaticImage } from "gatsby-plugin-image"

//custom component
import Layout from "../layout"
//graphQl
import FetchData from "../examples/FetchData"

const Home = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple Recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <FetchData />
      </main>
    </Layout>
  )
}

export default Home
