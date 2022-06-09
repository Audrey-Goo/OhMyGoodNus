/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
position: relative;
min-height: 100vh;
width: 80vw;

display: flex;
margin: 0 auto;
`

const Title = styled.h1`
font-size:${props=>props.theme.fontBig};
font-family: cursive;
font-weight: 300;

position:absolute;
top: 1rem;
left: 5%;
z-index: 5;

`

const Left = styled.div`
font-size:${props=>props.theme.fontxl};
font-weight: 300;
position:relative;
z-index: 5;
margin-top:20%;
width:50%;
`

const Right = styled.div`
width:50%;
position:relative;
img{
    width:100%;
    height:auto;
}

.small-img-1{
    width:40%;
    position: absolute;
    right:95%;
    bottom:30%;
}

.small-img-2{
    width:40%;
    position: absolute;
    left:80%;
    bottom:40%;
}
`

const About = () => {
  return (
    <Section id='fixed-target' className='about'>
      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
          About Us 
      </Title>
    <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Personal style is something that each of us has; we just have to identify it, understand it, and then live it. It projects
        your mood, personality, and you as a whole, reflecting your interests, lifestyle, inspirations, and your past.
        <br />
        <br />
        Looking for a new way to style your favourite pieces?  
        <br /> 
        <br />
        Interested in exploring new styles but not sure where to start? 
        <br />
        <br />
        Read on for the best outfit inspiration and ideas for every occasion.
    </Left>
    <Right>
        <img src='/Images/iu1.jpg' alt="About us" />
        <img data-scroll data-scroll-speed="5" src='/Images/iu2.jpg' className="small-img-1" alt="About us" />
        <img data-scroll data-scroll-speed="-2" src='/Images/iu4.png' alt="About us" className='small-img-2'/>
    </Right>
    </Section>
  )
}

export default About