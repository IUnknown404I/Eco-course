import React from 'react';
import 'antd/dist/antd.css';
import './styles/App.css';
import './styles/Eco.css';
import './styles/Secret.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";


const App = () => {

  return (
      <BrowserRouter>
          <div className="App">

              <AppRouter/>

          </div>
      </BrowserRouter>
  );
}

export default App;
