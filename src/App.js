import React, { Component } from "react";
import Changelog from "./Changelog";
import changelogData from "./changelogData";

const changelogs = changelogData.changelogs;
const comments = changelogData.comments;

const log = changelogs.map((item) => item.post);

class App extends React.Component {
  render() {
    return (
      <div>
        DigiProc
        <Changelog log={log} comments={comments} />
      </div>
    );
  }
}

export default App;
