import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Suspense } from "react";
import { AppRouter } from "./Router";
import { HelmetProvider } from 'react-helmet-async';
import MetaTags from './MetaTags';

function App() {
  return (
    <HelmetProvider>
      <MetaTags />
      <Router>
        <Suspense>
          <AppRouter/>
        </Suspense>
      </Router>
    </HelmetProvider>
  )
}

export default App;
