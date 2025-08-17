import './App.css'
import { Route, Routes, } from 'react-router-dom';
import HomePage from './pages/home';
import RTKReactPage from './pages/rtk-react';

function App() {
  return (
    <Routes>
      <Route path='/rtk-react' element={<RTKReactPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<div className='text-2xl text-red-500 flex h-screen items-center justify-center font-bold '>صفحه مورد نظر پیدا نشد</div>} />
    </Routes>
  )
}

export default App
