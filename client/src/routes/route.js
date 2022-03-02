import {Navigate} from 'react-router-dom'

export const ProtectRoute =({children}) =>{
    if (!localStorage.getItem('access_token')){
        return <Navigate to="/login" />
    }
    return children
}

export const ProtectLogin =({children})=>{
    if (localStorage.getItem('access_token')){
        return <Navigate to="/" />
    }
    return children
}