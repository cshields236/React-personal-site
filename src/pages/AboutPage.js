import React from 'react'
import Content from '../components/Content'
import Hero from '../components/Hero'

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Conor I a recently graduated software engineer with work experience of delivering high quality code being used by millions of people.</p>
                <p>I am self motivated and constantly striving to be better in the field of technology. I specialise in Object Orientated Software Development and Mobile Appplication Development</p>
                <p>I am most profecient with Java and Python. I have also recently been learing React, as you can see here!</p>
                <p>Currently I am seeking work in the Software Development field, so feel free to contact me!</p>

            </Content>
        </div>
    )
}

export default AboutPage;
