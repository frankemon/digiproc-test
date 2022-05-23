import React, { Component } from "react";
import changelogData from "./changelogData";

const commentsData = changelogData.comments;
const firstThreeComments = commentsData.filter((item, index) => {
  return index < 3;
});

const VISIBLE_POSTS = 3;
let hiddenPosts = commentsData.length - VISIBLE_POSTS;

let uniqueUsers = [];
const VISIBLE_USERS = 2;
commentsData.forEach((item) => {
  if (uniqueUsers.indexOf(item.user) <= -1) {
    uniqueUsers.push(item.user);
  }
});

let hiddenUsers = uniqueUsers.length - VISIBLE_USERS;
const firstTwoUsers = uniqueUsers.filter((item, index) => {
  return index > 2;
});

class Changelog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenPosts: hiddenPosts,
      firstUser: firstTwoUsers[0],
      secondUser: firstTwoUsers[1],
      hiddenUsers: hiddenUsers,
      firstThreeComments: firstThreeComments,
      allComments: commentsData,
      toggleOn: false,
      comments: firstThreeComments,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      toggleOn: !prevState.toggleOn,
    }));
  }

  renderAllComments() {
    this.state.comments.map((item) => (
      <li key="id">
        <span key="user" className="comment-user">
          {item.user}:
        </span>{" "}
        {item.comment}
      </li>
    ));
  }

  renderThreeComments() {
    this.state.firstThreeComments.map((item) => (
      <li key="id">
        <span key="user" className="comment-user">
          {item.user}:
        </span>{" "}
        {item.comment}
      </li>
    ));
  }

  render() {
    return (
      <div className="container">
        <div className="changelog">
          <h1>Changelog</h1>
          {this.props.log}
        </div>
        <div className="comment-container">
          <ul>
            {/* {this.state.toggleOn
              ? this.renderAllComments
              : this.renderThreeComments} */}

            {this.state.toggleOn
              ? commentsData.map((item) => (
                  <li key="id">
                    <span key="user" className="comment-user">
                      {item.user}:
                    </span>{" "}
                    {item.comment}
                  </li>
                ))
              : firstThreeComments.map((item) => (
                  <li key="id">
                    <span key="user" className="comment-user">
                      {item.user}:
                    </span>{" "}
                    {item.comment}
                  </li>
                ))}
          </ul>
          <div className="comment-summary">
            <div>
              <p>
                {this.state.toggleOn
                  ? " "
                  : `+
                ${this.state.hiddenPosts} more comments from
                ${this.state.firstUser}, ${this.state.secondUser} and
                ${this.state.hiddenUsers} others`}
              </p>
            </div>
            <div>
              <button onClick={this.handleToggle}>
                {this.state.toggleOn ? "Show less" : "View full activity log"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Changelog;
