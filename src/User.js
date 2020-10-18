import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

const User=()=>{
    const {name}=useParams();
    const location=useLocation();
    const history=useHistory();
    console.log(location);
    return(
        <>
         <h1>User {name} Page</h1>
         <p>My current location is {location.pathname}</p>
         {location.pathname === `/user/nisar` ? (
            <button onClick={()=> history.goBack()}>Click Me</button>
         ): null}
        
        </>
    );
}

export default User;