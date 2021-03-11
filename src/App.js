// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* <nav className="text-center">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav> */}

//         {/* A <Switch> looks through its children <Route>s and
//           renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <p className="mt-20 text-3xl font-bold text-center">about</p>
//           </Route>
//           <Route path="/users">
//             {/* <Users /> */}
//             <p className="mt-20 text-3xl font-bold text-center">users</p>
//           </Route>
//           <Route path="/">
//             {/* <p className="mt-2 text-3xl font-bold text-center">main</p> */}
//             <MainPage />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

const App = () => {
  return (
    // <template>
    <div className="safe-top safe-left safe-right safe-bottom">
      <div className="min-w-screen min-h-screen">
        <MainPage />
      </div>
    </div>
    // </template>
  );
};

export default App;
