import styled from "styled-components";
export const Head = styled.header`
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
export const Nav = styled.nav`
div{
display: flex;
justify-content: space-between;
padding: 5px;
background-color: white;

}
`
export const OneSide = styled.div`
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
export const TwoSide = styled.div`
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