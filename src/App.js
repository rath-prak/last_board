import React, { Component } from 'react';
import Post from './Post/Component/Post';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);

    this.state = {
      posts: [],
    }
  }

  addPost() {
    const newState = Object.assign({}, this.state);
    newState.posts.push(this.state.newPostBody);
    newState.newPostBody = '';
    this.setState(newState);
  }

  handlePostEditorInputChange(ev) {
    this.setSate({
      newPostBody: ev.target.value
    })
  }

  render() {
    return (
      <div>

        {
          this.state.posts.map((postBody, idx) => {
            return (
              <Post key={idx} postBody={postBody}/>
            )
          })
        }

        <div className="card post-editor">
          <div className="card-body">
            <textarea className="form-control post-editor-input" onChange={this.handlePostEditorInputChange}/>
            <button className="btn btn-primary post-btn" onClick={this.addPost}>Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
