
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Favorites from './pages/Favorites';
// import Login from './pages/Login';
// import RegisterForm from './pages/register';
// import MovieDetails from './components/MovieDetails'; 

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div style={{ padding: '16px' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/favorites" element={<Favorites />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/movies/:imdbID" element={<MovieDetails />} /> 
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import Apphelper from './components/AppHelper';
const App: React.FC = () => {
 


  return (
    
      <div >
       <Apphelper/>
      </div>
   
  );
};

export default App;
