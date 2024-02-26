import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';

import GalleryPage from './Pages/GalleryPage';
import FileExplorePage from './Pages/FileExplorePage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="gallery" element={<GalleryPage/>} />
        <Route path="explore" element={<FileExplorePage/>} />
      
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
