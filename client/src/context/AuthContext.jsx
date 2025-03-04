import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const intialState ={
    user:null,
    isAuthenticated: false
}

function reducer(state,action){
    switch(action.type) {
        case 'login':
             return{ user: action.payload, isAuthenticated: true}
        case 'logout':
            return {user:null, isAuthenticated:false}    
        default:
             throw new Error("Unknown action")     
    }
}


function AuthProvider({children}){
   
    const [{user,isAuthenticated},dispatch] = useReducer(reducer,intialState)

    function login(user){

        dispatch({type:'login',payload:user})
    }
    function logout(){
        dispatch({type:"logout"})
    }
    return <AuthContext.Provider value={{user,isAuthenticated,login,logout}}>{children}</AuthContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext)
    if(context === undefined) throw new Error("AuthContext was used outside AuthProvider")
  return context
    }

export {AuthProvider , useAuth}