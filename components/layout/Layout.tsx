import React, { ReactElement, Fragment } from 'react'
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../footer/Footer'
interface Props {
    
}

export default function Layout({children}: Props): ReactElement {
    return (
        <Fragment>
            <Navbar/>
            {children}
            <Footer/>
        </Fragment>
    )
}
