import React from "react";
class UserDetailsClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("class child component constructor loaded");
  }
  render() {
    console.log("class child component render loaded");
    return <h1>Hi I am child class component.</h1>;
  }

  componentDidMount() {
    console.log("class child component mount ");
  }
}

export default UserDetailsClass;
