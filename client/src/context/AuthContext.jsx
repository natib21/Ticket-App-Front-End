import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
    user: null,
    isAuthenticated: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload, isAuthenticated: true };
        case 'logout':
            return { ...state, user: null, isAuthenticated: false };
        default:
            throw new Error("Unknown action type");
    }
}
console.log(initialState)
function AuthProvider({ children }) {
    const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState);

    function login(user,token) {
        dispatch({ type: 'login', payload: user });
        sessionStorage.setItem("AUTH_KEY_USER_DATA", JSON.stringify(user));
        sessionStorage.setItem("AUTH_KEY_TOKEN", token);
    }

    function logout() {
        sessionStorage.clear()
        dispatch({ type: "logout" });
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}

export { AuthProvider, useAuth };
