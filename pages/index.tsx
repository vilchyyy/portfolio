import { motion, useScroll } from 'framer-motion';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react';
import styled from "styled-components";
import { ScrollSection } from '../components/ScrollSection';

const Header = styled.header`
      display: flex; 
      justify-content: space-between;
      align-items: center;
      height: 100vh;
      margin: 0 5em ;

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
      
`


const Page = styled(motion.div)`
        background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png');
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
`

const Logo = styled(Image)`
  margin-bottom: 1em;
  margin-right: 2em;
`
const FaceWrappeer = styled(motion.div)`
  background-color: #5d5f5f;
  padding: 1.5em;
  padding-top: 0;
  border-radius: 2em;
  width: 25em;
`
const About = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;


`
const Face = styled(Image)`
  border-radius: 2em;
`

const ColumnWrapper = styled(motion.div)`
  margin-top: 6em;
  display: flex;
  flex-direction: column;
  max-width: 65%;
  justify-content: center;
  align-self: flex-start;
`

const TextSection = styled(motion.p)`
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  font-size: 3em;
  line-height: 1.6;
  letter-spacing: 0.06em;
`

const StickyWrapper = styled(motion.div)`
  position: sticky;
  top: -1.5em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


const Home: NextPage = () => {

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
        >Dawid <br/> Drobny</Name>
        <H2 initial={{ opacity: 0, y:50 }} animate={{ opacity: 1, y: 20 }} transition={{
          delay: 0.5,
          duration: 0.7,
        }}> Sleek and modern <br/> web development</H2>
      </Header>
      <SectionOfTwo>
        <About>
          
          <StickyWrapper>
            <H2>About me</H2>

              <Face width={400} height={550} src="/zz.png" alt="my face " />
          </StickyWrapper>
          <ColumnWrapper>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <ScrollSection>
            Hi. My name is Dawid Drobny. I am a web developer based in Poland. I am a self-taught web developer with a passion for creating clean and elegant websites.
          </ScrollSection>
          <ScrollSection>
            I work on both frontend and backend technologies. I am a fast learner and I am always looking for new technologies to learn.
          </ScrollSection>
          <ScrollSection>
            Beside coding I also like to play board games, hangout with friends and play video games.
          </ScrollSection>
          <ScrollSection>
            Last thing about me, I am a huge lover of cats. I just like every aspect of them, also, I have a cat named Yuumi.
          </ScrollSection>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          </ColumnWrapper>
        </About>
      </SectionOfTwo>
      <SectionOfTwo>
        <H2 style={{ "margin": "0 2em 0 auto" }}>Technologies</H2>
      </SectionOfTwo>
      <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </Page>
  )
}

export default Home
