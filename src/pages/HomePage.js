import ReactDOM from 'react-dom'
import React, { useState } from 'react'
import Carousel from '../components/Carousel';
import styles from '../styles.css'

import { useSpring, animated } from 'react-spring'
import Hero from '../components/Hero'
import Auxilery from '../hoc/Auxilery'


const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

function HomePage(props) {
    const [open, toggle] = useState(false)
    const { freq, scale, transform, opacity } = useSpring({
        reverse: open,
        from: { scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0' },
        to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
        config: { duration: 3000 }
    })


    return (
        <Auxilery>

            

             <div>
          <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Carousel />
         </div>

        </Auxilery>
     



    )
}

export default HomePage;
