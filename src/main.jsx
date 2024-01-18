import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store/store.js'
import './styles/_global.scss'
import AppRouter from './routes/AppRouter.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRouter />
  </ Provider>
);
