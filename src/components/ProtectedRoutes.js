import { Navigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";

const ProtectedRoutes = ({ children }) => {
   const user=reactLocalStorage.getObject('user')
    if(!user){
        return <Navigate to="/" />
    }
        return children;
}

export default ProtectedRoutes;