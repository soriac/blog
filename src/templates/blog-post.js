import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { scale, rhythm } from "../utils/typography"
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

  .gatsby-highlight {
    border-radius: 5px;
  }

  small {
    margin: 0;
  }

  h2, h3 {
    margin: ${rhythm(1)} 0 0;
  }
  
  code {
    border-radius: 0 !important;
  }
  
  pre {
    box-shadow: 0 0 10px rgba(0, 0, 0.25);
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <Container>
          <h1 style={{margin: 0}}>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              margin: 0,
            }}
          >
            {post.frontmatter.date}
          </p>

          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
