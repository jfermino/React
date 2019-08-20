import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Topic 1 <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Topic 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Topic 3</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Topic 4</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <section>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">Section 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Section 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Section 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Section 4</a>
          </li>
        </ul>
      </section>
      <div className="row">
        <section class="col-sm section_esquerda"></section>
        <section className="col-sm section_central">
          <article>
            <header>
              <h3>Artigo 1</h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </header>
          </article>
          <article>
            <header>
              <h3>Artigo 2</h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </header>
          </article>
          <article>
            <header>
              <h3>Artigo 3</h3>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </header>
          </article>
        </section>
        <section className="col-sm section_direita">
          <aside>
            <nav>
              <ul  class="nav flex-column"> 
                <li class="nav-item"><a class="nav-link" href="#">Section 1</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Section 2</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Section 3</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Section 4</a></li>
              </ul>
            </nav>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default App;
