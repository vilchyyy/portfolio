import { motion, useScroll } from 'framer-motion';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react';
import styled, { css } from "styled-components";
import { ScrollSection } from '../components/ScrollSection';
import { highlight } from '../styles/globalStyles';
import { Technology } from '../components/Technology';
import Reactlogo from '../public/logos/reactjs-fill.svg';
import NextLogo from '../public/logos/next-js-seeklogo.com.svg';
import MongoLogo from '../public/logos/mongodb.svg';
import SQLLogo from '../public/logos/sql.svg';
import Bolerogo from '../public/logos/logo-light (2).png';
import { Timeline } from '../components/Timeline';
import Zs6Logo from '../public/logos/logozs6git.png';
import ITFocusLogo from '../public/logos/ITfocusLogo.svg';
import { Contact } from '../components/Contact';

const Header = styled.header`
      display: flex; 
      justify-content: space-between;
      align-items: center;
      height: 100vh;
      margin: 0 5em ;
      font-size: 0.75em;

      @media (max-width: 1500px) {
        font-size: 0.7rem
      }

      @media (max-width: 1200px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 0.6rem;
      } 

      @media (max-width: 600px) {
        font-size: 0.35rem;
      }
`


const SectionOfTwo = styled.div`
      display: flex; 
      justify-content: space-between;
      align-items: center;
      margin: 0 5em ;
      flex-direction: ${(props: any) => props.column ? 'column' : 'row'};

      @media (max-width: 1500px) {
        font-size: 0.7rem
      }

      @media (max-width: 1200px) {
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 0.6rem;
      } 

      @media (max-width: 600px) {
        font-size: 0.4rem;
      }
`


const H2 = styled(motion.h2)`
      line-height: 1.1;
      margin-bottom: 1em;
      padding: 0;
      font-size: 5em;
      font-family: 'Roboto Slab', serif;
      font-weight: 300;
      letter-spacing: 0.07em;
      margin-top: 0;
      padding-left: 2em;
      padding-right: 0.5em; 

      @media (max-width: 1200px) {
        font-size: 4rem;
      }

      @media (max-width: 600px) {
        font-size: 2rem;
      }
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }

      
      
`

const TechnologiesTitle = styled(motion.h2)<{right?: string}>`
      line-height: 1.1;
      padding: 0;
      font-size: 5em;
      font-family: 'Roboto Slab', serif;
      font-weight: 300;
      color: #fff;
      background-color: #272929;
      padding: 0.2em 1em 0.2em 0.2em;

      text-align: ${(props: any) => props.right ? 'right' : 'left'};

      @media (max-width: 1200px) {
        font-size: 4rem;
      }
      @media (max-width: 600px) {
        font-size: 3rem;
        width: 100vw;
        text-align: center;
        margin: 0;
        padding: 0.5em 0;
      }
      @media (max-width: 400px) {
        font-size: 2rem;
      }

`


const Page = styled(motion.div)`
        background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png');
        background-attachment: fixed;
`

const Name = styled(motion.h1)`
      margin-right: 0.5em;
      line-height: 1.1;
      margin-bottom: 1em;
      padding: 0;
      font-family: 'Roboto Slab', serif;
      font-size: 12em;
      font-weight: 300;
      letter-spacing: 0.07em;
      @media (max-width: 1200px) {
        margin: unset;
      }
      @media (max-width: 600px) {
        font-size: 4rem;
      }
`


const PaddedHighlight = styled(motion.p)`
  ${highlight}
  margin:0;
  margin-left: 0.2em;
  padding: 0 0.2em 0.1em 0.1em;
  `

const Technologies = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  margin-top: 7em;
  flex-wrap: wrap;
`


const Home: NextPage = () => {

  const ref = useRef(null);
  return (
    <Page animate={{
      backgroundPosition: "-30000px -30000px",
    }}
    transition={{ repeat: Infinity, duration: 300, ease: 'linear'}}>
    
      <Header>
        <Name initial={{
          opacity: 0,
          y: 100,
        }} animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
        >Dawid <br/> <PaddedHighlight> Drobny </PaddedHighlight></Name>
        <H2 initial={{ opacity: 0, y:50 }} animate={{ opacity: 1, y: 20 }} transition={{
          delay: 0.5,
          duration: 0.7,
        }}> Sleek and modern <br/> web development</H2>
      </Header>
        <TechnologiesTitle> Technologies </TechnologiesTitle>


    <Technologies>

        <Technology title={ "ReactJS" } description = {
          "I used ReactJS to power many projects. I am a big fan of it and always looking for new opportunities to use it."
        } image={ Reactlogo } ></Technology>
        
        <Technology title={ "NextJS" } description = {
          "It's a framework for ReactJS. I used it to create this website. It's a great tool for creating beautiful frontends and also fullstack apps."
        } image={ NextLogo } ></Technology>

        <Technology title={ "MongoDB" } description = {
                  "It's a NoSQL database. I used it for some projects but for more complex problems i prefer SQL databases."
        } image={ MongoLogo } ></Technology>

        <Technology title={ "SQL" } description = {
                 "Beside MongoDB I also use SQL databases. I like relations and I think they are a great tool for creating complex systems."
        } image={ SQLLogo } ></Technology>

        {/* <Technology title={ "Bolero" } description = {
                        "Bolero B))). "
                } image={ Bolerogo } ></Technology> */}

    </Technologies>
    
    <br/><br/><br/>
      <TechnologiesTitle right='right'> My timeline </TechnologiesTitle>
      <br/><br/><br/><br/>
      <Timeline technologies= {[
        {
          title: "Started education in IT",
          description: "Started going to technical school no 4 in Jastrzebie-Zdroj. At the IT profile I learned and am still learning programming and networking.",
          logo: Zs6Logo,
          date: "09/2019",
          imgWidth: "150px",
          imgHeight: "150px",
        },
        {
          title: "Started learning React",
          description: "I had some background in basic HTML and CSS, but this was the real start for me. From this point I became very commited to learning new stuff.",
          logo: Reactlogo,
          date: "07/2021",
          imgWidth: "100px",
          imgHeight: "100px",
        },
        {
          title: "IT.Focus() May Internship",
          description: "I was an intern at IT.Focus() company. I was working on a project for a client. I was working on frontend and backend. I was using ReactJS and NestJS.",
          logo: ITFocusLogo,
          date: "05/2022",
          imgWidth: "300px",
          imgHeight: "300px",
        },
        {
          title: "IT.Focus August Internship",
          description: "I came back to the company during August where I focused on Frontend. Me and other interns reworked internal tool for planning work.",
          logo: ITFocusLogo,
          date: "08/2022",
          imgWidth: "300px",
          imgHeight: "300px",
        },


      ]} />

      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>

      <Contact/>
    </Page>
  )
}

export default Home
