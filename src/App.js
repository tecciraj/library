import React from 'react';
import {BrowserRouter as Router,Route, NavLink} from 'react-router-dom';
import './App.css';
import Addbookform from "./pages/Addbookform.js";
import Lendbook from "./pages/Lendbook.js";
import Returnbook from "./pages/Returnbook.js";
import Removebook from "./pages/Removebook.js";
import Searchbook from "./pages/Search-book.js";
import './addbook.js';

function App() {
  return (
  <Router>
    <div className="App">
      <nav>
        <h1 className="header1">React Library Management System</h1>
        <hr></hr>
        <ul className="nav-ele">
          <NavLink activeClassName="nav-active" to="/add-book" href=""><li>Add new book</li></NavLink>
          <NavLink activeClassName="nav-active" to="/remove-book"><li> Remove Book</li></NavLink>
          <NavLink activeClassName="nav-active" to="/lend-book"><li> Lend a book</li></NavLink>
          <NavLink activeClassName="nav-active" to="/return-book"><li> Return book</li></NavLink>
          <NavLink activeClassName="nav-active" to="/search-book"><li> Search Books</li></NavLink>
        </ul>
        <hr/>
      </nav>
      <div className="main-Conent">
        <Route exact path="/add-book" component={Addbookform}>
        </Route>
        <Route path="/remove-book" component={Removebook}>
        </Route>
        <Route path="/lend-book" component={Lendbook}>
        </Route>
        <Route path="/return-book" component={Returnbook}>
        </Route>
        <Route path="/search-book" component={Searchbook}>
        </Route>
      </div>
    </div>
  </Router>
  );
}
export default App;
