import React from "react";
import { Component } from "react";
import { CardList } from "../../../components/card/card-list.component";

class UserPosts extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch("https://api.rilibro.it/v1/posts/getAllPosts")
            .then((response) => response.json())
            .then((post) => this.setState({ posts: post }));
    }

    render() {
        const { posts } = this.state;
        console.log("I post che ha fatto l'utente -- >", posts);
        return (
            <>
                <h1 className="font-extrabold">
                    GLI ANNUNCI CHE HAI PUBBLICATO
                </h1>
                <CardList posts={posts} />
            </>
        );
    }
}

export default UserPosts;
