import { createContext, useState } from "react";
import "./App.css";
import ComponentOne from "./components/ComponentOne";
import FetchingData from "./components/useEffect/FetchingData";
import FetchingPost from "./components/useEffect/FetchingPost";
import BasicCounter from "./components/useState/BasicCounter";
import CounterTwo from "./components/useState/CounterTwo";
import ObjectState from "./components/useState/ObjectState";

export const DataContext = createContext();
function App() {
     const [userName, setUserName] = useState("Hi Mahmoud");
     return (
          <div className="App">
               <h3 className="header">React Hooks</h3>
               <DataContext.Provider value={{ userName }}>
                    <ComponentOne />
               </DataContext.Provider>
               <button onClick={() => setUserName("Hi Mahmoud Hefnii")}>Change</button>
               {/* <BasicCounter /> */}
               {/* <CounterTwo /> */}
               {/* <ObjectState /> */}
               {/* <FetchingData /> */}
               {/* <FetchingPost /> */}
          </div>
     );
}

export default App;
