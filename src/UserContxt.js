import { createContext, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [User, setUser] = useState([]);
    const [name,setname]=useState("")
    const [admin,setadmin]=useState("")
    const [mentor,setmentor]=useState([])
    const [query, setquery] = useState([])
    return (
      <UserContext.Provider value={{ User, setUser,name,setname,admin,setadmin,mentor,setmentor ,query,setquery}}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContext;
  