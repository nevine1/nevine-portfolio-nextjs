import React, { ReactElement, Fragment, useState } from 'react'
import styles from '../../../styles/Main.module.scss'
import {navbarData} from './navbarData'
import  Link from 'next/link';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'
interface Props {
    
}

export default function Navbar({}: Props): ReactElement {
    const[toggle, setToggle] = useState<boolean>(false)
    console.log(navbarData)
    return (
        <Fragment>
            <nav className={`${styles.navbar} has-background-danger`}>
                <ul className="container">
                     {
                         navbarData.map((item, index) =>(
                            <li key={index}>
                                <Link href={item.navLink} className={styles.linkText}>{item.navText}</Link>
                            </li>
                         ))
                     }
                </ul>
                <div className={styles.nave_menu}>
                    <HiMenuAlt4 onClick={() =>setToggle(true)}/>
                    {
                        toggle && (
                            <motion.div
                                whileInView={{x: [300, 0] }}
                                transition={{duration: 0.85, ease:'easeOut'}}
                                >
                                <HiMenuAlt4 onClick={() =>setToggle(false)}/>
                            </motion.div>
                        )}
                     
                     
                </div>
            </nav>
        </Fragment>
    )
}
