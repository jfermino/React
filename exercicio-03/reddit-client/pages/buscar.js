import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Nav from '../components/nav'

class Buscar extends Component {
  constructor() {
    super();
    this.buscarTag = this.buscarTag.bind(this);
    this.state = {
      listTags: [],
      valorConsulta: ''
    }
  }
  componentDidMount() {
    this.buscarTag(this.state.valorConsulta);
  }
  buscarTag(element) {
    let tag = 'javascript';
    if (element != '') {
      tag = element.target.value
      console.log(this.state.valorConsulta);
    }
    fetch(`api/discussions/${tag}`)
      .then(response => response.json())
      .then(function (d) {
        this.setState({ listTags: d });
      }.bind(this))
      .catch(function (e) {
        this.setState({ listTags: [] })
      }.bind(this))
  }
  render() {
    return (
      <div>
        <Nav />
        <div className='hero'>
          <h1 className='title'>Buscar Tag</h1>
          <p className='description'>
            Digite a tag que deseja buscar.
        </p>

          <div className="container-buscar">
            <input type="text" id="tag" onChange={this.buscarTag.bind(this)} placeholder="Ex.: javascript" />
          </div>
          <div className="container-tags">
            <ul>
              {this.state.listTags.map(function (tag) {
                console.log({ tag });
                return (
                  <li>{tag.data.title}</li>
                )
              })}
            </ul>
          </div>
          <style jsx>{`   
              .hero {
                width: 100%;
                color: #333;
              }
              ul{
                list-style-type: decimal;
              }
              .container-tags{
                margin-left: 68px;
              }
              .container-buscar{
                margin: 0 auto;
                height: 70px;
                width: 50%;
              }
              .container-buscar > input{
                width: 100%;
                height: 18px;
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
      </div>
    )
  }
}




export default Buscar;