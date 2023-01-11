import { motion } from "framer-motion"
import styled from "styled-components"
import Image from 'next/image'


export const TimelineTechnology: React.FC<any> = (props) => {

    const MainTechnology = styled(motion.div)`
        display: flex;
        flex-direction: column;
        background-color: #272929;
        color: #fff;
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
        width: 80%;
        margin: 3em auto;
        padding: 2em;

        @media (max-width: 800px) {
            width: 90%;
            padding: 0.4em;
        }
    `


    const Title = styled(motion.h3)`
        font-size: 3em;
        font-weight: 300;
        width: 80%;

        @media (max-width: 800px) {
            font-size: 2em;
        }


    `
    const Description = styled(motion.p)`
        padding: 1em;
        letter-spacing: 0.06em;
        line-height: 1.4;
        font-size: 1.3rem;

        @media (max-width: 800px) {
            font-size: 1.2em;
        }
    `

    const ImageWrapper = styled(motion.div)`
        display: flex;
        padding: 1em;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #fff;
    `

    return (
        <MainTechnology>
            <ImageWrapper>
                <Title>{props.title}</Title>
                <Image src={props.image} width={props.imgWidth} height={props.imgHeight} />
            </ImageWrapper>
            <Description>{props.description}</Description>
        </MainTechnology>
    )
}