import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Suspense } from "react";
import { AppRouter } from "./Router";

function App() {
  return (
    <Router>
      <Suspense>
        <AppRouter/>
      </Suspense>
    </Router>
  )
}

export default App;
