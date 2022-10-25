import React, { ReactElement } from 'react'
import {motion} from 'framer-motion';
import styles from '../../styles/Main.module.scss'
interface Props {
    
}

export default function PageHeader({}: Props): ReactElement {
    return (
        <>
            <div className={styles.pageHeader}>
            <motion.div
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1.3 }}
                transition={{ duration: 0.8 }}
                >
                    <h1  className={`title has-text-grey-dark ${styles.aboutHeading}`}>Welcome to my <span className="has-text-danger">profile</span></h1>
                </motion.div>  
            </div> 
        </>
    )
}
