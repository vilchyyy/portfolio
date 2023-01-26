import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { IconBrandGithub, IconBrandMysql, IconBrandNextjs, IconBrandTailwind, IconBrandTypescript, IconWorld } from "@tabler/icons-react";

import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import styled from "styled-components";



const ProjectMain = styled(motion.div)`
  font-family: 'Roboto Slab', serif;
  background-color: #272929;
  font-size: 2rem;
  color: #fff;
  font-weight: 300; 
  padding: 0.5em;
  margin: 1em 0.5em;
`

const Name = styled(motion.h2)`
    font-size: 3rem;
    font-weight: 300;
    border-bottom: 1px solid #fff;
    margin: 0;
    margin-bottom: 1em;
    padding: 0.7em;
    text-align: center;
`

const Text = styled.p`
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 2em;
    border-top: 1px solid #fff;
    padding: 0.7em;

`
const Flex = styled(motion.div)`
    display: flex;
    justify-content: center;
    gap: 1em;
    margin: 0.4em 0;

`

const Icons = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.7em;

`

export const Project: React.FC<any> = (props) => {
    const router = useRouter();

    return (
        <>
                <ProjectMain initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}>
                    <Name>{props.title}</Name>
                    <motion.div initial={{opacity: 1}} whileHover={{opacity: 0.7, cursor: "pointer"}} onClick={() => {router.push(props.link)}}>
                    <Image src={props.image} alt="Project showcase" width={800} height={400} />
                    <br/>
                    <Flex >
                        <Icons>
                            {props.children}
                        </Icons>       
                    </Flex>
                    </motion.div>
                    
                </ProjectMain>

        </>
    )
}