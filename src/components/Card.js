import React from 'react'
import CardInfo from './CardInfo';

function Card(props) {
    return (
        <div className='d-inline-block g-card' onMouseEnter={(e) => props.click(props.item)}>
            <img className='g-card-image' src={props.item.imgsrc} alt ={props.item.imagesrc} />
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link}/>}
        </div>
    );
}

export default Card
