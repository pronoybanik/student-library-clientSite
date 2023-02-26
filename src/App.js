import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AllRouter from './All_Files/Router/AllRouter';
import './App.css';

function App() {
  return (
    <div className="max-w-[1400px] mx-auto font-serif ">

      <RouterProvider router={AllRouter}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
