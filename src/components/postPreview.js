import React from 'react';
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from '@emotion/styled';

const Container = styled.div`
    background-color: 'white';
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px;
    margin: ${rhythm(1)};
    background-color: white;
`

const PostPreview = ({ title, date, description, slug }) => {
    return (
        <Container>
            <h3 style={{ margin: 0 }}>
                <Link style={{ boxShadow: `none` }} to={slug}>
                    {title}
                </Link>
            </h3>
            <small>{date}</small>

            <p>{description}</p>
        </Container>

    )

}

export default PostPreview;

