import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleUp } from "react-icons/fa";

class Changelog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenPosts: this.hiddenPosts,
      firstUser: this.firstTwoUsers,
      secondUser: this.secondUser,
      hiddenUsers: this.hiddenUsers,
      firstThreeComments: this.firstThreeComments,
      allComments: this.comments,
      toggleOn: false,
      comments: this.firstThreeComments,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      toggleOn: !prevState.toggleOn,
    }));
  }

  render() {
    const firstThreeComments = this.props.comments.filter((item, index) => {
      return index < 3;
    });

    const VISIBLE_POSTS = 3;
    this.state.hiddenPosts = this.props.comments.length - VISIBLE_POSTS;

    let uniqueUsers = [];
    const VISIBLE_USERS = 2;
    this.props.comments.forEach((item) => {
      if (uniqueUsers.indexOf(item.user) <= -1) {
        uniqueUsers.push(item.user);
      }
    });

    this.state.hiddenUsers = uniqueUsers.length - VISIBLE_USERS;

    this.state.firstTwoUsers = uniqueUsers.filter((item, index) => {
      return index > 2;
    });

    return (
      <div className="container">
        <div className="changelog">
          <h1>Changelog</h1>
          <p>{this.props.log}</p>
        </div>
        <div className="comment-container">
          <ul>
            {this.state.toggleOn
              ? this.props.comments.map((item) => (
                  <li key={item.id}>
                    <span className="comment-user">{item.user}:</span>{" "}
                    {item.comment}
                  </li>
                ))
              : firstThreeComments.map((item) => (
                  <li key={item.id}>
                    <span className="comment-user">{item.user}:</span>{" "}
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
                ${this.state.firstTwoUsers[0]}, ${this.state.firstTwoUsers[1]} and
                ${this.state.hiddenUsers} others`}
              </p>
            </div>
            <div>
              <button onClick={this.handleToggle}>
                {this.state.toggleOn ? (
                  <p>
                    Show less <FaArrowAltCircleUp />
                  </p>
                ) : (
                  <p>
                    View full activity log <FaArrowAltCircleRight />
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Changelog;
