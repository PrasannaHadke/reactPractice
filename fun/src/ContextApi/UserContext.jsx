import { createContext, useState } from "react";


export const UserContext = createContext();

export const UserContextProvider = function({children}){
    const [user ,setUser] = useState('')
    console.log(user);
    return (
        <UserContext.Provider value={{user ,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
