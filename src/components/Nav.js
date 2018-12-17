import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component{
  render(){
    return(
      <React.Fragment>
        <ul className="nav-wrap">
          <Link to="/" className="nav-link"><li className="nav-item">Home</li></Link>
          <Link to="/about" className="nav-link"><li className="nav-item">About</li></Link>
          <Link to="/episodes" className="nav-link"><li className="nav-item">EPISODES</li></Link>
        </ul>
      </React.Fragment>
    )
  }

}
