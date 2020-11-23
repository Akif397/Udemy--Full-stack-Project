import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function createAlert(){
  alert("Hello, You clicked me")
}

function App() {
  return (
    <div className="App">
      <Header info="this is my message" />
      <p>Main content</p>
      <Footer trademark="page by @kif"
      myAlert={createAlert}/>
    </div>
  );
}

export default App;
