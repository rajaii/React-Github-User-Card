import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
margin: 0 auto;
background-color: green;
width: 500px
`

function FollowerCard (props) {
    return (
        <Card>
            <h1>Followers: {props.followers[0]}</h1>
            <a href={props.followers[1]}><p>Url: {props.followers[1]}</p></a>
        </Card>
    )
}

export default FollowerCard;