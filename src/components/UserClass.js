import React from "react";
import UserDetailsClass from "./UserDetailsClass";
class UserClass extends React.Component {
  constructor(props) {
    console.log("parent constructor loaded");
    super(props);
    this.state = {
      userInfo: {
        login: null,
      },
    };
  }
  render() {
    const { login } = this.state.userInfo;
    console.log("parent did render");
    return (
      <div>
        Hi Jaideep! {login}
        {/* <UserDetailsClass /> */}
      </div>
    );
  }
  async componentDidMount() {
    const result = await fetch("https://api.github.com/users/jdpsah");
    const json = await result.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    console.log("parent did mount");
  }

  componentDidUpdate() {
    console.log("hi updated");
  }
}

export default UserClass;
