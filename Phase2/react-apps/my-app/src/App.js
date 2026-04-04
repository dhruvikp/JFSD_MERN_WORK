import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Dhruvik";
  const isLoggedIn = false;

  return (
    <div>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h1>Welcome to my React App, {name}!</h1>
      {isLoggedIn ? "welcome": "Please log in to continue. "}
    </div>
  );
}

export default App;
