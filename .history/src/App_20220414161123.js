import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3'
      },
    ]
  };

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  handleTimeout = () => {
    const { posts, counter } = this.state;
    posts[0].title = 'O título mudou';
    posts[1].title = 'ue';
    posts[2].title = 'lol';
    posts[3].title = 'pal';
    posts[4].title = 'pol';
    posts[5].title = 'SÓ ROCK SÓ ROCK SÓ ROCK';
    posts[6].title = 'BUNDA E DROGA YEAH YEAH';
    posts[7].title = 'LIRU LIRU';

    setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000)
  }

  render() {
    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
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
