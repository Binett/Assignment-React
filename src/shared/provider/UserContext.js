import React, {createContext, useState } from 'react'

const UserContext = createContext()


export const UserProvider = ({children}) => {
const [authenticatedUser, setAuthenticatedUser] = useState()

    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {children}
        </UserContext.Provider>
    )
}
