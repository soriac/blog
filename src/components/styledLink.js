import React from 'react';
import { Link } from 'gatsby'

export default (props) => 
    <Link 
        {...props} 
        style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `white`
        }}/>
