import { motion } from "framer-motion"
import styled from "styled-components"
import Image from 'next/image'
import linkedinLogo from '../public/logos/linkedinLogo.svg'
import envelope from '../public/logos/Envelope.svg'
import githubLogo from '../public/logos/github.svg'
import Link from "next/link"
import reactLogo from '../public/logos/reactjs-fill.svg'
import { useWindowSize } from "usehooks-ts"

export const Contact: React.FC<any> = (props) => {

    const { width, height } = useWindowSize()

    const MainContact = styled(motion.div)`
        display: flex;
        background-color: #272929;
        color: #fff;
        padding: 4em 2em;
        @media (max-width: 1000px) {
            justify-content: center;
        }
        @media (max-width: 500px) {
            font-size: 0.8em;
        }
        @media (max-width: 400px) {
            font-size: 0.6em;
        }
    `

    const Description = styled(motion.span)`
        padding: 1em;
        letter-spacing: 0.06em;
        line-height: 1.4;
        font-size: 1.3rem;
        font-family: 'Roboto Slab', serif;
        font-weight: 300;


        @media (max-width: 800px) {
            font-size: 1.2em;
        }
    `

    const Name = styled(motion.h1)`
        line-height: 1.4;
        font-family: 'Roboto Slab', serif;
        font-size: 6em;
        font-weight: 300;
        letter-spacing: 0.07em;
        padding: 0em 1em 0.3em 0.5em;
        border-right: 1px solid #fff;
        margin: 0;
        @media (max-width: 1400px) {
            border-right: none;
        }
        @media (max-width: 1100px) {
            font-size: 5em;
        }

    `
    const PaddedHighlight = styled(motion.span)`
        font-weight: 400;
        background-color: #fff;
        color: #272929;
        margin:0;
        margin-left: 0.2em;
        padding: 0 0.2em 0.1em 0.1em;
    `
    const LinkEssa = styled(motion.div)`
        display: flex;
        align-items: center;
        
    `
    const LinksWrapper = styled(motion.div)`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 1em 0 6em;
        border-left: 1px solid #fff;

        @media (max-width: 1400px) {
            border-left: none;
        }
        @media (max-width: 1000px) {
            gap: 1.5em;
        } 
        @media (max-width: 400px) {
            padding: 0;
        }
        
    `
    const LogoDiv = styled(motion.div)`
        margin: auto;
        width: 10em;
        height: 10em;

        @media (max-width: 1100px) {
            width: 0;
        }
    `


    return (
        <MainContact>
            { width > 1000 && <Name>Dawid <br/> <PaddedHighlight> Drobny </PaddedHighlight></Name>}
            {width > 1000 &&<LogoDiv

              animate={{  rotate: 360 }}
              transition={{ ease: "linear", repeat: Infinity, duration: 4 }}
            >
                
                {width > 1400 && <Image src={reactLogo} width={170} height={170} />}
            </LogoDiv>}
            <LinksWrapper>
                    <LinkEssa>
                        <Image src={linkedinLogo} width={70} height={70} />
                        <Description><Link href="https://www.linkedin.com/in/dawid-drobny-1a145322b/">Check me out on linkedin</Link></Description>
                    </LinkEssa>
                    <LinkEssa>
                        <Image src={githubLogo} width={70} height={70} />
                        <Description><Link href="https://github.com/vilchyyy">Check me out on github</Link></Description>
                    </LinkEssa>
                    <LinkEssa>
                        <Image src={envelope} layout="fixed" width={70} height={70} />
                        <Description>dawdrobny@gmail.com</Description>
                    </LinkEssa>


            </LinksWrapper>
        </MainContact>
    )
}