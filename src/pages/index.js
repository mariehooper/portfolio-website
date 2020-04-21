import React from "react"
import About from "../components/about"
import Hero from "../components/hero"
import Jobs from "../components/jobs"
import Projects from "../components/project-grid"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Jobs />
    <Projects />
  </Layout>
)

export default IndexPage
