import React, { Component } from "react";

class Changelog extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="changelog">
          <h1>Changelog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quaerat, voluptate et incidunt eaque quibusdam? Ea itaque labore
            consequuntur recusandae explicabo.
          </p>
        </div>
        <div class="comment-container">
          <ul>
            <li>
              <span className="comment-user">Molly M:</span> Donect vehicula
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
