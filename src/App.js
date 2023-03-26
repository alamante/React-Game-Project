import './App.css';
import SimpleContainer from './components/welcome';
import Header from './components/header-nav';

function App() {
  return (
    <div className="App">
      <Header/>
      <SimpleContainer></SimpleContainer>
    </div>
  );
}

export default App;
