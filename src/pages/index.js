import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => 
          <PostPreview
            key={node.fields.slug}
            title={node.frontmatter.title || node.fields.slug}
            date={node.frontmatter.date}
            description={node.frontmatter.description || node.excerpt}
            slug={node.fields.slug}
          />
        )}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
