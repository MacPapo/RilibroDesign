import React from 'react'
import {Card} from "./card.component";


export const CardList = (props) => {
    return (
        <div>
            {props.posts.map((post) => (
                <Card key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default CardList;