import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './styles';

type Props = {
	isLogin: boolean;
};

export default function Nav({isLogin}: Props) {
  return (
    <NavWrapper>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='post'>Posts</NavLink></li>
        <li><NavLink to='about'>About</NavLink></li>
        <li><NavLink to='contact'>Contact</NavLink></li>
        { <li><NavLink to='login'>Login</NavLink></li>}
      </ul>
    </NavWrapper>
  )
}


