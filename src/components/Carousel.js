import React from 'react'
import { Container, Row } from 'react-bootstrap';

import github from '../assets/images/octocat.jpg'
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
                    link: 'https://github.com/cshields236',
                    selected: false

                },
                {
                    id:1,
                    title: 'GitHub',
                    subtitle: 'My GitHub Profile', 
                    imgsrc :github, 
                    link: 'https://github.com/cshields236',
                    selected: false

                },
                {
                    id:2,
                    title: 'Drive Safe Application',
                    subtitle: 'App to warn drivers when showing fatigue.', 
                    imgsrc :driver, 
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
