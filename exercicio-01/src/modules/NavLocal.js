import React from 'react';

function NavLocal(){
    return(
        <section>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">Section 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Section 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Section 3</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Section 4</a>
          </li>
        </ul>
      </section>
    );
}

export default NavLocal;