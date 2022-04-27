import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: []
  };

  timeOutUpdate = null;

  componentDidMount() {

  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title} lol</h1>
            <p>{post.body}</p>
          </div>
        ))
        }
      </div>
    );
  }
}
// por que dos pontos em virgulas em alguns lugares
// yarn start / build / run dev
export default App;
