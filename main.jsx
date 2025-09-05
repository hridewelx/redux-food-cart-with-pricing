import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/body';
import Header from './src/Header';
import { Provider } from 'react-redux';
import stores from './redux/store/Store';
import './styles.css';

function App() {
    return (
        <Provider store={stores}>
            <Header />
            <Body/>
        </Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);