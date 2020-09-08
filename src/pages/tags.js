import React from "react"
import { Link, graphql } from "gatsby"

import { kebabCase } from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allTags = data.allMarkdownRemark.group

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Minhas tags" />
      <div>
        <h1>Tags</h1>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
