import { Link } from "react-router-dom"
import styled from "styled-components"

export const Footer = ()=>{

    const FooterDiv = styled.div`
    display: grid;
    grid-template-rows: repeat(1);
    margin-top: 4%;
    text-align: left;
    margin-left: 10%;
    `

    return <FooterDiv>
        <p>Get To Know Us</p>
        <Link style={{textDecoration:"none"}} to="/about"><li>About</li></Link>
        <Link style={{textDecoration:"none"}} to="/contact"><li>Contact</li></Link>
        <Link style={{textDecoration:"none"}} to="/Privacy"><li>Privacy Policy</li></Link>
        <Link style={{textDecoration:"none"}} to="/Return"> <li>Return Policy </li></Link>
        <Link style={{textDecoration:"none"}} to="/earn"><li>Earn Money Online</li></Link>
    </FooterDiv>
}