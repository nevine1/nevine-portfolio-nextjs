import React , { Fragment} from 'react'
import AboutSection from '../components/about/AboutSection'

type Props = {
    title: string;
    description: string; 
    icon: string;
}

export default function about({title, description, icon}:Props) {
  return (
    <Fragment>
        <div >
           <AboutSection {...about} title={title} description={description} icon={icon}/> 
        </div>
    </Fragment>
  )
}