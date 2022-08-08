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
    //hacemos destructuracion para acceder mejor a las propiedades. Por lo general se coloca en la primera línea del render()
    //tabien lo podemos ordenar asi:
    const {
      isActivated,
      arrayOfNumbers,
      multiply,
      objetWithInfo,
      number,
      title
    } = this.props
    const textoSegunBool = isActivated ? 'On' : 'Off';
    const mappedNumbers = arrayOfNumbers.map(n => n * 2);
    const mappedNumbersMultiply = arrayOfNumbers.map(multiply);

    return (
      <div>
        {title}
        <p>
        Edit <code>src/App.js</code>. {this.props.text}.
        </p>
        <p>{number}</p>
        <p>{textoSegunBool}</p>
        <p>{arrayOfNumbers}</p>
        <p>{arrayOfNumbers.join(', ')}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objetWithInfo.key}</p>
        <p>{mappedNumbersMultiply.join(', ')}</p>


      </div>
    );
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}
//asi se puede definir valores por defecto para un props
Title.defaultProps = {
  text: 'Aqui va el titulo'
}

//en class Contador vamos a utilizar el state. Para ello hay que utilizar el constructor
class Contador extends Component {
  constructor () {
    super() //el metodo super ejecuta el metodo constructor de la clase que extendemos, Component
    this.state = { contador : 1}
  }
  render() {
    //const contador = 0;
    return <span>{this.state.contador}</span>
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="Hello from props"/>
        <Title />
        <Text //estos elementos se ordenan alfabeticamene, se colocan así si son muchos.
          arrayOfNumbers={[2, 3, 10]}
          objetWithInfo={{ key: 'First value', key2: 'Other value' }}
          isActivated
          multiply={(number) => number * 4}
          number={2}
          text="Texto en string"
          title={<h1>Este es un h1</h1>}
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
      <p>Primer componente con state</p>
      <Contador />
    </div>
  );
}

export default App;
