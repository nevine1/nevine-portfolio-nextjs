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
            <div className={styles.aboutContainer}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={`title ${styles.aboutHeading}`}>Welcome to my <span className="has-text-danger">profile</span></h1>
                </motion.div>
                a
                <div className={styles.aboutDetails}>
                   {
                       abouts.map((about, index) => (
                           <div key={index}>
                               <FontAwesomeIcon icon={about.icon}/>
                               <h3>{about.title}</h3>
                               <p>{about.description}</p>
                           </div>
                       ))
                   } 
                </div>
            </div>
        </>
    )
}
