import React from "react";
import "./BlackBlock.scss";
import { ViewAllButton } from "../ViewAllButton/ViewAllButton";
import Input from "../Input/Input";
import Details from "../../pages/Details/Details";
import { Link } from "react-router-dom";
import Button from '../Button/button';

export default class BlackBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      isViewAllActive: false,
      search: "",
      activeProduct: null,
    };

    this.handleViewAll = this.handleViewAll.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleActiveProduct = this.handleActiveProduct.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleViewAll() {
    this.setState({
      isViewAllActive: !this.state.isViewAllActive,
    });
  }

  handleActiveProduct(product) {
    this.setState({
      activeProduct: product,
    });
  }

  handleInputChange(value) {
    this.setState({
      isViewAllActive: true,
      search: value,
    });
  }

  handleAddToCart(e, item) {
    e.stopPropagation();

    this.props.addToCart([...this.props.cart, item])
  }

  componentDidMount() {
    // console.log('did mount')
  }

  componentDidUpdate() {
    // console.log('did update')
  }

  render() {
    const { title, coloredTitle, subTitle, products } = this.props;
    const { handleViewAll, handleInputChange, handleActiveProduct, handleAddToCart } = this;
    const { isViewAllActive, search, activeProduct } = this.state;

    const rawProducts = isViewAllActive ? products : products.slice(0, 3);
    const renderedProducts = rawProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    const buttonText = isViewAllActive ? "<-- Hide All" : "View All -->";

    return (
      activeProduct ? (
        <Details close={() => this.setState({activeProduct: null})} product={activeProduct} />
      ) : (
        <section className="black_container">
          <h1>Jersey {title}</h1>
          <hr />
          <h2>{coloredTitle}</h2>
          <hr />
          <h2>{subTitle}</h2>
          <div>
            <Input
              value={search}
              type="text"
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="products">
            {renderedProducts.map((item, i) => {
              return (
                <div
                  onClick={() => handleActiveProduct(item)}
                  key={i}
                  className="products-card"
                >
                  {item.image && <img width={100} height={120} src={item.image} alt="" />}
                  <div className="products-card__name">{item.name}</div>
                  <div className="products-card__description">
                    {item.description}
                  </div>
                  <Button onClick={(e) => handleAddToCart(e, item)}>Add to Cart</Button>
                </div>
              );
            })}
          </div>
          <div>
            <ViewAllButton text={buttonText} onClick={handleViewAll} />
          </div>
          <div className="cards">
            <div className="products-card__name">{"SUPER TITLE"}</div>
          </div>
        </section>
      )
    )}
}
