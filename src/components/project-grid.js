import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styles from "../styles/projectgrid.module.scss"
import { GithubIcon, LinkIcon, CodeSandboxIcon } from "./icons"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            name
            tech
            overview
            live_site
            github_link
            codesandbox_link
          }
        }
      }
    }
  `)
  return (
    <section id="work">
      <div className={styles.wrap}>
        <h2 className={styles.sectionHeader}>Things I've worked on</h2>
        <ul className={styles.grid}>
          {data.allProjectsJson.edges.map(({ node }) => (
            <li className={styles.block} key={node.name}>
              <div className={styles.content}>
                <div>
                  {node.github_link && (
                    <a
                      href={node.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {GithubIcon(styles.icon)}
                    </a>
                  )}
                  {node.codesandbox_link && (
                    <a
                      href={node.codesandbox_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {CodeSandboxIcon(styles.icon)}
                    </a>
                  )}
                  {node.live_site && (
                    <a
                      href={node.live_site}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {LinkIcon(styles.icon)}
                    </a>
                  )}
                  <h3>{node.name}</h3>
                  <p>{node.overview}</p>
                </div>

                <ul>
                  {node.tech.map((tech, idx) => (
                    <li key={`${tech}- ${idx}`}>{tech}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
