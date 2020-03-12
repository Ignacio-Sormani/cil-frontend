import React from 'react';
import './product.css';

class Product extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div className="product-container">
          <div className="product-img">
            <img
              src={`https://mcga-cil.herokuapp.com${this.props.productProp.image}`}
              alt={this.props.productProp.name}
              className="image"
            />
          </div>
          <div className="product-description">
            <p className="name">{`${this.props.productProp.name} (${this.props.productProp.category.name})`}</p>
            <p className="description">
              Descripcion: {this.props.productProp.description}
            </p>
            <div className="availability">
              <p className="price">${this.props.productProp.price}</p>
              <p className="stock">
                {this.props.productProp.stock
                  ? `Stock: ${this.props.productProp.stock}`
                  : 'Sin stock'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
