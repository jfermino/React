import React from 'react'

export default class CarItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="car-item-content__image">
                    <img src={require(`../assets/images/${this.props.item.image}`)} alt={this.props.item.nome}></img>
                </div>
                <div className="car-item-content__text">
                    <h5>{this.props.item.nome}</h5>
                </div>
            </div>
        )
    }
}