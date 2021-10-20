import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routers from './components/Routers'
export default function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

