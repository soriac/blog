import React from "react"
import Title from './title';

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <Title big={location.pathname === rootPath}/>
        </header>

        <main>
          {children}
        </main>

        <footer style={{marginTop: rhythm(1), color: 'white'}}>
          © {new Date().getFullYear()}, Hecho con
          {` `}
          <a href="https://www.gatsbyjs.org"
             style ={{
               textDecoration: `none`,
               color: `white`
             }}
          >Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
