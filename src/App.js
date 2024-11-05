import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import LoadingScreen from './components/scripts/LoadingScreen/LoadingScreen';
import AuthPanel from './components/scripts/AuthPanel/AuthPanel'
import favicon from './images/logo.png'
import SpawnSelector from './components/scripts/SpawnSelector/SpawnSelector';
import Main from './components/pages/Main/Main';

function App() {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = favicon; 
      document.head.appendChild(newLink);
    } else {
      link.href = favicon; 
    }
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/loadingScreen" element={<LoadingScreen />} />
          <Route path="/authPanel" element={<AuthPanel />} />
          <Route path="/spawnSelector" element={<SpawnSelector/>} />
        </Routes>
    </Router>  );
}

export default App;
