import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexDiv = styled.div`
display: flex;
margin-left: 276px;
`
const CentDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: green;
`

function UserCard (props) {
    return (
        <FlexDiv>
            <div>
                <img src={props.users.avatar_url} />
            </div>
            <CentDiv>
                <h1>UserName:{props.users.login}</h1>
                <p>Bio: {props.users.bio}</p>
                <p>Company: {props.users.company}</p>
                <p>Email: {props.users.email}</p>
                <Link to='/followers'>Followers</Link>
                <a href={props.users.repos_url}><p>Repos data: {props.users.repos_url}</p></a>
            </CentDiv>
        </FlexDiv>
    )
}

export default UserCard;