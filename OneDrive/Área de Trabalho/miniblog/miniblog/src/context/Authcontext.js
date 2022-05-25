import { useContext  , createContext} from "react";

const AuthContext = createContext()

export function AuthProvider({childre,value}){
     return <AuthContext.Provider value={value}>{childre}</AuthContext.Provider>
}


export function useAuthVale(){
    return useContext(AuthContext)
}