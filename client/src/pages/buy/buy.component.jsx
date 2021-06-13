import React from "react";
import { Component } from "react";
import Nav from "../../components/navbar.component";
import Footer from "../../components/footer.component";
class Buy extends Component {
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
    console.log("Il valore di posts -- >", posts);
    return (
      <div className="h-screen">
        <div className="justify-center bg-fixed bg-center items-top bg-login-fixed">
          <Nav />
          
          <Footer />
        </div>
      </div>
    )
  }
}

export default Buy;