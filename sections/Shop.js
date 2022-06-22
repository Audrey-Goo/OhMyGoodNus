/* eslint-disable react/no-unescaped-entities */ 
/* eslint-disable @next/next/no-img-element */ 
import React, {useRef, useLayoutEffect} from 'react' 
import styled from 'styled-components' 
import {gsap} from 'gsap/dist/gsap' 
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger' 
import {motion} from 'framer-motion' 
 
import Image from 'next/image' 
import img1 from '../public/Images/iucasual.jpg' 
import img2 from '../public/Images/iuformal.jpg' 
import img3 from '../public/Images/iuathleisure.jpg' 
import img4 from '../public/Images/iuchic.jpg' 
import img5 from '../public/Images/iuvintage.jpg' 
import img6 from '../public/Images/iugirly.jpg' 
 
 
const Section = styled.section` 
min-height: 100vh; 
height:auto; 
width:100vw; 
margin: 0 auto; 
overflow:hidden; 
font-family: serif; 
display: flex; 
justify-content: flex-start; 
align-items: flex-start; 
 
position:relative; 
` 
 
const Title = styled.h1` 
font-size:${props=>props.theme.fontxxxl}; 
font-family: serif; 
font-weight: 300; 
text-shadow: 1px 1px 1px ${props=> props.theme.text}; 
background-color: #e5ded2; 
color: #4d4440; 
position:absolute; 
top: 1rem; 
left: 5%; 
z-index:11; 
 
` 
 
const Left = styled.div` 
width: 35%; 
background-color: #e5ded2; 
color: #8d7b72; 
 
min-height: 100vh; 
z-index: 5; 
 
position:fixed; 
left:0; 
display:flex; 
justify-content: center; 
align-items: center; 
 
p{ 
    font-size: ${props=>props.theme.fontxl}; 
    font-weight: 300; 
    width: 80%; 
    margin: 0 auto; 
} 
` 
 
const Right = styled.div` 
position: absolute; 
left: 35%; 
padding-left: 30%; 
min-height: 100vh; 
 
background-color: #e5ded2; 
/* width:65%; */ 
display: flex; 
justify-content: flex-start; 
align-items: center; 
 
h1{ 
    width: 5rem; 
    margin: 0 2rem; 
} 
` 
 
const Item = styled(motion.div)` 
width: 20rem; 
margin-right: 6rem; 
 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
img{ 
    width: 100%; 
    height: auto; 
    cursor:pointer; 
} 
h1{ 
    display: inline-block; 
    width: fit-content; 
    font-weight: 500; 
    text-align: center; 
    cursor: pointer; 
} 
` 
 
const Product = ({img, title = ''}) => { 
    return( 
        <Item 
        initial={{filter:'grayscale(100%)'}} 
        whileInView={{filter:'grayscale(0%)'}} 
        transition={{duration:0.5}} 
        viewport={{once:false, amount:'all'}} 
        > 
            <Image src={img} alt={title} /> 
            <h1>{title}</h1> 
        </Item> 
    ) 
} 
 
 
const Shop = () => { 
gsap.registerPlugin(ScrollTrigger); 
 
const ref = useRef(null); 
const horizontalRef = useRef(null); 
 
 
useLayoutEffect(() =>{ 
    let element = ref.current; 
    let scrollingElement = horizontalRef.current; 
    let pinWrapWidth = scrollingElement.offsetWidth; 
    let t1 = gsap.timeline(); 
 
    setTimeout(() => { 
        t1.to(element, { 
            scrollTrigger: { 
                trigger: element, 
                start:'top top', 
                end: pinWrapWidth, 
                scroller: '.App', 
                scrub:true, 
                pin:true, 
                // markers:true, 
            }, 
            height: `${scrollingElement.scrollWidth}px`, 
            ease:'none,' 
        }) 
 
        t1.to(scrollingElement, { 
            scrollTrigger: { 
                trigger: scrollingElement, 
                start:'top top', 
                end: pinWrapWidth, 
                scroller: '.App', 
                scrub:true, 
                 
                // markers:true, 
            }, 
            x: -pinWrapWidth, 
            ease:'none,' 
        }) 
ScrollTrigger.refresh(); 
    }, 1000); 
 
    return () => {  
        t1.kill(); 
        // ScrollTrigger.kill(); 
      }; 
},[]) 
 
 
 
  return ( 
    <Section ref={ref} id='shop'> 
        <Title data-scroll data-scroll-speed="-1">Women's</Title> 
        <Left> 
            <p> 
                From smart suits to sophisticated separates, we handpicked our favourite outfits for women 
                to wear all season long. 
                <br />
                <br /> 
                 
 
            </p> 
        </Left> 
        <Right ref={horizontalRef}> 
            <Product img={img1} title="Casual" /> 
            <Product img={img2} title="Formal" /> 
            <Product img={img3} title="Athleisure" /> 
            <Product img={img1} title="Chic" /> 
            <Product img={img5} title="Vintage" /> 
            <Product img={img6} title="Girly" /> 
        </Right> 
    </Section> 
  ) 
} 
 
export default Shop