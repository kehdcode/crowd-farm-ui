import React from 'react'

 function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Crowd Farmy</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a class="nav-link" href="#">About </a>
      </li>
      <li className="nav-item active">
        <a class="nav-link" href="#">Latest </a>
      </li>
      <li className="nav-item active">
        <a class="nav-link" href="#">Register </a>
    </li>
        <li className="nav-item active">
        <a class="nav-link" href="#">Farm Shop </a>
      </li>
      
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}

export default Navbar;