import React, { ReactElement, Fragment, useState } from 'react'
import styles from '../../../styles/Main.module.scss'
import {navbarData} from './navbarData'
import  Link from 'next/link';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
interface Props {
    
}

export default function Navbar({}: Props): ReactElement {
    const[clicked, setClicked] = useState<boolean>(false)
    console.log(navbarData)
    return (
        <Fragment>
            <nav className={`${styles.navbar} has-background-danger`}>
                <ul className={`container ${clicked ? `${styles["nav-menu active"]}` : `${styles["nav-menu"]}` }`}>
                     {
                         navbarData.map((item, index) =>(
                            <li key={index}>
                                <Link href={item.navLink} className={styles.linkText}>{item.navText}</Link>
                            </li>
                         ))
                     }
                </ul>
                <div className={styles.nave_menu}  style={{cursor: "pointer"}} onClick={() => setClicked(!clicked)}>
                    
                   
                     {
                         clicked ? 
                          <FontAwesomeIcon icon={faTimes} className={styles.icon}/> 
                          :
                          <FontAwesomeIcon icon={faBars} className={styles.icon} />
                     }
                     
                </div>
            </nav>
        </Fragment>
    )
}
