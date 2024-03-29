import { motion } from "framer-motion"
import styled from "styled-components"
import { highlight } from "../styles/globalStyles"
import { Technology } from "./Technology"
import { TimelineEvent } from "./TimelineEvent"
import logo from '../public/logos/reactjs-fill.svg'
import { useWindowSize } from "usehooks-ts"


export const Timeline: React.FC<any> = (props) => {

    const { width, height } = useWindowSize()

    const MainTimeline = styled(motion.div)`
        display: grid;
        grid-template-columns: 1fr 0px 1fr;  
        place-content: center;
    `
    const MobileTimeline = styled(motion.div)`
        display: grid;
        grid-template-columns: 1fr 2fr;  
        place-content: center;

        @media (max-width: 800px) {
            grid-template-columns: 1fr 4fr;
        }
    `

    const Date = styled(motion.div)`
        font-family: 'Roboto Slab', serif;
        font-weight: 300;
        font-size: 3em;
        ${highlight}
        margin: auto;

        
        text-align: center;
        padding: 1.6em;
        max-width: 60%;

        ${width < 1200 && `
            padding: 0.8em;
            font-size: 2.3em;
            max-width: 80%;
        `} 

        ${width < 800 && ` 
            font-size: 1.5em;
            writing-mode: vertical-rl;
            padding: 0.5em;
            margin: 2em auto;
        `}
    `

    const Card = styled(motion.div)`
    `

    const Line = styled(motion.div)`
        border-left: 2px solid #000;
        height: 100%;
        margin: auto;
    ` 
    let ctr = 1;
    
    return (
        width > 1200 ? <MainTimeline>
            { props.events.map((event: any) => {
                ctr++;
                if (ctr % 2 === 0) 
                    return (
                    <>
                        <Date>{event.date}</Date>
                        <Line />
                        <TimelineEvent imgWidth = {event.imgWidth} imgHeight = {event.imgHeight} title = {event.title} image = {event.logo} description = {event.description} />
                    </>
                    )
                else 
                    return (
                        <> 
                            <TimelineEvent imgWidth = {event.imgWidth} imgHeight = {event.imgHeight} title = {event.title} image = {event.logo} description = {event.description} />
                            <Line />
                            <Date>{event.date}</Date>
                        </>
                    )
            })}

        </MainTimeline> 
        : <MobileTimeline>
            { props.events.map((event: any) => {
                return (
                    <>
                        <div style={{"display": "grid"}}>
                            <Line /> 
                            <Date>{event.date}</Date>
                            <Line />
                        </div>

                        
                        
                        <TimelineEvent imgWidth = {event.imgWidth} imgHeight = {event.imgHeight} title = {event.title} image = {event.logo} description = {event.description} />

                   
                    
                    </>
                )
            })}
        </MobileTimeline>
    )
}