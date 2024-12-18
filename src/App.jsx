import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './themes.css';
import { Rutas } from './routes/Rutas';
import { ThemeProvider } from './context';
import { Provider } from 'react-redux'
import { store } from './store';


function App() {
  

  return (
    <Provider store={store}>
    <ThemeProvider>
     <Rutas/>
    </ThemeProvider>
    </Provider>
  );
}

export default App;