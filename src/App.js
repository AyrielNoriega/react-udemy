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

class Text extends Component {
  render() {
    const textoSegunBool = this.props.isActivated ? 'On' : 'Off';
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2);

    return (
      <div>
        <p>
        Edit <code>src/App.js</code>. {this.props.text}.
        </p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
        <p>{this.props.arrayOfNumbers}</p>
        <p>{this.props.arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objetWithInfo.key}</p>

      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello from props"/>
        <Text //estos elementos se ordenan alfabeticamene, se colocan así si son muchos.
          arrayOfNumbers={[2, 3, 10]}
          objetWithInfo={{ key: 'First value', key2: 'Other value' }}
          isActivated
          number={2}
          text="Texto en string"
        />
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
