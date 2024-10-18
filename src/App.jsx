import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './pages/Footer';

function App() {
  const appStyle = {
    backgroundImage: `url('/clouds.gif')`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    height: '200vh', 
    margin: '0', 
  };

  return (
    <div style={appStyle}>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>

  );
}

export default App;
