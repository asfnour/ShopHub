import { createContext, useContext, useState, useEffect } from 'react';
// 1. Create the context
const AuthContext = createContext();
// 2. Create the Provider component (wraps your whole app)
export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('currentUser')) || null;
    });

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }, [user]);

    //signup
    function signup(newUser) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find((u) => u.email === newUser.email);

        if (existingUser) return  "Email already in use";

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        setUser(newUser);
        return true;
    }

    //signin
    function signin(email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((u) => u.email === email && u.password === password);

        if (!user) return false;

        localStorage.setItem('currentuser', JSON.stringify(user));
        setUser(user);
        return true;
    }

    //signout
    function signout() {
        localStorage.removeItem('currentuser');
        setUser(null);
    }
    // 3. Expose everything components need
    return (
        // !null=true !!null=false 
        <AuthContext.Provider value={{ user, signup, signin, signout, isAuth: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}
//custom hook to use auth context
export const useAuth = () => useContext(AuthContext);       