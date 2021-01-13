import React from 'react'
import { Container, Row } from 'react-bootstrap';

import burger from '../assets/images/burger.jpg'
import book from '../assets/images/book.jpeg'
import driver from '../assets/images/driver.jpeg'
import Card from './Card'

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state  ={
            items: [
                {
                    id:0,
                    title: 'Book Selector',
                    subtitle: 'App that randomly selects your next book.', 
                    imgsrc :book, 
                    link: 'https://github.com/cshields236/Book-Selector',
                    selected: false

                },
                {
                    id:1,
                    title: 'Burger Builder Application',
                    subtitle: 'Online burger builder & ordering application', 
                    imgsrc :burger, 
                    link: 'https://github.com/cshields236/burger-builder',
                    selected: false

                },
                {
                    id:2,
                    title: 'Drive Safe Application',
                    subtitle: 'App to warn drivers when showing fatigue.', 
                    imgsrc :driver, 
                    link: 'https://github.com/cshields236/FYP',
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
           <Container fluid={true} >
               <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
               </Row>
           </Container>
        )
    }
}

export default Carousel
