import { RouterProvider } from 'react-router-dom';
import AllRouter from './All_Files/Router/AllRouter';
import './App.css';

function App() {
  return (
    <div className="App">

      <RouterProvider router={AllRouter}></RouterProvider>
      
    </div>
  );
}

export default App;
