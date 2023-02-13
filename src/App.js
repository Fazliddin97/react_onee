import logo from './logo.svg';
import './App.css';

let App = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
    </div>
  )
}

export default App;



const Header = () => {
  return ( 

    <div className='Header'>
      <h1>Hello Header!!!</h1>
    </div>

    )
}

const Sidebar = () => {
  return ( 

    <div className='Sidebar'>
      <h1>Hello Sidebar</h1>
    </div>

    )
}
