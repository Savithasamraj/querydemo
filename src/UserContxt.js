import { createContext, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [User, setUser] = useState([]);
    const [name,setname]=useState("")
    
    return (
      <UserContext.Provider value={{ User, setUser,name,setname }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContext;
  