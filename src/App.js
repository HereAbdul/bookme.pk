import './app.css'
import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <>
      <Header  />
      <section>
        <Sidebar/>
      </section>
    </>
  );
}

export default App;
