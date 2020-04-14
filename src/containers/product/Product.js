import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/partials/Header";
import Footer from "../../components/partials/Footer";
import ProductList from "../../components/product/ProductList";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions";

class Product extends Component {
  constructor(props) {
    super(props);
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.props.productsFetch();
  }

  editProduct(product) {
    this.props.history.push(`products/${product.id}/edit`);
  }

  delProduct(product) {
    this.props.productDelete(product.id);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h1>Products</h1>
            </div>
            <div className="col-6">
              <button
                className="btn btn-primary title float-right"
                onClick={() => this.props.history.push("products/add")}
              >
                Add
              </button>
            </div>
          </div>
          {this.props.products && Array.isArray(this.props.products) && (
            <ProductList
              products={this.props.products}
              onDelProduct={this.delProduct}
              onEditProduct={this.editProduct}
            />
          )}
        </div>
        <Footer company="King Company" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default withRouter(
  connect(mapStateToProps, { productsFetch, productDelete })(Product)
);
