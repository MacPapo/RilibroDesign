import React from "react";
import { Link } from "react-router-dom";
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
        var myHeaders = new Headers();
        myHeaders.append("x-auth-token", localStorage.getItem('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.rilibro.it/v1/posts/getAllByUser", requestOptions)
            .then((response) => response.json())
            .then((post) => this.setState({ posts: post }))
            .catch(error => console.log('error', error));
    }

    render() {
        const { posts } = this.state;
        console.log("La lunghezza dei post", posts.length);
        console.log("I post che ha fatto l'utente -- >", posts);
        return (
            <>
                {posts.length === 0 ? (
                    <>
                        <h1 className="font-extrabold uppercase">non hai pubblicato ancora nessun annuncio <Link to="/sell" className="text-green-400 transition-colors duration-300 hover:text-green-700">Clicca pure qui per vendere il tuo primo libro!</Link></h1>
                    </>
                ) : (
                    <>
                        <h1 className="font-extrabold">
                            GLI ANNUNCI CHE HAI PUBBLICATO
                        </h1>
                        <CardList posts={posts} />
                    </>
                )}
            </>
        );
    }
}

export default UserPosts;