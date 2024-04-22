import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Home from './Components/Home';
import AboriginalSymbol from './Components/AboriginalSymbol';
import AboriginalTribe from './Components/AboriginalTribe';
import ArtFact from './Components/ArtFact';
import Artifact from './Components/Artifact';
import Artist from './Components/Artist';
import ArtType from './Components/ArtType';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router> {/* Use Router instead of Routes */}
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboriginalsymbol" element={<AboriginalSymbol />} />
          <Route exact path="/aboriginaltribe" element={<AboriginalTribe />} />
          <Route exact path="/artfact" element={<ArtFact />} />
          <Route exact path="/artifact" element={<Artifact />} />
          <Route exact path="/artist" element={<Artist />} />
          <Route exact path="/arttype" element={<ArtType />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
