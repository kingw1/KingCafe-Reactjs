import React, { Component } from "react";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux";
import { productsFetch } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="King Company" />
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { productsFetch })(Home);
