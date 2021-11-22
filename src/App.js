import './App.css';
import Carousel from './Carousel';
import infor from './infor';

function App() {
  return (
    <div className="App">
     <Carousel info={infor}/>
    </div>
  );
}

export default App;
