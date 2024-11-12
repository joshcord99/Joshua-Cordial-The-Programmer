import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './pages/Footer';
import './css/App.css'
function App() {
  const appStyle = {
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    margin: '0', 
  };
  return (
    <div style={appStyle}>
      <Nav />
      <main className="mx-3 main-container" >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
