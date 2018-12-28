import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
const node = document.getElementById("root");
class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post"
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody"
          },
          this.props.content
        )
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

class Comment extends Component {
  render() {
    console.log("lameeee");
    return React.createElement(
      "div",
      {
        className: "comment"
      },
      React.createElement(
        "h2",
        {
          className: "commentAuthor"
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent"
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
};

const comment = React.createElement(
  Comment, 
  {
    id: 3,
    content: "starting to get irritated",
    user: "ur mom! zing"
})

const App = React.createElement(
  Post,
  {
    id: 1,
    content: " said: this is a post!",
    user: "scott"
  },
  comment
  // React.createElement(Comment, {
  //   id: 2,
  //   content: " commented: wow! how cool!",
  //   user: "bob"
  // })
);

render(App, node);
