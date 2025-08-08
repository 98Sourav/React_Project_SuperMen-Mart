import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=12')
      .then((res) => res.json())
      .then((data) => {
        const transformed = data.map((item) => ({
          id: item.id,
          image: item.image,
          title: item.title,
          rating: '★'.repeat(Math.round(item.rating.rate)) + '☆'.repeat(5 - Math.round(item.rating.rate)),
          discounted: (item.price * 80).toFixed(0),
          original: (item.price * 100).toFixed(0),
        }));
        setProducts(transformed);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <section id="product-list" className="product-section">
      <h1>Trending Now</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onAdd={() => onAddToCart(product)}  // Trigger cart add here
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
