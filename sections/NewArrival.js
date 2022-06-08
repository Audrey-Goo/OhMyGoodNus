/* eslint-disable @next/next/no-img-element */
import React, {useRef, useLayoutEffect} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import img1 from '../public/Images/web1.jpg'

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
box-shadow: 0 0 0 4vw ${props=> props.theme.text};
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

const Text = styled.div`
width: 20%;
font-size:${props=>props.theme.fontlg};
font-weight: 300;
position:absolute;
padding:2rem;
top:0;
right:0;
z-index: 11;
`

const Container = styled.div`
position: absolute;
top: 0%;
left:50%;
transform: translate(-50%,0);
width: 25vw;
height: auto;

/* width:65%; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Item = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5rem 0;
img{
    width: 100%;
    height: auto;
    z-index: 5;
}
`

const Product = ({img, title = ''}) => {
    return(
        <Item
        >
            <img src="/Images/web1.jpg" alt={title} />
            <h2>{title}</h2>
        </Item>
    )
}

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() =>{
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();

    setTimeout(() => {
        t1.to(element, {
            scrollTrigger: {
                trigger: element,
                start:'top top',
                end: 'bottom+=100% top-=100%',
                scroller: '.App',
                scrub:true,
                pin:true,
                // markers:true,
            },
            ease:'none,'
        })

        t1.fromTo(scrollingElement, 
          {
              y:'0',
          },
          {
            y:'-100%',
            scrollTrigger: {
                trigger: scrollingElement,
                start:'top top',
                end: 'bottom top',
                scroller: '.App',
                scrub:true,
                
                // markers:true,
            },
        })
ScrollTrigger.refresh();
    }, 1000);

    return () => { 
      t1.kill();
      //ScrollTrigger.kill();
    };
},[])


  return (
    <Section ref={ref} id='new-arrival'>
    <Overlay /> 
    <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">New arrival</Title>

    <Container ref={ScrollingRef}>
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
        </Container>
    
    <Text data-scroll data-scroll-speed="-4">
        We are a fashion studio based in California. We create unique designs that will blow your mind. We also share fashion articles.
        Fashion is an Art that can be grasped by everyone.
        <br />
        <br />
        We are very dedicated to our project. We offer unique and creative products to a wide range of people. We have a 
        variety of styles, but for most people, all of the options are in the box.
        We specialize in making things that make you happy.
        <br /> 
        <br />
        We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people.
    </Text>
    
    </Section>
  )
}

export default NewArrival