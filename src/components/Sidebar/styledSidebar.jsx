import styled from "styled-components";
export const SideBar = styled.div`
height: 100vh;
width: 170px;
background-color: rgb(255, 253, 253);
transition: 0.3s;
border-right: 1px solid gray;

ul{
    list-style: none;
}
.active {
background-color: rgba(128, 128, 128, 0.32);
}
li{
height: 50px;
margin-top: 30px;
display: flex;
align-items: center;
padding: 10px;
cursor: pointer;
&:hover{
    background-color: rgba(128, 128, 128, 0.32);
    transition: all .3s;
}
i{
 display: flex;
 align-items: center;
 color: rgb(75, 75, 75);
 justify-content: center;
 min-width: 60px;
 font-size: 20px;
}
a {
height: 100%;
width: 100%;
display: flex;
align-items: center;
text-decoration: none;
border-radius: 6px;
transition: 0.4s;
}
span{
    margin-left: 1rem;
    color: rgb(75, 75, 75);
    transition: 0.2s;
}

}

`