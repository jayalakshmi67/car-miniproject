import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import CardList from './Components/CardList';
import About from './Components/About';
import CreateCarBlog from './Components/CreateCarBlog';
import CarDetails from './Components/CarDetails';
import EditCarBlog from './Components/EditCarBlog';
import NotFound from './Components/NotFound';

 
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path={'/'} component = {CardList}/>
        <Route path={'/Create'} component = {CreateCarBlog}/>
        <Route path={'/About'} component = {About}/>
        <Route path={'/Car/:car_id'} component = {CarDetails}/>
        <Route path={'/Edit/:car_id'} component = {EditCarBlog}/>
        <Route path={'*'} component = {NotFound}/>

      </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
