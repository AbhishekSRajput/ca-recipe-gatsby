import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

//custom components
import Layout from "../../layout"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              voluptas eaque voluptates deserunt, minima eligendi ducimus
              reprehenderit, maiores et eum enim quod quaerat ipsa doloremque ab
            </p>
            <p>
              reprehenderit, maiores et eum enim quod quaerat ipsa doloremque ab
              ipsam esse hic quae.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../../assets/images/about.jpeg"
            alt="person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
