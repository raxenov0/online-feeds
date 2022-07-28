import { useEffect, useState } from "react";
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context";


function App() {

  const [isAuth, setIsAuth] = useState(false)
  useEffect(()=>{
    const auth = localStorage.getItem('auth')
    if(auth) setIsAuth(true)
    }
  )

  return (
   <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
   }}>
      <AppRouter/>
   </AuthContext.Provider>
    
  );
}

export default App;
