import "./styles.css";

import { Component } from "react";

import { Posts } from "../../components/Posts";

export class Home extends Component {
  state = {
    posts: [],
  };

  timeOutUpdate = null;

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default Home;
