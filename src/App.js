import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home/Home";
// import TopCourses from "./Component/TopCourses/TopCourses";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Details from "./Component/Details/Details";
import NotFound from "./Component/404/NotFound";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Services from "./Component/Services/Services";
import Instructor from "./Component/Instructor/Instructor";
import AboutUs from "./Component/AboutUs/AboutUs";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/details/:id">
            <Details></Details>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/instructor">
            <Instructor></Instructor>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
