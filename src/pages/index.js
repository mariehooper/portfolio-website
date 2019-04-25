import React from "react"
import About from "../components/about"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ProjectGrid from "../components/project-grid"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ProjectGrid />
    <About />
  </Layout>
)

export default IndexPage
