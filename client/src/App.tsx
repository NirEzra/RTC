import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./firebaseAuth/AppRouter";
import { AuthProvider } from "./components/contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Counter } from "./features/counter/Counter";


function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Header />
          <AppRouter />
          {/* <Counter/> */}
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
