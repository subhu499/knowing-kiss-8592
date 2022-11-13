import React from 'react'
import styled from "styled-components";

const Ptag = styled.p`
    font-size: 18px;
    line-height: 1.58;
    letter-spacing: -0.003em;
    font-weight: 400;
    font-style: normal;
    --x-height-multiplier: 0.375;
    --baseline-multiplier: 0.17;
    font-family: medium-content-serif-font,Georgia,Cambria,"Times New Roman",Times,serif;
    margin: 0 0 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

function About() {
  return (
    <div>
    <Ptag>Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories.</ Ptag>
    <Ptag>   We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.</Ptag>
 
     <Ptag>  Ideakart is a site that gives u an idea and a platform for the book you want. We offer a huge collection of books in diverse categories.</Ptag>
  
     <Ptag>    We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.</Ptag>
    </div>


  )
}

export default About