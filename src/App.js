import React, { useState } from 'react';
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: 'Mate',
      cost: '$500',
      image: 'https://www.infobae.com/new-resizer/YgO_N7HZ-BdIuCSY5vLaNI75q1U=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/DLQIBK2Q5ZCUHKIYGCJ2FRWMPY.jpg'
    },
    {
      name: 'Termo',
      cost: '$1000',
      image: 'https://geant.vteximg.com.br/arquivos/ids/173913-700-700/895212-1.jpg?v=635959730766900000'
    },
  ]);

  const addToCart = (product) => {
    setCart([...cart, { ...product}])
  }

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter(product => product !== productToRemove)
    );
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
          View Products
          </button>

        <button onClick={() => navigateTo(PAGE_CART)}>
          Cart ({cart.length})
          </button>  
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
