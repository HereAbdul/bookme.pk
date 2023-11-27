import React from 'react'
import styled from 'styled-components'
import logo from '../imgs/bookme logo.png'

function Navbar() {
    const Nav = styled.nav`
        div{
        display: flex;
        justify-content: space-between;
        padding: 8px;
        background-color: white;
        
        }
    `
    const OneSide = styled.div`
        display: flex;
        align-items: center;
        margin-left: 10px;
        padding: 5px;
       
        .fa-bars{
            font-size: 20px;
            margin-right: 10px;
            margin-bottom: 5px;
            cursor: pointer;
             color: black;
        }
    `
    const TwoSide = styled.div`
        ul{
            display: flex;
            list-style: none;
        }
        li{
            margin-right: 30px;
            padding: 10px 5px 10px 5px;
            margin-top: 5px;
            margin-bottom: 5px;
            color: black;
            font-weight: 600;
        }
        .sign-up{
            background-color: royalblue;
            color: white;
            border-radius: 5px
        }
    `
    return (
        <Nav>
            <div>
                <OneSide>
                    <i class="fa-solid fa-bars"></i>
                    <img src={logo} alt="" />
                </OneSide>
                <TwoSide>
                    <ul>
                        <li>Help</li>
                        <li>Log in</li>
                        <li class="sign-up">Sign up</li>
                    </ul>
                </TwoSide>
            </div>
        </Nav>
    )
}

export default Navbar