import React from 'react';
import StyledLink from './styledLink';
import {useStaticQuery, graphql } from 'gatsby';
import { scale, rhythm } from "../utils/typography"

const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const Title = ({big}) => {
    const data = useStaticQuery(query);
    const title = data.site.siteMetadata.title;

    if (big)
        return <BigTitle title={title} />;
    else
        return <SmallTitle title={title} />;
};

const SmallTitle = ({title}) => {
    const style = {
        fontFamily: 'Monserrat, sans-serif',
        marginTop: 0
    };

    return (
        <h3 style={style}>
            <StyledLink to='/'>
                {title}
            </StyledLink>
        </h3>
    )
};

const BigTitle = ({title}) => {
    const style = { 
        ...scale(1.5),
        marginBottom: rhythm(1)
    };

    return (
        <h1 style={style}>
            <StyledLink to='/'>
                {title}
            </StyledLink>
        </h1>
    )
}

export default Title;