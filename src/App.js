import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
