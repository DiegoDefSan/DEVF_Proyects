import {Header} from './Components/header/header';
import {Section} from './Components/section/section'
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './Components/context/context';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
          <Router>
            <Header/>
            <Section/>
          </Router>
      </div>
    </DataProvider>
  );
}

export default App;
