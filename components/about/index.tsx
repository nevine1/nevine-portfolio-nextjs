import React, {useState} from 'react'
import AboutSection from './AboutSection'
import AboutHeader from './AboutHeader'; 
import styles from '../../styles/Main.module.scss'
type Props = {
    title: string; 
    description: string;
    icon: string;
}

export default function index({title, description, icon}: Props) {
  return (
    <>
      <div className={styles.aboutContainer}>
        <AboutHeader className="has-background-warning"/>
          <hr/>
        <AboutSection title={title} description={description} icon={icon} /> 
      </div>
    </>
  )
}