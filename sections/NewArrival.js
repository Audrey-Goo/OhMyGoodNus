/* eslint-disable react/no-unescaped-entities */ 
/* eslint-disable @next/next/no-img-element */ 
import React, {useRef, useLayoutEffect} from 'react' 
import styled from 'styled-components' 
import {gsap} from 'gsap/dist/gsap' 
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger' 
 
import Image from 'next/image' 
import img1 from '../public/Images/mencasual.jpg' 
import img2 from '../public/Images/menformal.jpg' 
import img3 from '../public/Images/menlounge.jpg' 
import img4 from '../public/Images/menathleisure.jpg' 
import img5 from '../public/Images/menpreppy.jpg' 
import img6 from '../public/Images/menhighend.jpg' 
 
 
const Section = styled.section` 
min-height: 100vh; 
width:100vw; 
margin: 0 auto; 
font-family: serif; 
display: flex; 
justify-content: center; 
align-items: center; 
background-color: #e5ded2; 
 
position: relative; 
` 
 
const Overlay = styled.div` 
position: absolute; 
top:50%; 
left:50%; 
transform: translate(-50%, -50%); 
width: 30vw; 
height: 90vh; 
 
background-color: #e5ded2; 
box-shadow: 0 0 0 4vw ${props=> props.theme.text}; 
border: 3px solid ${props=>props.theme.body}; 
z-index: 11; 
` 
 
const Title = styled.h1` 
font-size:${props=>props.theme.fontxxxl}; 
font-family: serif; 
font-weight: 300; 
text-shadow: 1px 1px 1px ${props=> props.theme.text}; 
color: #4d4440; 
position:absolute; 
top: 1rem; 
left: 5%; 
z-index:11;  
background-color: #e5ded2; 
 
` 
 
const Text = styled.div` 
width: 20%; 
font-size:${props=>props.theme.fontxl}; 
font-weight: 300; 
position:absolute; 
padding:2rem; 
top:0; 
right:0; 
z-index: 11; 
background-color: #e5ded2; 
color: #8d7b72; 
 
` 
 
const Container = styled.div` 
position: absolute; 
top: 0%; 
left:50%; 
transform: translate(-50%,0); 
width: 25vw; 
height: auto; 
background-color: #e5ded2; 
 
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
            <Image src={img} alt={title} /> 
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
    <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">Men's</Title> 
 
    <Container ref={ScrollingRef}> 
            <Product img={img1} title="Casual" /> 
            <Product img={img2} title="Formal" /> 
            <Product img={img3} title="Lounge" /> 
            <Product img={img4} title="Athleisure" /> 
            <Product img={img5} title="Preppy" /> 
            <Product img={img6} title="High end" /> 
        </Container> 
     
    <Text data-scroll data-scroll-speed="-4">
        Find your personal style with the latest trending looks for men. 
        <br /> 
        <br /> 
        From workwear to weekend, our album will help you discover your ideal wardrobe. 
        <br />  
        <br /> 
         
    </Text> 
     
    </Section> 
  ) 
} 
 
export default NewArrival