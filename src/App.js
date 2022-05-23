import React from "react";
import Changelog from "./components/Changelog";
import db from "./db";

const allChangelogs = db.changelogs;
const comments = db.comments;
const log = allChangelogs.map((item) => item.post);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: log,
      comments: comments,
    };
  }
  render() {
    return (
      <div>
        <Changelog log={log} comments={comments} />
      </div>
    );
  }
}

export default App;
