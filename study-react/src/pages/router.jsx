import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main';
import Todos from './todos';
import CreateItemBox from './todos/CreateltemBox';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
