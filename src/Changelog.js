import React, { Component } from "react";
import changelogData from "./changelogData";

const changelogPost = changelogData.post;
const user = changelogData.user;
const comment = changelogData.comment;

console.log(changelogData.comments);
class Changelog extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="changelog">
          <h1>Changelog</h1>
          <p>{changelogPost}</p>
        </div>
        <div className="comment-container">
          <ul>
            <li>
              <span className="comment-user">{user}:</span> {comment}
            </li>
            <li>
              <span className="comment-user">Noah S: </span>Vestibulum ante
              ipsum
            </li>
            <li>
              <span className="comment-user">Molly M:</span> Lorem ipsum
            </li>
            <li>
              <span className="comment-user">Noah S: </span>Dolor sit amet
            </li>
            <li>
              <span className="comment-user">Molly M:</span> Consectetur
              adipisicing elit
            </li>
            <li>
              <span className="comment-user">Arabella O:</span> Magnam quaerat
              voluptate
            </li>
            <li>
              <span className="comment-user">Molly M:</span> Et incidunt eaque
            </li>
            <li>
              <span className="comment-user">Arabella O:</span> Quibusdam ea
              itaque
            </li>
            <li>
              <span className="comment-user">Molly M:</span> Labore consequuntur
            </li>
            <li>
              <span className="comment-user">Molly M:</span> Recusandae
              explicabo
            </li>
          </ul>
          <div className="comment-summary">
            <div>
              <p>+7 more comments from Molly, Arabella and 3 others</p>
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
