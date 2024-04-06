// import React,{useState,useContext} from 'react'

// const AuthContext=React.createContext();

// export const AuthProvider= ({children})=>{

//     const [Email,setEmail]=useState(null);
//     const [password,setPassword]=useState(null);

//     const login=(userEmail,userPassword)=>{
//         setEmail(userEmail);
//         setPassword(userPassword);
//     };

//     const logout=()=>{
//         setEmail(null);
//         setPassword(null);
//     }
//     return (
//        <AuthContext.Provider value={{Email,password,login,logout}}>
//          {children} 
//        </AuthContext.Provider>
//     );
    
// }

// export const useAuth=()=>{
//     return useContext(AuthContext); 
// }

