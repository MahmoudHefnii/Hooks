import React, { useContext, useEffect } from "react";
import { DataContext } from "../App";

function ComponentThree() {
     const dataContext = useContext(DataContext);
     useEffect(() => {
          console.log(dataContext);
     }, []);
     return (
          <div>
               <h5>Hi from component three</h5>
               <p>{dataContext.userName}</p>
          </div>
     );
}

export default ComponentThree;
