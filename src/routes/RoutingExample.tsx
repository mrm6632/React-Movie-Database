import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

const Home = () => <h1>Welcome Home</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact us</h1>;
const Challenges = () => <h1>30 Days Of React Challenge</h1>;
const NotFound = () => <h1>The page your looking for not found</h1>;

const Navbar = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li>
      <NavLink to="/challenges">Challenges</NavLink>
    </li>
  </ul>
);

const RoutingExample = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RoutingExample;
