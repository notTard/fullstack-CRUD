
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
function App() {
  return (
    <div>
      <Router>
       <HeaderComponent />
         <div className="container">
           <Routes>
                <Route path = "/" element = {<ListEmployeeComponent/>}></Route>
                <Route path = "/add-employee" element = {<AddEmployeeComponent/>} ></Route>
           </Routes>
         </div>
       <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
