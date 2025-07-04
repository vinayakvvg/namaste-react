import { createContext } from "react";

const UserContext = createContext({
  user_name: "Default user",
});

export default UserContext;
