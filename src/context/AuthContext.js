import React, { createContext, useState } from "react"
import { showAlert } from "../utils/Helper"
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null)
    const login = (name, password) => {
        if (name && password) {
            const token = 'Signed-In'
            setUserToken(token)
        } else {
            showAlert('Please fill valid credentials.')
        }
    }
    const logout = () => {
        setUserToken(null)
    }
    return (
        <AuthContext.Provider
            value={{
                userToken,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    )
}