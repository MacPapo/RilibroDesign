import React from 'react'

export const CardList = (props) => {
    return (
        <div>
            {props.posts.map((post) => (
                <div></div>
            ))}
        </div>
    )
}

export default CardList;
