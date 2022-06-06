/* eslint-disable @next/next/no-img-element */
import React, {useRef, useLayoutEffect} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import img1 from '../public/Images/web1.jpg'
import {motion} from 'framer-motion'

const Section = styled.section`
min-height: 100vh;
height:auto;
width:100vw;
margin: 0 auto;
overflow:hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;

position:relative;
`

const Title = styled.h1`
font-size:${props=>props.theme.fontxxxl};
font-family: cursive;
font-weight: 300;
text-shadow: 1px 1px 1px ${props=> props.theme.body};
color: ${props=>props.theme.text};
position:absolute;
top: 1rem;
left: 5%;
z-index:11;

`

const Left = styled.div`
width: 35%;
background-color: ${props => props.theme.body};
color: ${props=>props.theme.text};

min-height: 100vh;
z-index: 5;

position:fixed;
left:0;
display:flex;
justify-content: center;
align-items: center;

p{
    font-size: ${props=>props.theme.fontlg};
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

background-color: ${props=>props.theme.grey};
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
            <img src={img} alt={title} />
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
                markers:true,
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
                
                markers:true,
            },
            x: -pinWrapWidth,
            ease:'none,'
        })
ScrollTrigger.refresh();
    }, 1000);

    return () => { 

    };
},[])



  return (
    <Section ref={ref}>
        <Title data-scroll data-scroll-speed="-1">New Collection</Title>
        <Left>
            <p>
                The brand new collection is currently being developed in the USA. We create our products using the best material, including
                the use of some pure fabrics. All products are made using the best materials, from the finest cottons to the finest fabrics.
                <br />
                <br />
                We have lots of different clothing options like shoes, jackets and dresses.
                Not only clothes but we also provide unique Jewellery as well.

            </p>
        </Left>
        <Right ref={horizontalRef}>
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
            <Product img={img1} title="xyz" />
        </Right>
    </Section>
  )
}

export default Shop