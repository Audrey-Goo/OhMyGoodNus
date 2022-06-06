import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
min-height: 100vh;
width:100vw;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

position: relative;

/* background-color: yellow; */
`

const Overlay = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
width: 30vw;
height: 90vh;

background-color: aliceblue;
box-shadow: 0 0 0 5vw ${props=> props.theme.text};
border: 3px solid ${props=>props.theme.body};
z-index: 11;
`

const Title = styled.h1`
font-size:${props=>props.theme.fontxxxl};
font-family: cursive;
font-weight: 300;
text-shadow: 1px 1px 1px ${props=> props.theme.text};
color: ${props=>props.theme.body};
position:absolute;
top: 1rem;
left: 5%;
z-index:11; 
`

const NewArrival = () => {
  return (
    <Section>
    <Overlay /> 
    <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">New arrival</Title></Section>
  )
}

export default NewArrival