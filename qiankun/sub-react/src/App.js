import { BrowserRouter} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/sub-react' : '/'}>
      <div className="App">
        这是react应用
      </div>
    </BrowserRouter>
  );
}

export default App;
