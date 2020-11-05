import React from 'react'
import { Container, Row } from 'react-bootstrap';

import github from '../assets/images/github.png'
import Card from './Card'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state  ={
            items: [
                {
                    id:0,
                    title: 'GitHub',
                    subtitle: 'My Projects on Github', 
                    imgsrc :github, 
                    link: 'https://github.com/cshields236',
                    selected: false

                },
                {
                    id:1,
                    title: 'LinkedIn',
                    subtitle: 'My LinkedIn Profile', 
                    imgsrc :github, 
                    link: 'https://www.linkedin.com/in/conor-shields-369aa7166/',
                    selected: false

                },
                {
                    id:2,
                    title: 'Drive Safe Application',
                    subtitle: 'App to warn drivers when showing fatigue.', 
                    imgsrc :github, 
                    link: 'https://github.com/cshields236',
                    selected: false

                }
            ]
        }
    }

    handleCardClick = (id,card) => {
        let items = [...this.state.items];
        
        items[id].selected = items[id].selected ? false : true
        
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render(){
        return (
           <Container fluid={true}>
               <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
               </Row>
           </Container>
        )
    }
}

export default Carousel
