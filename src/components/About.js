import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About - constructor");
  }
  componentDidMount() {
    console.log("About - componentDidMount()");
  }
  render() {
    console.log("About - render()");
    return (
      <div>
        <h1>About us Page</h1>
        <h1>This is Namste React Live Courese</h1>
        <Outlet />
        {/* <Profile />
        <ProfileClass name={"Parth In Class - 1 "} />
        <ProfileClass name={"Parth In Class - 2 "} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About us Page</h1>
//       <h1>This is Namste React Live Courese</h1>
//       {/* <Outlet /> */}
//       <Profile />
//       <ProfileClass name={"Parth In Class"} />
//     </div>
//   );
// };

export default About;
