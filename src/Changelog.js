import React, { Component } from "react";
import changelogData from "./changelogData";

const changelogPost = changelogData.post;
const commentsData = changelogData.comments;
const comments = commentsData.map((comment) => (
  <li>
    <span className="comment-user">{comment.user}</span>: {comment.comment}
  </li>
));

const visiblePosts = 3;
let hiddenPosts = comments.length - visiblePosts;

// Get all usernames
// Filter duplicats or find unique names
// Return to new variable/array, get its length

// let totalUsers = commentsData.filter((user) => user === user).length;
// console.log(totalUsers);

// const unique = (value, index, self) => {
//   return self.indexOf(value) === index;
// };

// let users = commentsData.filter((user) => user === user);
// console.log(users);

// const uniqueUsers = users.filter(unique);
// console.log("users", uniqueUsers);

class Changelog extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="changelog">
          <h1>Changelog</h1>
          <p>{changelogPost}</p>
        </div>
        <div className="comment-container">
          <ul>{comments}</ul>
          <div className="comment-summary">
            <div>
              <p>
                +{hiddenPosts} more comments from Molly, Arabella and 3 others
              </p>
            </div>
            <div>
              <a href="#">
                <p>View full activity log</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Changelog;
