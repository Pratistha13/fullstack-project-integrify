/* eslint-disable jsx-a11y/alt-text */
// import React from "react";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("http://localhost:5000/api/v1/product")
//       .then((res) => res.json())
//       .then((resjson)=>console.log(resjson))

//   }, []);
//   console.log(data)
//   return (
//     <div className="App">
//       <header className="App-header">

//       </header>
//     </div>
//   );
// }

// export default App;

import Routes from './Routes'

export default function App() {
  return (
    <>
      <Routes />
    </>
  )
}