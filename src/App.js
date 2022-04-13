import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import ScrollToTop from './component/ScrollToTop/ScrollToTop';
import Router from './Routes/Router';
import NetflixProvider from './Context/netflixContext';


function App() {
  return (
    <div className="App">
      <NetflixProvider>
        <BrowserRouter>
          <Router></Router>
        </BrowserRouter>
      </NetflixProvider>

    </div>
  );
}

export default App;
