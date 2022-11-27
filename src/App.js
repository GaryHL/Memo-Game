import './App_styeld.js';
import GlobalStyles from './globalstyles/GlobalStyles.js';
import Router from './router/Router.jsx';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Router/>
    </div>
  );
}

export default App;
