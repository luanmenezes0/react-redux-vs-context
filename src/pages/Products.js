import React from 'react';

import MainNavigation from '../components/MainNavigation';
import ShopContext from '../context/shop-context';
import './Products.css';

const ProductsPage = () => (
  <ShopContext.Consumer>
    {context => (
      <>
        <MainNavigation
          cartItemNumber={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
        <main className="products">
          <ul>
            {context.products.map(product => (
              <li key={product.id}>
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    onClick={context.addProductToCart.bind(this, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </>
    )}
  </ShopContext.Consumer>
);

export default ProductsPage;
