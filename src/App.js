import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import NewComponent from './components/NewComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Jelena ne zna react
        </p>
        <NewComponent ime="sfsdf"/>
        <NewComponent ime="sasda"/>
        <NewComponent  ime="dasdasdasd"/>


        </header>
      </div>
    );
  }
}
export default App;
