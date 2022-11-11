
import './App.css';
import AdminPage from './components/Admin/AdminPage';
import Menu from './components/Admin/Menu';

import Footer from './frontend/Components/Footer';


function App() {
  return (
    <div className="App">
      <h1>Project</h1>
      <Menu/>
      <AdminPage/>
     
      <Footer />


    </div>
  );
}

export default App;
