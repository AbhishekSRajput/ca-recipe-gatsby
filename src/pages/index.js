import React from "react"
import { Link } from "gatsby"

//custom component
import Layout from "../layout"

const Home = () => {
  return (
    <Layout>
      <h1>Home page</h1>
      <div>Hello world!!!!</div>
      <p>reload is working well??</p>
      <Link to="/about">About</Link>
    </Layout>
  )
}

export default Home
