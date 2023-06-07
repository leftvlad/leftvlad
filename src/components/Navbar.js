import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {clicked: false};
  Handleclick = () =>{
    this.setState({ clicked: !this.state.clicked})
  }
  // Set state
  // Make Handleclick Function

  render() {
    return (
      <nav className="NavbarItems">
            <h1 className="navbar-logo">Художественный музей<i class="fa-solid fa-building-columns"></i></h1>
            
            
  {/* выпадающий список */}
  
            <div className="menu-icons" onClick={this.Handleclick}>
              <i className={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-list"}></i>
            </div>

            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return(
                  <li key={index}>
                  <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
              </li>
                );
              })}
               {/* <button>Вход</button> */}
            </ul>
        </nav>
    );
  }
}

export default Navbar;
