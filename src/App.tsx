import { Routes, Route } from 'react-router-dom';
import { SearchView } from './views/SearchView/searchView';
function App() {
  return (
    <Routes>
      <Route path={'/search'} element={<SearchView />} />
    </Routes>
  );
}

export default App;
