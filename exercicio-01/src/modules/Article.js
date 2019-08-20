import React from 'react';

function Article(){
    return(
        <div className="row">
        <section className="col-sm section_esquerda"></section>
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
              <ul className="nav flex-column">  
                <li className="nav-item"><a className="nav-link" href="#">Section 1</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Section 2</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Section 3</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Section 4</a></li>
              </ul>
            </nav>
          </aside>
        </section>
      </div>
    );
}

export default Article;