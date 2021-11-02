import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Menubar from './components/Menubar/Menubar';
import Login from './Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Doctors from './components/Doctors/Doctors';
import DoctorsDetails from './components/DoctorsDetails/DoctorsDetails';
import About from './components/About/About';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Menubar></Menubar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>

          <PrivateRoute exact path='/doctorDetail'>
            <DoctorsDetails></DoctorsDetails>
          </PrivateRoute>
          <PrivateRoute exact path='/detailservices/:id'>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
