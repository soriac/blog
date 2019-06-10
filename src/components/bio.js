import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import styled from '@emotion/styled';
import { rhythm } from "../utils/typography"

const Container = styled.div`
    display: flex;
    padding: 10px;
    margin-bottom: ${rhythm(1)};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    background-color: white;
    border-radius: 5px;
`

const StyledImage = styled(Image)`
  min-width: 100px;
  max-height: 100px;
  align-self: center;
  margin-right: 10px;
`

function Bio() {
  const data = useStaticQuery(bioQuery);
  const author = data.site.siteMetadata.author;

  return (
    <Container>
      <StyledImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Escrito por <a href="https://www.linkedin.com/in/cristian-soria/">{author}</a>, desde Buenos Aires, Argentina.
        Trabajo en como full-stack dev y dando talleres de React. <br />
        Estoy preparando un curso de desarrollo full-stack, para fines de Julio de 2019, con <a href="https://thejavalistener.com">Pablo Sznajdleder</a>,
        autor del libro <a href="https://www.alfaomega.com.mx/default/catalogsearch/result/?q=sznajdleder">Java a Fondo</a>.
      </p>
    </Container>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
