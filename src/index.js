import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { deepPurple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import 'modern-normalize';
import './index.css';


const theme = createTheme({
    palette: {
      primary: {
        main: deepPurple[700],
        
      },
    },
  });
  // amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);



// import { red } from '@mui/material/colors';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// });

// function App() {
//   return <ThemeProvider theme={theme}>...</ThemeProvider>;
// }