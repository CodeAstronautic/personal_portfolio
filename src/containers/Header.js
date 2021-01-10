import React, { Component } from 'react';
import { Link } from 'react-router'
import styled from 'styled-components';

const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: black;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`


class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <div >
          {/* <ul className="uls">
            <li><a href="#/">ABOUT</a></li>
            <li><a href="#/code">CODE</a></li>
            <li><a href="#/writing">BLOG</a></li>
            <li><a href="#/life">LIFE</a></li>
            <li><a href="#/contact">CONTACT</a></li>
          </ul> */}
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/code'>CODE</NavLink>
          <NavLink to='/writing'>BLOG</NavLink>
          <NavLink to='/life'>LIFE</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        <Link to="/">
          <ProfileImage src={require('../assets/confettiCropped.jpg')} alt='Pooja Mishra'/>
          <ProfileTitle>Pooja Mishra</ProfileTitle>
        </Link>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;