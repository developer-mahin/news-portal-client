import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/routes';

function App() {
  return (
    <div className="App bg-secondary bg-opacity-10">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
