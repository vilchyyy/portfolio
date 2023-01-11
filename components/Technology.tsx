import { motion } from "framer-motion"
import styled from "styled-components"
import Image from 'next/image'


export const Technology: React.FC<any> = (props) => {

    const MainTechnology = styled(motion.div)`
        display: flex;
        flex-direction: column;
        background-color: #272929;
        width: 350px;
        padding: 1em;
        color: white;
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
        font-size: 1.2em;
        margin: 1em;
    `

    const Title = styled(motion.h3)`
        font-size: 3em;
        text-align: center;
        margin: 0.2em 0;
        width: 100%;
        font-weight: 300;
        border-bottom: 1px solid white;
        border-top: 1px solid white;
        padding: 0.5em 0;
        @media (max-width: 400px) { 
            font-size: 2.5rem;
        }
    `
    const Description = styled(motion.p)`
        padding: 0.5em;
        letter-spacing: 0.06em;
        line-height: 1.4;
    `

    const ImageWrapper = styled(motion.div)`
        text-align: center;
        margin: 1.5em 0;
    `

    return (
        <MainTechnology>
            <ImageWrapper>
                <Image src={props.image} width={"150px"} height={"150px"} />
            </ImageWrapper>

            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </MainTechnology>
    )
}