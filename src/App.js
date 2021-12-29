import logo from './logo.svg';
import './App.css';
import FormAlly from './components/Formally';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a href = "https://reactjs.org/" rel="noopenner noreferrer" target="_blank"><img src={logo} className="App-logo" alt="logo" /></a>
        <a href = "https://github.com/msyvr/formally" rel="noopenner noreferrer" target = "_blank">formAlly</a>
      </header>
      <FormAlly />
    </div>
  );
}

export default App;
