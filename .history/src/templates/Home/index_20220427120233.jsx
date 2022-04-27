import "./styles.css";

import { React } from "react";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: "",
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, page + postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ ...this.state, posts, page: nextPage });
  };

  handleInputChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ ...this.state, searchValue: value });
  };

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : posts;

    return (
      <section className="container">
        <div className="text-input-container">
          <TextInput
            actionFn={this.handleInputChange}
            inputValue={searchValue}
          />
        </div>

        <Posts posts={filteredPosts} />

        <div className="button-container">
          {!searchValue && (
            <Button
              actionFn={this.loadMorePosts}
              text="Load More"
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

export default Home;
