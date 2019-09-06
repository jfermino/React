import React,{ Component} from 'react'
import fetch from 'isomorphic-unfetch'

class Buscar extends Component{
  constructor(){
      super();
      this.buscarTag.bind(this);
      this.render.bind(this);
      fetch(`api/discussions/git`)
    .then(response => response.json())
    .then(d => {
        this.state = {listTags: d}
        console.log(this.state);
    })
    .catch(e => this.setState({listTags: []}))
  }
  buscarTag(){
      console.log(this);
      console.log('buscar tag');
    fetch(`api/discussions/git`)
    .then(response => response.json())
    .then(d => {
        console.log(this)
        this.setState({listTags: d});
    })
    .catch(e => this.setState({listTags: []}))
  }
  render(){
      return(
        <div className='hero'>
        <h1 className='title'>Buscar Tag</h1>
        <p className='description'>
            Digite a tag que deseja buscar.
        </p>

        <div clasName="container-buscar">
            <input type="text" id="tag" />
            <input type="button" id="pesquisa" value="Buscar" onClick={this.buscarTag} />
        </div>
        <div className="container-tags">
            <ul>
              {console.log(this.state)}
                {this.state.listTags.map(function(tag){
                   return(
                    <li>{tag.data.selftext}</li>
                   )   
                }) }
            </ul>
        </div>
        <style jsx>{`   
              .hero {
                width: 100%;
                color: #333;
              }
              .title {
                margin: 0;
                width: 100%;
                padding-top: 80px;
                line-height: 1.15;
                font-size: 48px;
              }
              .title,
              .description {
                text-align: center;
              }
          `}
        </style>
    </div>
      )
  }
}
   



export default Buscar;