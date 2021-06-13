import React from "react";
import { Component } from "react";
import Nav from "../../components/navbar.component";
import Footer from "../../components/footer.component";
import { CardList } from "../../components/card/card-list.component";
import Spinner from "../../components/Spinner/Spinner";
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
      <>
        {
          posts === undefined ? (
            <Spinner />
          ) : (
            <>
              <div div className="h-screen" >
                <div className="justify-center bg-fixed bg-center items-top bg-login-fixed">
                  <Nav />
                  <CardList posts={posts} />
                </div>
                <Footer />
              </div >
            </>
          )
        }
      </>



    );
  }
}

export default Buy;
