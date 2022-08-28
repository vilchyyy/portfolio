import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const TextSection = styled(motion.p)`
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  font-size: 3em;
  line-height: 1.6;
  letter-spacing: 0.06em;
    margin-bottom: 0.5em;
`


export const ScrollSection: React.FC<any> = (props) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["0 0", "0.3 0.3"]
    });

    return (
        <>
            <div  ref={ref}>
                <TextSection style={ { "opacity":  scrollYProgress, }}>
                    {props.children}
                </TextSection>
            </div>
        </>
    )
}