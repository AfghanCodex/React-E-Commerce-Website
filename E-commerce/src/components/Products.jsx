const ProductsArray = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    qty: 15,
    category: "Electronics",
    brand: "Sony",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 79.99,
    qty: 10,
    category: "Electronics",
    brand: "Samsung",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 59.99,
    qty: 20,
    category: "Fashion",
    brand: "Nike",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Laptop Backpack",
    price: 34.99,
    qty: 12,
    category: "Accessories",
    brand: "HP",
    rating: 4.2,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 89.99,
    qty: 8,
    category: "Electronics",
    brand: "Logitech",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Water Bottle",
    price: 14.99,
    qty: 25,
    category: "Lifestyle",
    brand: "Hydro Flask",
    rating: 4.4,
  },
];

const Products = ({ cart, setCart }) => {
  return (
    <div className="container">
      <ul className="row d-flex justify-content-center align-item-center gap-3 py-4 px-4">
        {ProductsArray.map((product) => (
          <ProductsItem
            product={product}
            cart={cart}
            setCart={setCart}
            key={product.id}
          />
        ))}

        {/* <div className="col-md-3 card py-2 px-2 "></div> */}
      </ul>
    </div>
  );
};

function ProductsItem({ product, setCart, cart }) {
  function handleCart() {
    setCart((cartPro) => [...cartPro, product]);
  }

  return (
    <li className="col-md-3 card py-3 px-5">
      <p>Name : {product.name}</p>
      <p>Price : {product.price}</p>
      <p>Category : {product.category}</p>
      <p>Brand : {product.brand}</p>
      <p>Rating : {product.rating}</p>
      <button onClick={handleCart} className="btn btn-primary">
        Add To Cart
      </button>
    </li>
  );
}

export default Products;
