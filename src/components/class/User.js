import React from "react";
import { USER_API } from "../../utils/constants";
import UserContext from "../../utils/contexts/UserContext";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch(USER_API, {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
  }

  render() {
    const { name, location, avatar_url } = this.state?.userInfo;
    return (
      <div className="user-card">
        <UserContext.Consumer>
          {({ user_name }) => (
            <h2 className="font-bold text-xl">Name: {user_name}</h2>
          )}
        </UserContext.Consumer>
        <h2>Location: {location}</h2>
        <h2>Contact: @vinayak2702</h2>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default User;
