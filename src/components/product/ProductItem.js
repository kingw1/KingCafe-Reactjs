import React, {Component} from 'react'

class ProductItem extends Component {
    render() {
        const {productName, unitPrice, thumbnail} = this.props.product

        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt={productName}/>
                <h5 className="mt-2">{productName}</h5>
                <p className="text-right title">{unitPrice} ฿</p>

                {this.props.onAddOrder &&
                <button
                    className="btn btn-block btn-success title"
                    onClick={() => this.props.onAddOrder(this.props.product)}
                >
                    Buy now
                </button>
                }

                {(this.props.onDelProduct || this.props.onEditProduct) &&
                <button
                    className="btn btn-info title col-5"
                    onClick={() => this.props.onEditProduct(this.props.product)}
                >
                    Edit
                </button>
                }

                {(this.props.onDelProduct || this.props.onEditProduct) &&
                <button
                    className="btn btn-danger title col-5 float-right"
                    onClick={() => this.props.onDelProduct(this.props.product)}
                >
                    Delete
                </button>
                }

                <hr/>
            </div>
        )
    }
}

export default ProductItem