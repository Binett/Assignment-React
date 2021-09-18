import React, {createContext, useState } from 'react'

const UserContext = createContext()
const [authenticatedUser, setAuthenticatedUser] = useState()

export const UserProvider = ({children}) => {

    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {children}
        </UserContext.Provider>
    )
}
