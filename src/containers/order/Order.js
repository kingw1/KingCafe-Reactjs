import React, { Component } from "react";
import Header from "../../components/partials/Header";
import Footer from "../../components/partials/Footer";
import { connect } from "react-redux";
import { ordersFetch, orderDelete } from "../../actions";

class Order extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.ordersFetch();
  }

  delOrder(order) {
    this.props.orderDelete(order.id);
  }

  showOrders() {
    return (
      this.props.orders &&
      this.props.orders.map((order) => {
        const date = new Date(order.orderedDate);

        return (
          <div key={order.id} className="col-md-3">
            <hr />
            <p className="text-right">
              <button
                className="btn btn-danger btn-sm title"
                onClick={() => this.delOrder(order)}
              >
                X
              </button>
            </p>
            <h5>
              Ordered At {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </h5>
            <ul>
              {order.orders &&
                order.orders.map((item) => {
                  return (
                    <li key={item.product.id}>
                      {item.product.productName} x {item.quantity} ={" "}
                      {item.product.unitPrice * item.quantity}
                    </li>
                  );
                })}
            </ul>
            <p>Total {order.totalPrice}</p>
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <h1>Orders</h1>
          <div className="row">{this.showOrders()}</div>
        </div>
        <Footer company="King Company" />
      </div>
    );
  }
}

function mapStateToProps({ orders }) {
  return { orders };
}

export default connect(mapStateToProps, { ordersFetch, orderDelete })(Order);
