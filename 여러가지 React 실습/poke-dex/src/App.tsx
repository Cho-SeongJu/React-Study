import { BrowserRouter } from 'react-router-dom';
import PageHeader from './Common/PageHeader';
// import PokeCardList from './List/PokeCardList';
import PageNavigator from './PageNavigator';

function App() {
  return (
    <BrowserRouter>
      <PageHeader />
      <PageNavigator />
    </BrowserRouter>
  );
}

export default App;
