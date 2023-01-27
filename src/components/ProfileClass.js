import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("constructor - " + this.props.name);
  }

  componentDidMount() {
    console.log("ComponentDidMount - " + this.props.name);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - " + this.props.name);
  }

  render() {
    console.log("Render() -" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <h2>{this.props.name}</h2>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: 1 })}>Click Me</button>
      </div>
    );
  }
}

export default Profile;
