import React, { ReactElement } from 'react'
import styles from '../../styles/Main.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'
interface Props {
    title: string;
    description: string; 
    icon: string;
}

export default function AboutSection({title, description, icon}: Props): ReactElement {
    const abouts = [
        {
            title: 'Web Design', 
            description: 'I like Web Design', 
            icon:  faBars

        }, 
        {
            title: 'Web Development', 
            description: 'I like Web development', 
            icon:  faTimes  
        }, 
        {
            title: 'Web Design', 
            description: 'I like Web Design', 
            icon:  faBars 
        },
    ]
    return (
        <>
         <div className={styles.aboutMap}>
            {
              abouts.map((about, index) => (
               <motion.div key={index}
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.2}}
                    transition={{ duration: 0.5, type: 'tween' }}
                    >
                    <div style={{margin: '20px', padding: '0 20px'}}>
                        <FontAwesomeIcon icon={about.icon}/>
                        <h3>{about.title}</h3>
                        <p>{about.description}</p>
                    </div>
                </motion.div>
                ))
            } 
         </div>
            
        </>
    )
}
