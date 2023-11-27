import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
function Header() {
  const Header = styled.header`
     width: 100%;
     border-bottom: 1px solid gainsboro;
     div{
      background-color: royalblue;
      color: white;
      padding: 8px;
      text-align: center;
      i{
        color: yellow;
        font-size: 20px;
        margin-right: 5px;
      }
      a{
           text-decoration: none;
           border-bottom: 1px solid white;
           color: white;
           font-family: 600;
      }
     }

  `
  return (
    <Header>
      <div>
        <i class="fa-solid fa-chess-queen"></i>
        Become a member of <strong>BookmeBro</strong> and get amazing discounts and exclusive perks. <a href="#">Subscribe Now</a>
      </div>
      <Navbar />
    </Header>
  )
}

export default Header