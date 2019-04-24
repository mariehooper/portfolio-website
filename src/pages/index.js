import React from "react"
import About from "../components/about"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ProjectGrid from "../components/project-grid"

const IndexPage = () => (
  <Layout>
    <Hero />
    <ProjectGrid />
    <About />
  </Layout>
)

export default IndexPage
