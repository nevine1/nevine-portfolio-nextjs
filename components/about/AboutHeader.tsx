import React, { Fragment , ReactElement} from 'react'
import styles from '../../styles/Main.module.scss'
type Props = {}



export default function AboutHeader (props: any): ReactElement {
  return(
      <Fragment>
          <div className={styles.aboutHeader}>
              <h1  className="title">I know <span className="has-text-danger">Good Designe</span>
              <br/>
              means 
              <span className="has-text-danger"> Good Business</span>
            </h1>
          </div>
      </Fragment>
  )
}

