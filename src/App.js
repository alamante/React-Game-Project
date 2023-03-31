import "./App.css";
import Header from "./components/header-nav";
import SimpleContainer from "./components/welcome";
import Time from "./components/Time"


function App() {
 return (
  <div className='App'>
   <Header/>
   <Time />
   <SimpleContainer/>
  </div>
 );
}
export default App;
