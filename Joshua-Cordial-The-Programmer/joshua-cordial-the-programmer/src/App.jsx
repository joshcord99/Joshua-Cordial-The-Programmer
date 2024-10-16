// // Bringing in the required import from 'react-router-dom'
// import { Outlet } from 'react-router-dom';
// import Nav from './components/Nav';

// function App() {
//   // The Outlet component will conditionally swap between the different pages according to the URL
//   return (
//     <>
//       <Nav />
//       <Outlet />

//     </>
//   );
// }

// export default App;
import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item name">
              <a href="#name" className="nav-link name">Joshua Cordial</a>
            </li>
            <li className="nav-item">
              <a href="#about-me" className="nav-link">About Me</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">Portfolio</a>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">Resume</a>
            </li>
          </ul>
        </nav>
      </div>
      <div><h2 className='topic'>About Me</h2></div>
      <div>
        <a href="https://github.com/joshcord99" target="_blank">
          <img src="/AvatarMaker-2.png" className="avatarImage" alt="Avatar" />
        </a>
      </div>
      <div className="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi alias sit eos illo ratione quia culpa ut, architecto repudiandae pariatur incidunt, aperiam ducimus, aut esse dicta perferendis! Labore, laboriosam omnis.
        </p>
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium cum et! Corporis incidunt ea commodi ipsam saepe excepturi nisi voluptate quae, explicabo reiciendis nam. Ipsa adipisci sed illo distinctio
          </p>
        </div>
      </div>
      <footer>
        This is the footer
      </footer>
    </div>
  );
}

export default App;
