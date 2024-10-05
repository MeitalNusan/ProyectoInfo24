import React from "react"


type User = {
    name: string,
    registrationStatus: string
}

type AuthRequiredProps = {
    user: User, 
    children: React.ReactNode
}

export const AuthRequired = ({user, children} : AuthRequiredProps) => {
       if (user.registrationStatus === 'unverified') {
        return null
    }
    return children
}