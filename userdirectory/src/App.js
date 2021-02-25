import React, { useState, useEffect }from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import {getUsers} from "./utils/api";
import { mapUsers } from "./utils/mapUsers";


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((userList) => {
        const mappedUserList = mapUsers(userList);
        setUsers(mappedUserList)
    })
  }, [])
  return (
    <div className="App">
      <Main users={ users }/>
    </div>
  );
}

export default App;
