import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import Routes from './Routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer
          atuoClose={443000}
          position={toast.POSITION.BOTTOM_RIGHT}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
