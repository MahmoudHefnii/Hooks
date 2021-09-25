import React, { useEffect } from "react";
import ComponentTwo from "./ComponentTwo";

function ComponentOne() {
     useEffect(() => {
          console.log("component one mount");
     });
     return (
          <div>
               <h5>Hi from component one</h5>
               <ComponentTwo />;
          </div>
     );
}

export default React.memo(ComponentOne);
