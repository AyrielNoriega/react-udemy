import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//componente con una funcion
// function Hello (props){
//   const {title} = props
//   return <h1>{title}</h1>
// }

//componente con una constante
//const Hello = (props) => <h2>{props.title}</h2>

//componente con una clase
class Hello extends Component {
  render() { //el metodo render no tiene parametros, se hacer referncia a las props con this
    return <h2>{this.props.title}</h2>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello from props"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
