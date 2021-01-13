import React, { useState } from 'react'
import Carousel from '../components/Carousel';

import Hero from '../components/Hero'
import Auxilery from '../hoc/Auxilery'
import { Spring } from 'react-spring/renderprops';




function HomePage(props) {
  


    return (
        <Auxilery>

            <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            </div>
            <Spring
                from={{ opacity: 0 , marginTop: -500}}
                to={{ opacity: 1 , marginTop: -0}}
            >
                {props => (
                    <div style={props}>
                        
                        <Carousel />

                    </div>) }
            </Spring>

        </Auxilery>




    )
}

export default HomePage;
