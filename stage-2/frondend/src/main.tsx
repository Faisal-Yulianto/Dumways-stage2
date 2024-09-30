import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme} from './config/chakra-theme';
import { Provider } from 'react-redux';
import store from './redux/store/store';
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </Provider>
      </ChakraProvider>
    </React.StrictMode>
  );
}
