import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: []
  };

  timeOutUpdate = null;

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch(
      'https://jsonplaceholder.typicode.com/posts');

    const [posts] = await Promise.all([postsResponse]);

    const postsJson = await posts.json();

    this.setState({ posts: postsJson });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <div key={post.id} className="post-content">
              <h1>{post.title} lol</h1>
              <p>{post.body}</p>
            </div>
          ))
          }
        </div>
      </section>

    );
  }
}
// por que dos pontos em virgulas em alguns lugares
// yarn start / build / run dev
// 1, 1px, 1rem, 1fr , 1vh
// background e background-color
export default App;
