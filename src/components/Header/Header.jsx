import React from 'react'
import logo from '../imgs/bookme logo.png'
import { Head,Nav,OneSide,TwoSide } from './styledHeader'
function Header() {
  return (
    <Head>
      <div>
        <i className="fa-solid fa-chess-queen"></i>
        Become a member of <strong>BookmeBro</strong> and get amazing discounts and exclusive perks. <a href="#">Subscribe Now</a>
      </div>
      <Nav>
        <div>
          <OneSide>
            <i className="fa-solid fa-bars"></i>
            <img src={logo} alt="" />
          </OneSide>
          <TwoSide>
            <ul>
              <li>Help</li>
              <li>Log in</li>
              <li className="sign-up">Sign up</li>
            </ul>
          </TwoSide>
        </div>
      </Nav>
    </Head>
  )
}

export default Header