import './App.css';
import {RouterProvider} from "react-router-dom";
import "./index.css";
import { router } from './component/Router/Router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
