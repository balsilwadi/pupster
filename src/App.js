import './App.css';
import {Routes,Route} from 'react-router-dom'

/*Pages/components*/
import Header from './components/Header';
import { About } from './pages/About';
import { Search } from './pages/Search';
import { Discover } from './pages/Discover'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/discover' element={<Discover/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
    
  );
}

export default App;
