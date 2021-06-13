import React from "react";
import { Card } from "./card.component";

export const CardList = (props) => {
  console.log("Sono dentro la vairiabile CardList --> ", props);
  return (
    <div className="container m-10 lg:mx-28 items-center px-1.5 md:px-5 py-0.5 mx-auto">
      <div className="grid flex-wrap grid-cols-1 gap-6 lg:mx-60 md:mx-36">
        {props.posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
