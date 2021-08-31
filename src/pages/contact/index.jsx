import React from "react"

//custom component
import Layout from "../../layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickle banjo
              bespoke milkshake intelligence edison bulb synth.{" "}
            </p>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickle banjo
            </p>
            <p>
              hashtag swag health goth air four dollar toast biodiesel plaid
              salvia actually pickle banjo bespoke milkshake intelligence edison
              bulb synth.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your name</label>
                <input type="text" name="email" id="email " />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                {" "}
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
